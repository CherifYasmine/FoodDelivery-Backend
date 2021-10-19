import { CategorySchema } from './category.schema';
import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { MongooseModule }from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'category', schema: CategorySchema }])],
  controllers: [CategoryController],
  providers: [CategoryService]
})
export class CategoryModule {}
