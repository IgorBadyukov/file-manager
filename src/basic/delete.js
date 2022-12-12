import { rm } from 'node:fs/promises';

export async function remove (src) {
    try {
        await rm(src);
        console.log('File successfully deleted!')
    } catch (err) {
        console.error(`Operation failed! ${err}`);
    }
}
