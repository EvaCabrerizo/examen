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
        `;

    }
    mainHtmlElement.appendChild(newElement);
  
  };

async function getAllCharacters() {
  const response = await fetch(`${baseUrl}/Wizards`);
  const data = await response.json();
  return data;
}
async function getAllElixirs() {
  const response = await fetch(`${baseUrl}/Elixirs`);
  const data = await response.json();
  return data;
}

// function showIngredients(elixir, button) {
//   const mainHtml = document.getElementById('main');
//   const detailsId = `details-${character.name}`;
//   const detailsHtml = document.getElementById(detailsId);

//   if (!detailsHtml) {
//       const newDetails = document.createElement('div');
//       newDetails.id = detailsId;
//       newDetails.className = 'elixir-ingredients';
//       newDetails.innerHTML = `
//           <p>Altura: ${elixir}</p>`;

//       button.parentNode.insertBefore(newDetails, button.nextSibling);
//   } else {
//       detailsHtml.parentNode.removeChild(detailsHtml);
//   }
// }
