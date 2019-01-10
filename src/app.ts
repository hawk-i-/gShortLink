import { loadConfigs } from './config';
import { G_ENV as ENV } from './types';

loadConfigs(ENV.dev);