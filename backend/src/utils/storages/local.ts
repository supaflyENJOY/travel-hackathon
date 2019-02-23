import { copy } from 'fs-extra';
import { resolve } from 'path';

export default () => {
    return {
        uploadFile(localPath, key) {
            return copy(localPath, resolve(process.cwd(), './tmp/', key));
        }
    }
}