import { cwd } from 'process';
import * as fs from 'fs';

export async function ls() {
    let allFiles = await fs.promises.readdir(cwd(), {withFileTypes: true});
    allFiles = allFiles.map((file) => {
        return  {...file, type: file.isFile() ? 'file' : 'directory' }
    })
    console.table(allFiles);
}
