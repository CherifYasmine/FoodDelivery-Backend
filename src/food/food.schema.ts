import * as mongoose from 'mongoose';
export const FoodSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
    price: Number,
    ingredients: [String],
    size: String,
    rating: Number,
    ratingsNumber: Number,
    restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Restaurant"
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    }

   });