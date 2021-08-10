import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const connectDb: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'cv_tech',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
