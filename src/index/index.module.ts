import { Module } from '@nestjs/common';
import { IndexController } from './index.controller';

@Module({
  controllers: [IndexController],
  providers: [],
})
export class IndexModule {}
