import { Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

export class AppLoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP');
  private fs = require('fs');

  use(req: Request, res: Response, next: NextFunction) {
    const { ip, method, baseUrl } = req;
    const userAgent = req.get('user-agent') || '';

    res.on('close', () => {
      const { statusCode } = res;
      const contentLength = res.get('content-length');
      const dateNow = new Date();

      const logApp =
        '[Methode]=>' +
        method +
        ' -- ' +
        dateNow +
        ' -- [UserAgent]=> ' +
        userAgent +
        ' -- [Ip]=>' +
        ip +
        ' -- [baseUr]=>localhost:3000' +
        baseUrl +
        ' -- [statusResponse]=>' +
        statusCode +
        ' -- [ContentLength]=>' +
        contentLength;

      this.fs.writeFile('logsApp.txt', logApp + '\n', { flag: 'a' }, (err) => {
        if (err) {
          console.log(err);
        }
      });
      this.logger.log(logApp);
    });
    next();
  }
}
