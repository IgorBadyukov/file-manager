import * as zlib from 'zlib';
import * as fs from 'fs';

export async function compress(fileWay, compressWay) {
    try {
        const inp = fs.createReadStream(fileWay, 'utf8');
        const out = fs.createWriteStream(compressWay)
        const compr = zlib.createBrotliCompress();
        inp.pipe(compr).pipe(out);
        console.log(`File successfully compressed!`);
    } catch (err) {
        console.error(`Operation failed! ${err}`);
    }
}
