import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {

  constructor(private readonly appService: AppService) {

  }

  @Get()
  getHome(): string {
    return this.appService.getHome();
  }

  @Get()
  getStyle(): string {
    return this.appService.getStyle();
  }

}
