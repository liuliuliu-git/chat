import React, {useState} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ActivityIndicator,
    Alert,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    SafeAreaView
} from 'react-native';
import {Link, router} from 'expo-router';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import {useTheme, CommonStyles, createDynamicStyles} from '@/constants';

// 表单验证schema
const registerSchema = yup.object({
    username: yup.string()
        .required('用户名不能为空')
        .min(3, '用户名至少3个字符')
        .max(20, '用户名最多20个字符'),
    email: yup.string()
        .email('请输入有效的邮箱地址')
        .required('邮箱不能为空'),
    password: yup.string()
        .required('密码不能为空')
        .min(8, '密码至少8个字符')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
            '密码必须包含大小写字母、数字和特殊字符'
        ),
    confirmPassword: yup.string()
        .required('请确认密码')
        .oneOf([yup.ref('password')], '两次输入的密码不一致'),
}).required();

type RegisterFormData = yup.InferType<typeof registerSchema>;

export default function RegisterScreen() {
    const [isLoading, setIsLoading] = useState(false);
    const {colors, isDark} = useTheme();
    const styles = createDynamicStyles(isDark);

    const {control, handleSubmit, formState: {errors}} = useForm<RegisterFormData>({
        resolver: yupResolver(registerSchema),
        defaultValues: {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
    });

    const onSubmit = async (data: RegisterFormData) => {
        try {
            setIsLoading(true);
            // TODO: 替换为实际的API地址以及信息
            const response = await axios.post('http://localhost:3000/auth/register', {
                username: data.username,
                email: data.email,
                password: data.password,
            });

            if (response.data.userId) {
                Alert.alert(
                    '注册成功',
                    '请登录以继续',
                    [
                        {
                            text: '确定',
                            onPress: () => router.replace('/(auth)/login'),
                        },
                    ]
                );
            }
        } catch (error: any) {
            Alert.alert(
                '注册失败',
                error.response?.data?.message || '请检查网络连接后重试'
            );
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView 
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
            >
                <ScrollView 
                    contentContainerStyle={styles.scrollContainer}
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps="handled"
                    bounces={false}
                >
                    <View style={styles.formContainer}>
                        <Text style={styles.title}>注册</Text>

                        <View style={{width: '100%'}}>
                            <Controller
                                control={control}
                                name="username"
                                render={({field: {onChange, value}}) => (
                                    <View style={CommonStyles.inputContainer}>
                                        <TextInput
                                            style={styles.input}
                                            placeholder="用户名"
                                            placeholderTextColor={colors.inputPlaceholder}
                                            autoCapitalize="none"
                                            value={value}
                                            onChangeText={onChange}
                                            returnKeyType="next"
                                        />
                                        {errors.username && (
                                            <Text style={styles.errorText}>{errors.username.message}</Text>
                                        )}
                                    </View>
                                )}
                            />

                            <Controller
                                control={control}
                                name="email"
                                render={({field: {onChange, value}}) => (
                                    <View style={CommonStyles.inputContainer}>
                                        <TextInput
                                            style={styles.input}
                                            placeholder="邮箱"
                                            placeholderTextColor={colors.inputPlaceholder}
                                            keyboardType="email-address"
                                            autoCapitalize="none"
                                            value={value}
                                            onChangeText={onChange}
                                            returnKeyType="next"
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
                                render={({field: {onChange, value}}) => (
                                    <View style={CommonStyles.inputContainer}>
                                        <TextInput
                                            style={styles.input}
                                            placeholder="密码"
                                            placeholderTextColor={colors.inputPlaceholder}
                                            secureTextEntry
                                            value={value}
                                            onChangeText={onChange}
                                            returnKeyType="next"
                                        />
                                        {errors.password && (
                                            <Text style={styles.errorText}>{errors.password.message}</Text>
                                        )}
                                    </View>
                                )}
                            />

                            <Controller
                                control={control}
                                name="confirmPassword"
                                render={({field: {onChange, value}}) => (
                                    <View style={CommonStyles.inputContainer}>
                                        <TextInput
                                            style={styles.input}
                                            placeholder="确认密码"
                                            placeholderTextColor={colors.inputPlaceholder}
                                            secureTextEntry
                                            value={value}
                                            onChangeText={onChange}
                                            returnKeyType="done"
                                            onSubmitEditing={handleSubmit(onSubmit)}
                                        />
                                        {errors.confirmPassword && (
                                            <Text style={styles.errorText}>{errors.confirmPassword.message}</Text>
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
                                    <ActivityIndicator color={colors.buttonText}/>
                                ) : (
                                    <Text style={styles.buttonText}>注册</Text>
                                )}
                            </TouchableOpacity>

                            <View style={CommonStyles.footer}>
                                <Text style={styles.footerText}>已有账号？</Text>
                                <Link href="/(auth)/login" replace asChild>
                                    <TouchableOpacity>
                                        <Text style={styles.link}>立即登录</Text>
                                    </TouchableOpacity>
                                </Link>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
} 