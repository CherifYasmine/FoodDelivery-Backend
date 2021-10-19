import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MulterModule } from '@nestjs/platform-express';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { RestaurantModule } from './restaurant/restaurant.module';
import { FoodModule } from './food/food.module';

@Module({
  imports: [MulterModule.register({ dest: './files', }), MongooseModule.forRoot('mongodb://localhost/nest'), CategoryModule, RestaurantModule, FoodModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
