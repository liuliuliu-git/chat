import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { Colors } from './Colors';
import { Theme } from './Theme';

/**
 * 常用样式组合
 */
export const CommonStyles = StyleSheet.create({
  // 容器样式
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  } as ViewStyle,
  
  // 居中容器
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.light.background,
  } as ViewStyle,
  
  // 表单容器
  formContainer: {
    flex: 1,
    padding: Theme.spacing.lg,
    backgroundColor: Colors.light.background,
    justifyContent: 'center',
  } as ViewStyle,
  
  // 标题样式
  title: {
    fontSize: Theme.fontSize.xxl,
    fontWeight: Theme.fontWeight.bold,
    marginBottom: Theme.spacing.xl,
    textAlign: 'center',
    color: Colors.light.text,
  } as TextStyle,
  
  // 输入框容器
  inputContainer: {
    marginBottom: Theme.spacing.md,
  } as ViewStyle,
  
  // 输入框样式
  input: {
    borderWidth: 1,
    borderColor: Colors.light.inputBorder,
    backgroundColor: Colors.light.inputBackground,
    padding: Theme.spacing.md,
    borderRadius: Theme.borderRadius.md,
    fontSize: Theme.fontSize.md,
    color: Colors.light.text,
  } as TextStyle,
  
  // 错误文本样式
  errorText: {
    color: Colors.light.error,
    fontSize: Theme.fontSize.xs,
    marginTop: Theme.spacing.xs,
  } as TextStyle,
  
  // 主要按钮样式
  buttonPrimary: {
    backgroundColor: Colors.light.buttonPrimary,
    padding: Theme.spacing.md,
    borderRadius: Theme.borderRadius.md,
    alignItems: 'center',
    marginTop: Theme.spacing.sm,
    ...Theme.shadow.sm,
  } as ViewStyle,
  
  // 次要按钮样式
  buttonSecondary: {
    backgroundColor: Colors.light.buttonSecondary,
    padding: Theme.spacing.md,
    borderRadius: Theme.borderRadius.md,
    alignItems: 'center',
    marginTop: Theme.spacing.sm,
    borderWidth: 1,
    borderColor: Colors.light.border,
  } as ViewStyle,
  
  // 按钮文本样式
  buttonText: {
    color: Colors.light.buttonText,
    fontSize: Theme.fontSize.md,
    fontWeight: Theme.fontWeight.bold,
  } as TextStyle,
  
  // 次要按钮文本样式
  buttonTextSecondary: {
    color: Colors.light.buttonTextSecondary,
    fontSize: Theme.fontSize.md,
    fontWeight: Theme.fontWeight.medium,
  } as TextStyle,
  
  // 页脚样式
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: Theme.spacing.lg,
  } as ViewStyle,
  
  // 页脚文本样式
  footerText: {
    color: Colors.light.textSecondary,
    fontSize: Theme.fontSize.sm,
  } as TextStyle,
  
  // 链接样式
  link: {
    color: Colors.light.primary,
    marginLeft: Theme.spacing.xs,
    fontSize: Theme.fontSize.sm,
    fontWeight: Theme.fontWeight.medium,
  } as TextStyle,
  
  // 卡片样式
  card: {
    backgroundColor: Colors.light.background,
    borderRadius: Theme.borderRadius.lg,
    padding: Theme.spacing.lg,
    margin: Theme.spacing.md,
    ...Theme.shadow.md,
  } as ViewStyle,
  
  // 分割线样式
  divider: {
    height: 1,
    backgroundColor: Colors.light.border,
    marginVertical: Theme.spacing.md,
  } as ViewStyle,
});

/**
 * 创建动态样式（支持主题切换）
 */
export function createDynamicStyles(isDark: boolean) {
  const colors = isDark ? Colors.dark : Colors.light;
  
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    } as ViewStyle,
    
    centerContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.background,
    } as ViewStyle,
    
    formContainer: {
      flex: 1,
      padding: Theme.spacing.lg,
      backgroundColor: colors.background,
      justifyContent: 'center',
    } as ViewStyle,
    
    title: {
      fontSize: Theme.fontSize.xxl,
      fontWeight: Theme.fontWeight.bold,
      marginBottom: Theme.spacing.xl,
      textAlign: 'center',
      color: colors.text,
    } as TextStyle,
    
    input: {
      borderWidth: 1,
      borderColor: colors.inputBorder,
      backgroundColor: colors.inputBackground,
      padding: Theme.spacing.md,
      borderRadius: Theme.borderRadius.md,
      fontSize: Theme.fontSize.md,
      color: colors.text,
    } as TextStyle,
    
    errorText: {
      color: colors.error,
      fontSize: Theme.fontSize.xs,
      marginTop: Theme.spacing.xs,
    } as TextStyle,
    
    buttonPrimary: {
      backgroundColor: colors.buttonPrimary,
      padding: Theme.spacing.md,
      borderRadius: Theme.borderRadius.md,
      alignItems: 'center',
      marginTop: Theme.spacing.sm,
      ...Theme.shadow.sm,
    } as ViewStyle,
    
    buttonSecondary: {
      backgroundColor: colors.buttonSecondary,
      padding: Theme.spacing.md,
      borderRadius: Theme.borderRadius.md,
      alignItems: 'center',
      marginTop: Theme.spacing.sm,
      borderWidth: 1,
      borderColor: colors.border,
    } as ViewStyle,
    
    buttonText: {
      color: colors.buttonText,
      fontSize: Theme.fontSize.md,
      fontWeight: Theme.fontWeight.bold,
    } as TextStyle,
    
    buttonTextSecondary: {
      color: colors.buttonTextSecondary,
      fontSize: Theme.fontSize.md,
      fontWeight: Theme.fontWeight.medium,
    } as TextStyle,
    
    footerText: {
      color: colors.textSecondary,
      fontSize: Theme.fontSize.sm,
    } as TextStyle,
    
    link: {
      color: colors.primary,
      marginLeft: Theme.spacing.xs,
      fontSize: Theme.fontSize.sm,
      fontWeight: Theme.fontWeight.medium,
    } as TextStyle,
    
    card: {
      backgroundColor: colors.background,
      borderRadius: Theme.borderRadius.lg,
      padding: Theme.spacing.lg,
      margin: Theme.spacing.md,
      ...Theme.shadow.md,
    } as ViewStyle,
    
    divider: {
      height: 1,
      backgroundColor: colors.border,
      marginVertical: Theme.spacing.md,
    } as ViewStyle,
  });
} 