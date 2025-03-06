import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UrlModule } from './url/url.module';
import dbConfig from './configs/config.db';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.development',
      isGlobal: true,
    }),
    UrlModule,
    TypeOrmModule.forRoot(dbConfig),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
