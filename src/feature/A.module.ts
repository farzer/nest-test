import { Module } from '@nestjs/common';
import { BModule } from './b/b.module';
import { CController } from './c/c.controller';
import { DController } from './d/d.controller';

@Module({
  imports: [BModule],
  controllers: [CController, DController],
})
export class AModule {}
