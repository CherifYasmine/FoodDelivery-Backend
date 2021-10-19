import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { Restaurant } from './entities/restaurant.entity';

@Injectable()
export class RestaurantService {
  constructor(@InjectModel('restaurant') private readonly restaurantModel: Model<Restaurant> ){}
  async create(createRestaurantDto: CreateRestaurantDto): Promise<Restaurant> {
    const newRestaurant = new this.restaurantModel(createRestaurantDto)
    return await newRestaurant.save();
  }

  async findAll(): Promise<Restaurant[]> {
    return await this.restaurantModel.find();
  }

  async findOne(id: number): Promise<Restaurant>  {
    return await this.restaurantModel.findOne({ _id: id })
  }

  async update(id: number, updateRestaurantDto: UpdateRestaurantDto): Promise<Restaurant>  {
    return await this.restaurantModel.findByIdAndUpdate(id, updateRestaurantDto, { new: true})
  }

  async remove(id: number): Promise<Restaurant> {
    return await this.restaurantModel.findByIdAndRemove(id)
  }
}
