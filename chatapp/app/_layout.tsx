import {Stack} from "expo-router";
import {SafeAreaView} from "react-native";

export default function RootLayout() {
    return <SafeAreaView style={{flex: 1}}>
        <Stack>
            {/* 首页 */}
            <Stack.Screen name="index" options={{headerShown: false}}/>
        </Stack>

    </SafeAreaView>;
}
