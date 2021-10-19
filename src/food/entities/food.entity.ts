import { Category } from "src/category/entities/category.entity";
import { Restaurant } from "src/restaurant/entities/restaurant.entity";

export class Food {
    id?: string;
    name: string;
    description: string;
    price: number;
    ingredients: string[];
    size: string;
    image: string;
    rating: number;
    ratingsNumber: number;
    restaurant: Restaurant;
    category: Category;
}
