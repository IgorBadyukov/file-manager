import { chdir } from 'process';

export async function up() {
    try {
        chdir('../');
    }
    catch (err) {
        console.error(`Operation failed! ${err}`);
    }
}
