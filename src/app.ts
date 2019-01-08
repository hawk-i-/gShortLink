import { loadConfigs } from './config';
import { ENV } from './types';

loadConfigs(ENV.dev);