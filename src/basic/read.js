import fs from 'fs';

export async function read (fileWay) {
    try {
        const rs = fs.createReadStream(fileWay);
        let data = '';
        rs.on('data', chunk => data += chunk.toString());
        rs.on('end', () => { console.log(data); });
    } catch (err) {
        console.error(`Operation failed! ${err}`);
    }

}
