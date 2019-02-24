import { copyAsync } from 'fs-extra-promise';
import { resolve } from 'path';
import config from '../config';

export default () => {
    return {
        async uploadFile(localPath, key) {
            await copyAsync(localPath, resolve(process.cwd(), './tmp/', config.STORAGE_FOLDER, key));
            return true
        }
    }
}