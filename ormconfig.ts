import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  database: 'thirteenth-project',
  host: 'localhost',
  username: 'postgres',
  password: '7976',
  port: 5432,
  entities: ['dist/src/**/*.entity{.ts,.js}'],
  synchronize: false,
  migrations: ['dist/src/db/migrations/*.js'],
  cli: {
    migrationsDir: 'src/db/migrations',
  },
};
export default config;
