import { Module } from '@nestjs/common';
import { FoodService } from './food.service';
import { FoodController } from './food.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FoodSchema } from './food.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'food', schema: FoodSchema }])],
  controllers: [FoodController],
  providers: [FoodService]
})
export class FoodModule {}
