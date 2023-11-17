const baseUrl = 'https://wizard-world-api.herokuapp.com';

window.onload = async() => {
  const persons = await getAllCharacters();
  
  const spinnerHtmlElement = document.getElementById('spinner');
  spinnerHtmlElement.remove();


  for (const person of persons) {
    const mainHtmlElement = document.getElementById('main');
    const newElement = document.createElement('div');
    newElement.innerHTML = `
      <h2>${person.firstName} ${person.lastName}</h2>`
       for (const elixir of person.elixirs) {
        
        newElement.innerHTML += `
           <p>${elixir.name}</p>
           <button onclick="elixirClicat(${elixir.name})">Show ingredients of ${elixir.name}</button>
         `;
         
       }

       

      
     mainHtmlElement.appendChild(newElement);

  }
};

async function getAllCharacters() {
  const response = await fetch(`${baseUrl}/Wizards`);
  const data = await response.json();
  return data;
}
async function getAllIngredients(elixir) {
  const response = await fetch(`${baseUrl}/Elixirs`);
  const data = await response.json();
  return data;
}

