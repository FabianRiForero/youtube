const os = require('node:os');

console.log('Información del Sistema Operativo');
console.log('-------------------------');
console.log('Nombre del Sistema Operativo', os.platform());
console.log('Version del Sistema Operativo', os.release());
console.log('Arquitectura', os.arch());
console.log('CPUs', os.cpus()); // ← Vamos a poder escalar procesos en Node.js
console.log('Memoria libre', os.freemem() / 1024 / 1024);
console.log('Memoria total', os.totalmem() / 1024 / 1024);
console.log('Uptime', os.uptime() / 60 / 60);