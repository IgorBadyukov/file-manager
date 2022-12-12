import fs from 'fs';

export function rename (fileWay, newFileWay) {
    fs.rename(fileWay, newFileWay, (err) => {
        if (err) {
            console.error(`Operation failed! ${err}`);
        }
        else {
            console.log('File successfully renamed!')
        }
    });
}
