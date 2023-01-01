/*
  Parašyti JS kodą, kuris skaičiuos kiek kartų buvo paspausta ant vieno arba kito elemento ekrane. (Ekrane turėti 2 nuotraukas ir laukelį po jomis, kuriame bus atvaizduojama kiek kartų buvo paspausta ant kurios nuotraukos)
*/

const image1 = document.getElementById('image1');
const image1Count = document.getElementById('image1-count');
let image1ClickCount = 0;

image1.addEventListener('click', function() {
  image1ClickCount++;
  image1Count.innerHTML = image1ClickCount;
});

const image2 = document.getElementById('image2');
const image2Count = document.getElementById('image2-count');
let image2ClickCount = 0;

image2.addEventListener('click', function() {
  image2ClickCount++;
  image2Count.innerHTML = image2ClickCount;
});

const image = document.getElementById('image');
