import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsService } from './service/cats/cats.service';
import { TestService } from './service/test/test.service';
import { TestController } from './controllers/test/test.controller';
import { CatsController } from './controllers/cats/cats.controller';

@Module({
  imports: [],
  controllers: [AppController, CatsController, TestController],
  providers: [AppService, CatsService, TestService],
})
export class AppModule {}
