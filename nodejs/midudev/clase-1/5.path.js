const path = require('node:path');

// barra separadora de carperas segun SO
console.log(path.sep);

// Unir rutas con path.join
const filePath = path.join('content','sunfolder','test.txt');
console.log(filePath);

const base = path.basename('tmp/midu-secret-files/password.txt');
console.log(base);

const filename = path.basename('tmp/midu-secret-files/password.txt','.txt');
console.log(filename);

const extension = path.extname('image.jpg');
console.log(extension);