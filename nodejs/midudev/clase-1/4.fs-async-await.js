// Esto solo en los modulos nativos
// que no tienen promesas nativas

// const { promisify } = require('node:util');
// const readFilePromise = promisify(fs.readFile);
const fs = require('node:fs/promises')

// IIFE → Inmediaty Invoked Funcion Expression
;(async() => {
  console.log('Leyendo el primer archivo...');
  const text = await fs.readFile('./archivo.txt','utf-8')
  console.log('primer texto',text);

  console.log('→ Hacer cosas mientras lee el archivo ');

  console.log('Leyendo el segundo archivo...');
  const secondText = await fs.readFile('./archivo2.txt','utf-8')
  console.log('segundo texto',secondText);
})()
