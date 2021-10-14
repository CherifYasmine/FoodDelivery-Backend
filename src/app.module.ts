import { Module } from '@nestjs/common';
import { MongooseModule }from '@nestjs/mongoose';
import { MulterModule } from '@nestjs/platform-express';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'), CategoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
