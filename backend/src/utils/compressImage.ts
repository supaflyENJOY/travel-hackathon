import * as imagemin from 'imagemin';
import * as imageminJpegTran from 'imagemin-jpegtran';
import * as pngToJpeg from 'png-to-jpeg';
import { extname } from 'path';
import { tmpdir } from 'os';

export default async (imagePath) => {
    const isPng = extname(imagePath) === '.png';
    const [{ path }] = await imagemin([imagePath], tmpdir(), {
        plugins: isPng ? 
        [
            pngToJpeg({ quality: 80 }),
            imageminJpegTran({
                arithmetic: true,
            })
        ] : [ 
            imageminJpegTran({
                arithmetic: true,
            })
        ]
    });
    return path;
}