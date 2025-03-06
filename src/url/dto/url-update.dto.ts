import { PartialType } from '@nestjs/swagger';
import { UrlCreateDto } from './url-create.dto';
import { IsNotEmpty, IsNumber, IsString, IsUrl } from 'class-validator';

export class UrlUpdateDto extends PartialType(UrlCreateDto) {
  @IsString()
  @IsNotEmpty()
  @IsUrl()
  originalUrl: string;

  @IsString()
  @IsNotEmpty()
  @IsUrl()
  shortUrl: string;

  @IsNumber()
  @IsNotEmpty()
  clicks: number;
}
