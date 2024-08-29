import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hey Antonio, thanks again for this opportunity!';
  }
}

// Where we implement our business logic
