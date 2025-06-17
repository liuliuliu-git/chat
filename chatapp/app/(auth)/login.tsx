import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { Link, router } from 'expo-router';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useTheme, CommonStyles, createDynamicStyles } from '@/constants';

// 表单验证schema
const loginSchema = yup.object({
  email: yup.string().email('请输入有效的邮箱地址').required('邮箱不能为空'),
  password: yup.string().required('密码不能为空'),
}).required();

type LoginFormData = yup.InferType<typeof loginSchema>;

export default function LoginScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const { colors, isDark } = useTheme();
  const styles = createDynamicStyles(isDark);
  
  const { control, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      setIsLoading(true);
      // TODO: 替换为实际的API地址以及信息
      const response = await axios.post('http://localhost:3000/auth/login', data);
      
      if (response.data.accessToken) {
        // 保存token和用户信息
        await AsyncStorage.setItem('accessToken', response.data.accessToken);
        await AsyncStorage.setItem('user', JSON.stringify(response.data.user));
        
        // 跳转到首页
        router.replace('/');
      }
    } catch (error: any) {
      Alert.alert(
        '登录失败',
        error.response?.data?.message || '请检查网络连接后重试'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.formContainer}>
      <Text style={styles.title}>登录</Text>
      
      <View style={{ width: '100%' }}>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => (
            <View style={CommonStyles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="邮箱"
                placeholderTextColor={colors.inputPlaceholder}
                keyboardType="email-address"
                autoCapitalize="none"
                value={value}
                onChangeText={onChange}
              />
              {errors.email && (
                <Text style={styles.errorText}>{errors.email.message}</Text>
              )}
            </View>
          )}
        />

        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value } }) => (
            <View style={CommonStyles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="密码"
                placeholderTextColor={colors.inputPlaceholder}
                secureTextEntry
                value={value}
                onChangeText={onChange}
              />
              {errors.password && (
                <Text style={styles.errorText}>{errors.password.message}</Text>
              )}
            </View>
          )}
        />

        <TouchableOpacity
          style={styles.buttonPrimary}
          onPress={handleSubmit(onSubmit)}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator color={colors.buttonText} />
          ) : (
            <Text style={styles.buttonText}>登录</Text>
          )}
        </TouchableOpacity>

        <View style={CommonStyles.footer}>
          <Text style={styles.footerText}>还没有账号？</Text>
          <Link href="/(auth)/register" replace asChild>
            <TouchableOpacity>
              <Text style={styles.link}>立即注册</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  );
} 