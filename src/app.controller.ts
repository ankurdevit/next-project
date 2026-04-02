import { Body, Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/api/hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/api/webhook')
  getWebhook(@Body() body: any): string {
    return this.appService.getWebhook(body);
  }
}
