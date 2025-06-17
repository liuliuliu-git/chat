import { JwtModuleOptions } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

export const getJwtConfig = (
  configService: ConfigService,
): JwtModuleOptions => ({
  secret: configService.get<string>('JWT_SECRET'),
  signOptions: { expiresIn: '60m' }, // Token有效期，例如60分钟
});
