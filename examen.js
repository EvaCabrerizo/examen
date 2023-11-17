const baseUrl = 'https://wizard-world-api.herokuapp.com/';

window.onload = async() => {
  const persons = await getAllCharacters();
  

  for (const person of persons) {
    const mainHtmlElement = document.getElementById('main');
    const newElement = document.createElement('div');
    newElement.innerHTML = `
      <h2>${person.firstName}</h2>
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
