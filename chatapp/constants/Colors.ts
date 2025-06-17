/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

/**
 * 应用颜色系统
 * 支持亮色和暗色主题
 */

// 主题色调
const tintColorLight = '#007AFF';
const tintColorDark = '#0A84FF';

// 基础颜色
const primary = '#007AFF';
const secondary = '#5856D6';
const success = '#34C759';
const warning = '#FF9500';
const error = '#FF3B30';
const info = '#5AC8FA';

export const Colors = {
  light: {
    // 主题色
    primary: primary,
    secondary: secondary,
    tint: tintColorLight,
    
    // 状态色
    success: success,
    warning: warning,
    error: error,
    info: info,
    
    // 文本色
    text: '#11181C',
    textSecondary: '#666666',
    textTertiary: '#999999',
    textInverse: '#FFFFFF',
    
    // 背景色
    background: '#FFFFFF',
    backgroundSecondary: '#F8F9FA',
    backgroundTertiary: '#F1F3F4',
    
    // 边框色
    border: '#DDDDDD',
    borderSecondary: '#E5E5E5',
    
    // 图标色
    icon: 'rgba(255, 255, 255, 0.2)',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    
    // 输入框
    inputBackground: '#FFFFFF',
    inputBorder: '#DDDDDD',
    inputPlaceholder: '#999999',
    
    // 按钮
    buttonPrimary: primary,
    buttonSecondary: '#F1F3F4',
    buttonText: '#FFFFFF',
    buttonTextSecondary: '#11181C',
    
    // 阴影
    shadow: 'rgba(0, 0, 0, 0.1)',
  },
  dark: {
    // 主题色
    primary: primary,
    secondary: secondary,
    tint: tintColorDark,
    
    // 状态色
    success: success,
    warning: warning,
    error: error,
    info: info,
    
    // 文本色
    text: '#ECEDEE',
    textSecondary: '#9BA1A6',
    textTertiary: '#687076',
    textInverse: '#000000',
    
    // 背景色
    background: '#000000',
    backgroundSecondary: '#1C1C1E',
    backgroundTertiary: '#2C2C2E',
    
    // 边框色
    border: '#38383A',
    borderSecondary: '#48484A',
    
    // 图标色
    icon: 'rgba(0, 0, 0, 0.2)',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    
    // 输入框
    inputBackground: '#1C1C1E',
    inputBorder: '#38383A',
    inputPlaceholder: '#687076',
    
    // 按钮
    buttonPrimary: primary,
    buttonSecondary: '#2C2C2E',
    buttonText: '#FFFFFF',
    buttonTextSecondary: '#ECEDEE',
    
    // 阴影
    shadow: 'rgba(0, 0, 0, 0.3)',
  },
};

// 导出主题色调常量
export const tintColor = {
  light: tintColorLight,
  dark: tintColorDark,
};

// 导出基础颜色常量
export const baseColors = {
  primary,
  secondary,
  success,
  warning,
  error,
  info,
};
