import s3storage from './storages/s3';
import localStorage from './storages/local';
import config from './config';

const storage = config.STORAGE_TYPE === 's3' ? s3storage() : localStorage();
export default storage