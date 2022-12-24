import { copyFile } from 'node:fs/promises';

export async function copy(src, dest) {
    try {
        await copyFile(src, dest);
        console.log('File copied successfully')
    }
    catch (err) {
        console.error(`Operation failed! ${err}`);
    }
}
