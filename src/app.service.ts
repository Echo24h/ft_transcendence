import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getHome(): string {
    const html = readFileSync('view/home.html', 'utf8');
    return html;
  }

  getStyle(): string {
    const html = readFileSync('view/style.css', 'utf8');
    return html;
  }
}
