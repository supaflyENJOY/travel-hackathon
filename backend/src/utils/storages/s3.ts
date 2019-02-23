import * as s3 from 's3';
import config from '../config';
import {
    join
} from 'path';

export default () => {
    var client = s3.createClient({
        maxAsyncS3: 20,
        s3RetryCount: 3,
        s3RetryDelay: 1000,
        multipartUploadThreshold: 20971520,
        multipartUploadSize: 15728640,
        s3Options: {
            accessKeyId: config.AWS_ACCESS_KEY,
            secretAccessKey: config.AWS_SECRET_KEY,
        },
    });

    return {
        uploadFile(localPath, key) {
            return new Promise((resolve, reject) => {
                const resolvedKey = join(config.STORAGE_FOLDER, key);
                const params = {
                    localFile: localPath,
                    s3Params: {
                        Bucket: config.AWS_BUCKET_NAME,
                        Key: resolvedKey,
                    },
                };
                var uploader = client.uploadFile(params);
                uploader.on('error', reject);
                uploader.on('end', () => {
                    const publicUrl = `${config.AWS_PUBLIC_URL}${resolvedKey}`;
                    resolve(publicUrl);
                });
            })
        }
    }
}