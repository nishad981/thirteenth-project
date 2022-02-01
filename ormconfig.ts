import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  database: 'thirteenth-project',
  host: 'localhost',
  username: 'postgres',
  password: '7976',
  port: 5432,
  entities: [],
  synchronize: false,
};
export default config;
