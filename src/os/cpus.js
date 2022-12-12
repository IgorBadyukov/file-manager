import os from 'os';

export async function cpus () {
    const result = os.cpus();
    console.log(result);
}
