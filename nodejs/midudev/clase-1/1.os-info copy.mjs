import { platform, release, arch, cpus, freemem, totalmem, uptime } from 'node:os';

console.log('Información del Sistema Operativo');
console.log('-------------------------');
console.log('Nombre del Sistema Operativo', platform());
console.log('Version del Sistema Operativo', release());
console.log('Arquitectura', arch());
console.log('CPUs', cpus()); // ← Vamos a poder escalar procesos en Node.js
console.log('Memoria libre', freemem() / 1024 / 1024);
console.log('Memoria total', totalmem() / 1024 / 1024);
console.log('Uptime', uptime() / 60 / 60);