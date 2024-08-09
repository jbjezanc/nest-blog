import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5433,
  username: 'yourusername',
  password: 'yourpassword',
  database: 'yourdbname',
  entities: ['**/*.entity.js'],
  migrations: ['migrations/*.js'],
});
