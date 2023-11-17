const baseUrl = 'https://wizard-world-api.herokuapp.com';

window.onload = async() => {
  const persons = await getAllCharacters();
  
  const spinnerHtmlElement = document.getElementById('spinner');
  spinnerHtmlElement.remove();

  for (const person of persons) {
    const mainHtmlElement = document.getElementById('main');
    const newElement = document.createElement('div');
    newElement.innerHTML = `
      <h2>${person.lastName}, ${person.firstName}</h2>
      <p>${person.elixirs}</p>
    `;
    mainHtmlElement.appendChild(newElement);
  }

};
async function getAllCharacters() {
  const response = await fetch(`${baseUrl}/Wizards`);
  const data = await response.json();
  return data;
}

async function getAllElixirs() {
  const response = await fetch(`${baseUrl}/Wizards`);
  const data = await response.json();
  return data.elixirs;
}
