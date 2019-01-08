import {} from 'winston';
import { logger } from 'express-winston';
import { createLogger } from 'winston';

const appLogger = createLogger();
export const loggerMiddleware = logger(appLogger);