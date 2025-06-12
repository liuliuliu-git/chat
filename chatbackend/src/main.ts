import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 配置 Swagger 文档
  const config = new DocumentBuilder()
    .setTitle('NestJS API')
    .setDescription('NestJS API 接口文档')
    .setVersion('1.0')
    .addBearerAuth() // 添加 Bearer Token 认证
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // 设置文档访问路径为 /api
  await app.listen(process.env.PORT ?? 3000);
}

bootstrap().catch((err) => {
  console.error('启动应用程序时发生错误:', err);
  process.exit(1);
});
