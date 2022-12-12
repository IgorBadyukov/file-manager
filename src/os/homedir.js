import os from 'os';

export async function homedir () {
    const result = os.homedir();
    console.log(result);
}
