import { Module } from '@nestjs/common';
import { BController } from './b.controller';
import { BService } from './b.service';

@Module({
  imports: [],
  controllers: [BController],
  providers: [BService],
  exports: [BService],
})
export class BModule {}
