/*
  Parašyti JS kodą, kuris vartotojui paspaudus ant mygtuko "Rodyti Vartotoją" užkrautų vartotoją iš API į ekraną. (Mygtukas neberodomas ekrane po jo paspaudimo. Nebūtina ekrane rodyti visos informacijos apie vartotoją.)
  API nuoroda: https://randomuser.me/api/
*/

const button = document.getElementById('show-user-button');
const displayElement = document.getElementById('display-element');

async function showUser() {
  try {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    const user = data.results[0];

    displayElement.innerHTML = `Vardas: ${user.name.first}`;

    // Paslepiam mygtuką po paspaudimo
    button.style.display = 'none';
  } catch (error) {
    console.error(error);
  }
}

button.addEventListener('click', showUser);