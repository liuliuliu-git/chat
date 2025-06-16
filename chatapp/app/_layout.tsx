import {useEffect, useState} from 'react';
import {Stack, useRouter, useSegments, useNavigation} from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SafeAreaProvider} from "react-native-safe-area-context";

// 认证状态管理
function useAuth() {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
    const segments = useSegments();
    const router = useRouter();
    const navigation = useNavigation();

    useEffect(() => {
        checkAuth();
    }, []);

    const checkAuth = async () => {
        try {
            const token = await AsyncStorage.getItem('accessToken');
            setIsAuthenticated(!!token);
        } catch (error) {
            setIsAuthenticated(false);
        }
    };

    useEffect(() => {
        if (isAuthenticated === null) {
            return;
        }

        // 获取当前路由路径
        const currentPath = segments.join('/');
        const isAuthScreen = currentPath.startsWith('(auth)');

        if (!isAuthenticated && !isAuthScreen) {
            // 未登录且不在认证页面，重定向到登录页
            router.replace('/(auth)/login');
        } else if (isAuthenticated && isAuthScreen) {
            // 已登录但在认证页面，重定向到首页
            router.replace('/');
        }
    }, [isAuthenticated, segments]);

    return {isAuthenticated, checkAuth};
}

export default function RootLayout() {
    useAuth();

    return <SafeAreaProvider>
        <Stack
            screenOptions={{
                headerShown: false,
                // 禁用返回手势，防止用户通过手势返回
                gestureEnabled: false,
            }}
        >
            <Stack.Screen 
                name="index"
                options={{
                    // 禁用返回按钮
                    headerBackVisible: false,
                }}
            />
            <Stack.Screen 
                name="(auth)/login"
                options={{
                    // 禁用返回按钮
                    headerBackVisible: false,
                }}
            />
            <Stack.Screen 
                name="(auth)/register"
                options={{
                    // 禁用返回按钮
                    headerBackVisible: false,
                }}
            />
        </Stack>
    </SafeAreaProvider>;
}
