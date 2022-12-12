import process, { cwd } from 'process';
import { exit } from 'process';

let userName = '';

export function processCheck() {
    if (process.argv[2].slice(0, 10) === '--username') {
        userName = process.argv[2].slice(11);
        console.log(`Welcome to the File Manager, ${userName}!`);
        showCurrentDir();
    }

    process.on('exit', (code) => {
        showCurrentDir();
        console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
    });
}

function showCurrentDir() {
    console.log(`You are currently in ${cwd()}`);
}
