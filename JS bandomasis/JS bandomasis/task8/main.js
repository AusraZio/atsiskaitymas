/*
  Surkite klasę "trueFalse", kuri turi 4 metodus:
    metodas1 priima skaičių ir grąžina true jei skaičius didesnis už 100 ir false kitu atveju.
    metodas2 priima žodį ir grąžina true jeigu jis prasideda didžiąja raide ir false kitu atveju.
    metodas3 priima skaičių ir grąžina true jeigu šis yra lyginis ir false kitu atveju.
    metodas4 priima žodį ir grąžina true jeigu šis yra ilgesnis nei 8 raidžių ir false kitu atveju.
*/

class trueFalse {
  metodas1(sk) {
    return sk > 100;
  }

  metodas2(zodis) {
    return zodis[0] === zodis[0].toUpperCase();
  }

  metodas3(sk) {
    return sk % 2 === 0;
  }

  metodas4(zodis) {
    return zodis.length > 8;
  }
}