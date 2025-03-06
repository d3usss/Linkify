import { IsString, IsNotEmpty, IsUrl } from 'class-validator';

export class UrlCreateDto {
  @IsString()
  @IsNotEmpty()
  @IsUrl()
  originalUrl: string;

  @IsString()
  @IsNotEmpty()
  @IsUrl()
  shortUrl: string;
}
