import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggerMiddleware } from '@/common/middleware/logger.middleware';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123456',
      database: 'chatapp',
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // 添加实体路径
      synchronize: true, // 开发环境使用，生产环境请设置为 false
      // extra: {
      //   connectionLimit: 10,
      //   queueLimit: 0,
      //   waitForConnections: true,
      // },
      // autoLoadEntities: true, // 启用自动加载实体
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
