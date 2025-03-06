import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const dbConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT || '3306'),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAMEs,
  entities: [__dirname + '/**/*.entity{.ts}'],
  synchronize: process.env.NODE_ENV === 'development',
  dropSchema: process.env.NODE_ENV === 'development',
};

export default dbConfig;
