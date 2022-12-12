import os from 'os';

export async function architecture() {
    const result = os.arch();
    console.log(
        `CPU architecture for which Node.js binary has compiled: ${result}`
    );
}
