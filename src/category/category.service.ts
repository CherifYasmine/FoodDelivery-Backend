import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {Category} from './category.interface'
import {CreateCategory} from './dto/createCategory.dto'
@Injectable()
export class CategoryService {
    constructor(@InjectModel('category') private readonly categoryModel:  Model<Category>){}
    async findAll(): Promise<Category[]> {
        return await this.categoryModel.find();
    }
    async create(category: CreateCategory): Promise<Category> {
        const newItem = new this.categoryModel(category);
        return await newItem.save();
    }
    async findById(id: string): Promise<Category> {
        return this.categoryModel.findOne({ _id: id })
    }
    async delete(id: string): Promise<Category> {
        return await this.categoryModel.findByIdAndRemove(id);
       }
    async update(id: string, category: CreateCategory): Promise<Category> {
        return await this.categoryModel.findByIdAndUpdate(id, category, { new: true });
       }
}
