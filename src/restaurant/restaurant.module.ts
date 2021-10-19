import { Module } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { RestaurantController } from './restaurant.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RestaurantSchema } from './restaurant.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:'restaurant', schema:RestaurantSchema}])],
  controllers: [RestaurantController],
  providers: [RestaurantService]
})
export class RestaurantModule {}
