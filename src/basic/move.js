import { copyFile, rm } from 'fs/promises';

export async function move(src, dest) {
    try {
        await copyFile(src, dest);
        await rm(src);
        console.log('File successfully moved!')
    } catch (err) {
        console.error(`Operation failed! ${err}`);
    }
}
