import validateEnv from '@utils/env-validation';
import createServer from '@src/app';
import { logger } from '@kd/logger';
import config from 'config';

const app = createServer();

// validation environment variables
validateEnv();

const port = config.get('app.port') || 8080;

app.listen(port, () => {
  logger.info(`🚀 App listening on the http://localhost:${port}`);
});
