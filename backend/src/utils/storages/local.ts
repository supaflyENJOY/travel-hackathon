import { copy } from 'fs-extra';
import { resolve } from 'path';
import config from '../config';

export default () => {
    return {
        uploadFile(localPath, key) {
            return copy(localPath, resolve(process.cwd(), './tmp/', config.STORAGE_FOLDER, key));
        }
    }
}