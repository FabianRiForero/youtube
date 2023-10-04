const fs = require('node:fs');

const stats = fs.statSync('./archivo.txt')

console.log(
  stats.isFile(), // si es un archivo
  stats.isDirectory(), // Si es un directorio
  stats.isSymbolicLink(), // Si es un enlace simbolico
  stats.size, // tamaño en bytes
);