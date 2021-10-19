import { CreateCategory } from './createCategory.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateCategory extends PartialType(CreateCategory) {

}