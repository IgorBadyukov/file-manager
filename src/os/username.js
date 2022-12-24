import os from 'os';

export async function username () {
    const result = os.userInfo();
    console.log(result.username);
}
