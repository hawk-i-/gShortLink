import { readdirSync, lstatSync } from 'fs';
import { join } from 'path';
import { chain, isNil } from 'lodash';
import { G_ENV as ENV } from './types';

export const CONFIG_PATH = join(__dirname, '../config');

class ConfigStore {

    env: ENV
    configs: object

    constructor(env: ENV) {
        this.env = env;
        this.configs = ;
    }
}

export const loadConfigs = (env ?: ENV) => {
    console.log(ENV[env]);
    const filePattern = new RegExp(isNil(env) ? '[0-9a-zA-Z]+\\.json' : `[0-9a-zA-Z]+(${'\\.' + ENV[env] })?\\.json`);
    const configFiles = chain(readdirSync(CONFIG_PATH))
    .filter((name: string) => lstatSync(join(CONFIG_PATH, name)).isFile())
    .filter((name: string) => name.match(filePattern))
    .value();

    console.log(configFiles);

}