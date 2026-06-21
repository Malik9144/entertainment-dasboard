import postgres from 'postgres';
import logger from './logger.js';

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is not set');
}

const db = postgres(DATABASE_URL, {
  max: 10,
  idle_timeout: 30,
  connect_timeout: 10,
});

db.unsafe('SELECT 1').then(() => {
  logger.info('Database connected successfully');
}).catch((error) => {
  logger.error('Database connection failed:', error);
  process.exit(1);
});

export default db;
