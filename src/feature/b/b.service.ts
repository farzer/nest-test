import { Injectable } from '@nestjs/common';

@Injectable()
export class BService {
  opt: any;
  constructor(options: any) {
    this.opt = options;
  }
  test() {
    return 'test';
  }
}
