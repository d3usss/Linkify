import { ApiProperty, PartialType } from '@nestjs/swagger';
import { UrlCreateDto } from './url-create.dto';
import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class UrlUpdateDto extends PartialType(UrlCreateDto) {
  @ApiProperty({
    required: false,
    description: 'Original URL',
    example: 'https://example.com/very/long/url',
  })
  @IsString()
  @IsNotEmpty()
  @IsUrl()
  originalUrl: string;

  @ApiProperty({ required: false, description: 'Short URL', example: 'abc123' })
  @IsString()
  @IsNotEmpty()
  @IsUrl()
  shortUrl: string;
}
