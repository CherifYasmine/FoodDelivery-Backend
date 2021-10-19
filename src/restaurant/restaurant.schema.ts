import * as mongoose from 'mongoose';
export const RestaurantSchema = new mongoose.Schema({
    name: String,
    image: String,
    type: String,
    foodType: String,
    rating:Number,
    ratingsNumber:Number
   });