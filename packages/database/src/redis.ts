import { logger } from '@kd/logger';
import Redis from 'ioredis';

const redis = new Redis();

redis.on('error', err => {
  logger.info(`Error: ${err}`);
});

redis.on('connect', () => {
  logger.info('Connected to Redis');
});

redis.on('close', () => {
  logger.info('Closed connection to Redis');
});

export default redis;
