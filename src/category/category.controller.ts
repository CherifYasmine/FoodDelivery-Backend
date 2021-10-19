import { CategoryService } from './category.service';
import { Body, Controller, Delete, Get, Param, Post, Put, Req, Res, UseInterceptors } from '@nestjs/common';
import { CreateCategory } from './dto/createCategory.dto'
import { UpdateCategory } from './dto/updateCategory.dto'

import { Category } from './entities/category.entity'
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { editFileName, imageFileFilter } from '../utils/file-uploading.utils';
import {Request} from 'express'
@Controller('category')
export class CategoryController {

    constructor(private readonly categoryService: CategoryService) { }
    @Get('categories')
    findAll(): Promise<Category[]> {
        return this.categoryService.findAll();
    }
    @Post()
    @UseInterceptors(
        FileInterceptor('image', {
          storage: diskStorage({
            destination: './files',
            filename: editFileName,
          }),
          fileFilter: imageFileFilter,
        }),
      )
    create(@Req()req: Request ) {
        const {name} = req.body
        const file = req.file
        const response = {
            originalname: file.originalname,
            filename: file.filename,
        };
        console.log(response.filename);
        const createCategoryDto:CreateCategory  = {
            name: name,
            image: "http://localhost:3000/category/image/" + response.filename,
            itemsNumber:0,
        }
        return this.categoryService.create(createCategoryDto);
    }
    @Get(':id')
    findById(@Param('id') id): Promise<Category> {
        return this.categoryService.findById(id);
    }
    @Delete(':id')
    delete(@Param('id') id): Promise<Category> {
        return this.categoryService.delete(id);
    }
    @Put(':id')
    update(@Body() updateCategoryDto: UpdateCategory, @Param('id') id): Promise<Category> {
        return this.categoryService.update(id, updateCategoryDto);
    }
    @Get('image/:imgpath')
    seeUploadedFile(@Param('imgpath') image, @Res() res) {
    return res.sendFile(image, { root: './files' });
  }
}

