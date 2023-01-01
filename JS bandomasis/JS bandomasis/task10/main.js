/*
  Sutvarkykite 10 užduoties failų kodą taip, kad veiktų main.js parašytas kodas.
*/

let pirmas = vardoIlgis(asmuo1);
let antras = lytis(asmuo2);
let trecias = pilnametyste(asmuo3);
let ketvirtas = vardoIlgis(asmuo4);
let penktas = lytis(asmuo5);
let sesi = pilnametyste(asmuo6);

console.log(pirmas);
console.log(antras);
console.log(trecias);
console.log(ketvirtas);
console.log(penktas);
console.log(sesi);



// Sukuriam objektus su savybėmis
const asmuo1 = { vardas: "Petras", lytis: "vyras", amzius: 35 };
const asmuo2 = { vardas: "Rūta", lytis: "moteris", amzius: 25 };
const asmuo3 = { vardas: "Tomas", lytis: "vyras", amzius: 18 };
const asmuo4 = { vardas: "Simona", lytis: "moteris", amzius: 28 };
const asmuo5 = { vardas: "Gintaras", lytis: "vyras", amzius: 42 };
const asmuo6 = { vardas: "Aistė", lytis: "moteris", amzius: 21 };

// Sukuriam funkcijas
function vardoIlgis(obj) {
  return obj.vardas.length;
}

function lytis(obj) {
  return obj.lytis;
}

function pilnametyste(obj) {
  return obj.amzius >= 18;
}

// Iškviečiame funkcijas ir spausdiname rezultatus
let pirmas1 = vardoIlgis(asmuo1);
let antras2 = lytis(asmuo2);
let trecias3 = pilnametyste(asmuo3);
let ketvirtas4 = vardoIlgis(asmuo4);
let penktas5 = lytis(asmuo5);
let sesi6 = pilnametyste(asmuo6);

console.log(pirmas);
console.log(antras);
console.log(trecias);
console.log(ketvirtas);
console.log(penktas);
console.log(sesi);