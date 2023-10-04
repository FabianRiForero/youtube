// argumentos de entrada
console.log(process.argv);

// controlar el proceso
// process.exit(0); // 0 → todo bien, termina hay; 1 → hay algun error, que salga de la ejecucion

// podemos controlar eventos del proceso
process.on('exit',() => {
  // limpiar los recursos
});

// Current working directory
console.log(process.cwd()); // desde que carpeta se ha inicializado el proceso

console.log(process.env.PEPITO)