import {
  IsString,
  IsEmail,
  MinLength,
  MaxLength,
  Matches,
} from 'class-validator';

export class RegisterDto {
  @IsString()
  @MinLength(3, { message: '用户名至少3个字符' })
  @MaxLength(20, { message: '用户名最多20个字符' })
  username: string;

  @IsEmail({}, { message: '请输入有效的邮箱地址' })
  email: string;

  @IsString()
  @MinLength(8, { message: '密码至少8个字符' })
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/, {
    message: '密码必须包含大小写字母、数字和特殊字符',
  })
  password: string;
}

export class LoginDto {
  @IsEmail({}, { message: '请输入有效的邮箱地址' })
  email: string;

  @IsString()
  password: string;
}
