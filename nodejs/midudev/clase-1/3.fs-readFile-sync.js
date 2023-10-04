const fs = require('node:fs');
// const { promisify } = require('node:util');

// const readFilePromise = promisify(fs.readFile);

// fs.readFilePromise('./archivo.txt', 'utf-8')
//   .then(text => console.log(text));

console.log('Leyendo el primer archivo...');
const text = fs.readFileSync('./archivo.txt','utf-8');
console.log('primer texto:',text);

console.log('→ Hacer cosas mientras lee el archivo ');

console.log('Leyendo el segundo archivo...');
const secondtext = fs.readFileSync('./archivo2.txt','utf-8');
console.log('segundo texto:',secondtext);