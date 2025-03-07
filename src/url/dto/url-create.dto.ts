import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsUrl } from 'class-validator';

export class UrlCreateDto {
  @ApiProperty({
    required: true,
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
