import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDate,
  IsIn,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

export class urlQueryDto {
  @ApiProperty({ required: false, description: 'Filter by ID' })
  @IsOptional()
  @IsString()
  id?: string;

  @ApiProperty({ required: false, description: 'Filter by original URL' })
  @IsOptional()
  @IsString()
  originalUrl?: string;

  @ApiProperty({ required: false, description: 'Filter by short URL' })
  @IsOptional()
  @IsString()
  shortUrl?: string;

  @ApiProperty({ required: false, description: 'Filter by creation date' })
  @IsOptional()
  @IsDate()
  createdAt?: Date;

  @ApiProperty({ required: false, description: 'Filter by update date' })
  @IsOptional()
  @IsDate()
  updatedAt?: Date;

  @ApiProperty({ required: false, description: 'Filter by number of clicks' })
  @IsOptional()
  @IsNumber()
  clicks?: number;

  @ApiProperty({ required: false, description: 'Filter by deletion status' })
  @IsOptional()
  @IsBoolean()
  isDeleted?: boolean;

  // Pagination
  @ApiProperty({ required: false, description: 'Page number', default: 1 })
  @IsOptional()
  @IsNumber()
  @Min(1)
  page?: number = 1;

  @ApiProperty({
    required: false,
    description: 'Number of items per page',
    default: 10,
  })
  @IsOptional()
  @IsNumber()
  @Min(1)
  limit?: number = 10;

  // Sorting
  @ApiProperty({
    required: false,
    description: 'Field to sort by',
    enum: ['id', 'originalUrl', 'shortUrl', 'createdAt', 'updatedAt', 'clicks'],
  })
  @IsOptional()
  @IsString()
  @IsIn(['id', 'originalUrl', 'shortUrl', 'createdAt', 'updatedAt', 'clicks'])
  sortBy?: string = 'createdAt';

  @ApiProperty({
    required: false,
    description: 'Sort direction',
    enum: ['ASC', 'DESC'],
  })
  @IsOptional()
  @IsString()
  @IsIn(['ASC', 'DESC'])
  sortOrder?: 'ASC' | 'DESC' = 'DESC';
}
