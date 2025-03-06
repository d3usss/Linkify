import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const dbConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'dev',
  password: 'dev',
  database: 'linkify',
  entities: [__dirname + '/**/*.entity{.ts}'],
  synchronize: process.env.NODE_ENV === 'development',
  dropSchema: process.env.NODE_ENV === 'development',
};

export default dbConfig;
