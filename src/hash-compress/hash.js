import { createReadStream } from 'fs';
import * as crypto from 'crypto';

export async function hash (src) {
    try {
        const hash = crypto.createHash('sha256');
        const input = createReadStream(src);
        input.on('data', chunk => {
            hash.update(chunk);
        });
        input.on('end', () => {
            console.log(hash.digest('hex'));
        });
    }
    catch (err) {
        console.error(`Operation failed! ${err}`);
    }
}
