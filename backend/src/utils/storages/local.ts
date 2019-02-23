import { copyAsync } from 'fs-extra-promise';
import { resolve } from 'path';
import config from '../config';

export default () => {
    return {
        uploadFile(localPath, key) {
            return copyAsync(localPath, resolve(process.cwd(), './tmp/', config.STORAGE_FOLDER, key));
        }
    }
}