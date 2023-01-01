/*
  Sukurkite klasę, kuri priima 4 savybes ir turi 2 metodus.
  Savybės: masinosMarke, masinosModelis, masinosKaina, masinosGamybosMetai.
  Metodai:
    1 metodas tikrina ar mašina brangesnė negu 10 000 eurų ir grąžina true|false.
    2 metodas tikrina ar mašina senesnė negu 2010 ir grąžina mašinos amžių ir tekstą "Antikvaras"|"Šviežiena".
*/

class Masina {
  constructor(marke, modelis, kaina, metai) {
    this.marke = marke;
    this.modelis = modelis;
    this.kaina = kaina;
    this.metai = metai;
  }

  brangi() {
    return this.kaina > 10000;
  }

  amzius() {
    if (this.metai < 2010) {
      return `${new Date().getFullYear() - this.metai} metų amžiaus antikvaras`;
    }
    return `${new Date().getFullYear() - this.metai} metų amžiaus šviežiena`;
  }
}

const masina1 = new Masina("Ford", "Focus", 12000, 2005);
console.log(masina1.brangi());  // grąžins: true
console.log(masina1.amzius());  // grąžins: "18 metų amžiaus antikvaras"

const masina2 = new Masina("Toyota", "Corolla", 9000, 2015);
console.log(masina2.brangi());  // grąžins: false
console.log(masina2.amzius());  // grąžins: "8 metų amžiaus šviežiena"