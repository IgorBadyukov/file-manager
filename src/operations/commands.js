import {up} from "../nwd/up.js";
import {cd} from "../nwd/cd.js";
import {ls} from "../nwd/ls.js";
import {read} from "../basic/read.js";
import {add} from "../basic/add.js";
import {rename} from "../basic/rename.js";
import {copy} from "../basic/copy.js";
import {move} from "../basic/move.js";
import {remove} from "../basic/delete.js";
import {getEol} from "../os/eol.js";
import {cpus} from "../os/cpus.js";
import {homedir} from "../os/homedir.js";
import {username} from "../os/username.js";
import {architecture} from "../os/architecture.js";
import {hash} from "../hash-compress/hash.js";
import {compress} from "../hash-compress/compress.js";
import {decompress} from "../hash-compress/decompress.js";
import { stdin as input, stdout as output, exit } from 'process';
import readline from 'readline';
import { showCurrentDir } from './process.js';

const rl = readline.createInterface({ input, output });

export function writeCommand() {
    rl.question('Write command to execute (input .exit or Ctrl+C to end): ', async (answer) => {
        switch (answer.split(' ')[0]) {
            case 'up':
                await up();
                showCurrentDir();
                break;
            case 'cd':
                await cd(answer.split(' ')[1]);
                showCurrentDir();
                break;
            case 'ls':
                await ls();
                break;
            case 'cat':
                await read(answer.split(' ')[1]);
                showCurrentDir();
                break;
            case 'add':
                await add(answer.split(' ')[1]);
                showCurrentDir();
                break;
            case 'rn':
                await rename(answer.split(' ')[1], answer.split(' ')[2]);
                showCurrentDir();
                break;
            case 'cp':
                await copy(answer.split(' ')[1], answer.split(' ')[2]);
                showCurrentDir();
                break;
            case 'mv':
                await move(answer.split(' ')[1], answer.split(' ')[2]);
                showCurrentDir();
                break;
            case 'rm':
                await remove(answer.split(' ')[1]);
                showCurrentDir();
                break;
            case 'hash':
                await hash(answer.split(' ')[1]);
                break;
            case 'compress':
                await compress(answer.split(' ')[1], answer.split(' ')[2]);
                showCurrentDir();
                break;
            case 'decompress':
                await decompress(answer.split(' ')[1], answer.split(' ')[2]);
                showCurrentDir();
                break;
            case '.exit':
                exit();
                break;
            case 'os':
                switch(answer.split(' ')[1]) {
                    case '--EOL':
                        getEol();
                        showCurrentDir();
                        break;
                    case '--cpus':
                        cpus();
                        showCurrentDir();
                        break;
                    case '--homedir':
                        homedir();
                        showCurrentDir();
                        break;
                    case '--username':
                        username();
                        showCurrentDir();
                        break;
                    case '--architecture':
                        architecture();
                        showCurrentDir();
                        break;
                    default:
                        console.error('Invalid input (parameters)');
                }
                break;
            default:
                console.error('Invalid input');
        }
        writeCommand();
    });

}
