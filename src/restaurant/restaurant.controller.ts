import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, Req, Res, Put } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { editFileName, imageFileFilter } from '../utils/file-uploading.utils';
import { Request } from 'express'
import { Restaurant } from './entities/restaurant.entity';
@Controller('restaurant')
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) { }

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
  create(@Req() req: Request): Promise<Restaurant>{
    const { name, type, foodType } = req.body;
    const file = req.file
    const response = {
      originalname: file.originalname,
      filename: file.filename,
    };
    const createRestaurantDto = {
      name: name,
      type: type,
      foodType: foodType,
      rating: 0,
      ratingsNumber: 0,
      image: "http://localhost:3000/restaurant/image/" + response.filename,
    }
    return this.restaurantService.create(createRestaurantDto);
  }

  @Get('restaurants')
  findAll(): Promise<Restaurant[]> {
    return this.restaurantService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Promise<Restaurant> {
    return this.restaurantService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id, @Body() updateRestaurantDto: UpdateRestaurantDto): Promise<Restaurant> {
    return this.restaurantService.update(id, updateRestaurantDto);
  }

  @Delete(':id')
  remove(@Param('id') id): Promise<Restaurant> {
    return this.restaurantService.remove(id);
  }
  @Get('image/:imgpath')
    seeUploadedFile(@Param('imgpath') image, @Res() res) {
    return res.sendFile(image, { root: './files' });
  }
}
