import * as zlib from 'zlib';
import * as fs from 'fs';

export async function decompress(fileWay, decompressWay) {
    try {
        const inp = fs.createReadStream(fileWay);
        const out = fs.createWriteStream(decompressWay)
        const decompr = zlib.createBrotliDecompress();
        inp.pipe(decompr).pipe(out);
        console.log(`File successfully decompressed!`);

    }
    catch (err) {
        console.error(`Operation failed! ${err}`)
    }
}
