const { argv } = require("./config/yargs");
const colors = require("colors/safe");
const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar");

let comando = argv._[0];

switch (comando) {
  case "listar":
    listarTabla(argv.base, argv.limite);
    break;
  case "crear":
    crearArchivo(argv.base, argv.limite)
      .then((archivo) =>
        console.log("Se genero el archivo:", colors.green(archivo))
      )
      .catch((err) => console.log(err));
    break;
  default:
    console.log("Comando no reconocido");
}

// obtener parametros desde la tarminal
// let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split("=")[1];

// console.log(argv.base);

// crear tabla de multiplicar

console.log("Fin de programa");
