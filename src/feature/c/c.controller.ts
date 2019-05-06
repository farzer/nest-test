import { Controller } from '@nestjs/common';

@Controller()
export class CController {
  async index() {
    return 'index';
  }
}
