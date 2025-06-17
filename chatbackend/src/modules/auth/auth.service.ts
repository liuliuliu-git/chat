import {
  Injectable,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { UsersService } from '@/modules/users';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { RegisterDto, LoginDto } from './auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterDto): Promise<any> {
    const { username, email, password } = registerDto;

    // 检查邮箱是否已存在
    const existingUser = await this.usersService.findByEmail(email);
    if (existingUser) {
      throw new BadRequestException('邮箱已被注册');
    }

    // 检查用户名是否已存在
    const existingUsername = await this.usersService.findByUsername(username);
    if (existingUsername) {
      throw new BadRequestException('用户名已被使用');
    }

    // 密码加密
    const hashedPassword = await bcrypt.hash(password, 10); // saltRounds = 10

    // 创建用户
    const user = await this.usersService.create({
      username,
      email,
      password: hashedPassword,
    });

    // 返回部分用户信息（不包含密码）
    const { password: _, ...result } = user;
    return result;
  }

  async login(loginDto: LoginDto): Promise<any> {
    const { email, password } = loginDto;

    const user = await this.usersService.findByEmailWithPassword(email);
    if (!user) {
      throw new UnauthorizedException('邮箱或密码不正确');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('邮箱或密码不正确');
    }

    // 生成 JWT Token
    const payload = {
      email: user.email,
      sub: user.id,
      username: user.username,
    };
    return {
      accessToken: this.jwtService.sign(payload),
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
      },
    };
  }
}
