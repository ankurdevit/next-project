import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getWebhook(body: any): string {
    console.log('Webhook endpoint was hit', body, JSON.stringify(body));
    return 'Webhook received!';
  }
}
