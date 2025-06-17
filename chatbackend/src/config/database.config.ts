import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

/**
 * 数据库配置
 * @returns TypeOrmModuleOptions
 */
export const getDatabaseConfig = (
  configService: ConfigService,
): TypeOrmModuleOptions => ({
  type: 'postgres',
  host: configService.get<string>('DB_HOST'),
  port: configService.get<number>('DB_PORT'),
  username: configService.get<string>('DB_USER'),
  password: configService.get<string>('DB_PASS'),
  database: configService.get<string>('DB_NAME'),
  entities: [__dirname + '/../**/*.entity{.ts,.js}'], // 实体路径，注意这里的路径调整以适应新的文件位置
  synchronize: true, // 开发环境使用，生产环境请设置为 false
  logging: false, // 是否打印SQL日志
  // extra: {
  //   connectionLimit: 10,
  //   queueLimit: 0,
  //   waitForConnections: true,
  // },
  // autoLoadEntities: true, // 启用自动加载实体
});
