import * as imagemin from 'imagemin';
import * as imageminJpegTran from 'imagemin-jpegtran';
import * as pngToJpeg from 'png-to-jpeg';

export default (buffer) => imagemin.buffer(buffer, {
    plugins: [
        imageminJpegTran({ progressive: true }),
        pngToJpeg({ quality: 80 }),
    ]
});