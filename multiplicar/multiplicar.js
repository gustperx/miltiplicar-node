const fs = require("fs");
const colors = require("colors/safe");

const crearArchivo = (base, limite = 10) => {
  return new Promise((resolve, reject) => {
    if (!Number(base) || !Number(limite)) {
      reject(`La base: ${base} o el limite: ${limite} no es un numero`);
      return;
    }

    let data = "";

    for (let i = 1; i <= limite; i++) {
      data += `${base} * ${i} = ${base * i} \n`;
    }

    //const data = new Uint8Array(Buffer.from("Hello Node.js"));
    fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(`tabla-${base}.txt`);
      }
    });
  });
};

const listarTabla = (base, limite) => {
  if (!Number(base) || !Number(limite)) {
    console.log(`La base: ${base} o el limite: ${limite} no es un numero`);
    return;
  }

  console.log("=================".blue);
  console.log(`Tabla del ${base}`.blue);
  console.log("=================".blue);

  for (let i = 1; i <= limite; i++) {
    console.log(`${base} * ${i} = ${base * i}`);
  }
};

module.exports = {
  crearArchivo,
  listarTabla,
};
