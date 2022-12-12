import fs from 'fs';

export function add(fileName) {
    fs.writeFile(fileName, "", function(err) {
        if (err) {
            console.error(`Operation failed! ${err}`);
        } else {
            console.log("File created");
        }
    });
}
