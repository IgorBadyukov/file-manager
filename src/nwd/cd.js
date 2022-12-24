import { chdir } from 'process';

export async function cd(newDir) {
    try {
        chdir(newDir);
    }
    catch (err) {
        console.error(`Operation failed! ${err}`);
    }
}
