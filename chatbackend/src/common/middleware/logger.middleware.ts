import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { formatTime } from '@/utils/formateTime';
// 日志中间件
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { method, originalUrl, params, query } = req;
    console.log(`[${formatTime(new Date())}] ${method} ${originalUrl}`);
    console.log('路径参数:', params);
    console.log('查询参数:', query);

    const start = Date.now();

    res.on('finish', () => {
      const duration = Date.now() - start;
      console.log(
        `[${formatTime(new Date())}] ${method} ${originalUrl} ${res.statusCode} ${duration}ms`,
      );
    });

    next();
  }
}
