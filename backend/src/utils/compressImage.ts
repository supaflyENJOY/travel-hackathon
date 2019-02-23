import * as imagemin from 'imagemin';
import * as imageminJpegTran from 'imagemin-jpegtran';
import * as pngToJpeg from 'png-to-jpeg';
import { readFileAsync, writeFileAsync } from 'fs-extra-promise';
import * as uniqid from 'uniqid';
import { resolve, extname } from 'path';
import { tmpdir } from 'os';

export default async (imagePath) => {
    const buffer = await readFileAsync(imagePath);
    const isPng = extname(imagePath) === '.png';
    const newBuffer = await imagemin.buffer(buffer, {
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
    const outputPath = resolve(tmpdir(), `${uniqid()}.jpg`);
    await writeFileAsync(outputPath, newBuffer);
    return outputPath;
}