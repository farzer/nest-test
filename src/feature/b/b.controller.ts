import { Controller } from '@nestjs/common';
import { BService } from './b.service';

@Controller()
export class BController {
  constructor(private readonly bservice: BService) {}
  index() {
    this.bservice.test();
  }
}
