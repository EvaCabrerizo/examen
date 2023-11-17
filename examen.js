const baseUrl = 'https://wizard-world-api.herokuapp.com';

window.onload = async() => {
  const persons = await getAllCharacters();
  
  const spinnerHtmlElement = document.getElementById('spinner');
  spinnerHtmlElement.remove();

  for (const person of persons) {

      const mainHtmlElement = document.getElementById('main');
      const newElement = document.createElement('div');
      newElement.innerHTML = `
        <h2>${person.firstName} ${person.lastName}</h2>
        <p>${person.elixirs.name}</p>`;
        newButton.innerText = person.elixirs.name;
        newButton.addEventListener('click', () => showCharacterDetails(person, newButton));
        mainHtml.appendChild(newButton);
      mainHtmlElement.appendChild(newElement);
    }
  
  };

async function getAllCharacters() {
  const response = await fetch(`${baseUrl}/Wizards`);
  const data = await response.json();
  return data;
}


function showIngredients(character, button) {
  const mainHtml = document.getElementById('main');
  const detailsId = `details-${character.name}`;
  const detailsHtml = document.getElementById(detailsId);

  if (!detailsHtml) {
      // Si no existe, crea un nuevo elemento details
      const newDetails = document.createElement('div');
      newDetails.id = detailsId;
      newDetails.className = 'character-details';
      newDetails.innerHTML = `
          <p>Altura: ${elixir}</p>`;

      // Agrega el nuevo elemento details debajo del botón
      button.parentNode.insertBefore(newDetails, button.nextSibling);
  } else {
      // Si ya existe, elimina el elemento details
      detailsHtml.parentNode.removeChild(detailsHtml);
  }
}
