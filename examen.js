const baseUrl = 'https://wizard-world-api.herokuapp.com';

window.onload = async() => {
  const persons = await getAllCharacters();
  const houses = await getAllHouses();

  const spinnerHtmlElement = document.getElementById('spinner');
  spinnerHtmlElement.remove();

  for (const house of houses) {
    const mainHtmlElementH = document.getElementById('wrapper');
    const newElementH = document.createElement('div');
    newElementH.innerHTML = `
      <h3>${house.name}</h3>
      `
      if (house.name==="Gryffindor"){
        newElementH.innerHTML +=
        `<img src="Gryffindor.jpg" alt ="imagen escudo gryffindor" width="300" height="350">
        <br></br>
        <button onclick="addDestacatHouse('${house.name}')">Destaca a ${house.name}</button>`
      } else if (house.name==="Hufflepuff"){
        newElementH.innerHTML +=
        `<img src="Hufflepuff.jpg" alt ="imagen escudo Hufflepuff" width="300" height="350">
        <br></br>
        <button onclick="addDestacatHouse('${house.name}')">Destaca a ${house.name}</button>`    
        } else if (house.name==="Ravenclaw"){
        newElementH.innerHTML +=
        `<img src="Ravenclaw.jpg" alt ="imagen escudo Ravenclaw" width="300" height="350">
        <br></br>
        <button onclick="addDestacatHouse('${house.name}')">Destaca a ${house.name}</button>`      
      } else if (house.name==="Slytherin"){
        newElementH.innerHTML +=
        `<img src="Slytherin.jpg" alt ="imagen escudo Slytherin" width="300" height="350">
        <br></br>
        <button onclick="addDestacatHouse('${house.name}')">Destaca a ${house.name}</button>`      
      }
      newElementH.innerHTML +=
      `<p>Colors: ${house.houseColours}</p>
        <p>Fundador: ${house.founder}</p>
        <p>Animal: ${house.animal}</p>
        <p>Element: ${house.element}</p>
        <p>Fantasma: ${house.ghost}</p>
        <p>Sala comú: ${house.commonRoom}</p>`
    mainHtmlElementH.appendChild(newElementH);
    }

  for (const person of persons) {
    const mainHtmlElement = document.getElementById('main');
    const newElement = document.createElement('div');
    newElement.innerHTML = `
      <h3 class="wizard">${person.firstName} ${person.lastName}</h3>
      <button onclick="addDestacat('${person.firstName}','${person.lastName}')">Destaca a ${person.firstName} ${person.lastName}</button>
      <p class="negrita">Elixirs:</p>`
       for (const elixir of person.elixirs) {
        newElement.innerHTML += `
           <p>${elixir.name}</p>
           <button onclick="elixirClicat('${elixir.id}','${elixir.name}')">Show ingredients of ${elixir.name}</button>`
           //<div id="ingredients"></div>
             
         }  
     mainHtmlElement.appendChild(newElement);
        }
  };

async function getAllCharacters() {
  const response = await fetch(`${baseUrl}/Wizards`);
  const data = await response.json();
  return data;
}

async function getAllIngredients(id) {
  const response = await fetch(`${baseUrl}/Elixirs/${id}`);
  const data = await response.json();
  return data.ingredients;
}

async function elixirClicat(id,name) {
  const ingredients = await getAllIngredients(id);
  const mainHtmlElement = document.getElementById('ingredients');
    const newElement = document.createElement('div');
    newElement.innerHTML = `
      <h3>${name}</h3>`
  for (const ingredient of ingredients) {
    newElement.innerHTML += `
      <p>${ingredient.name}</p>`
  }
  mainHtmlElement.appendChild(newElement);
  return ingredients;
}

async function addDestacat(firstName,lastName) {
  const mainHtmlElement = document.getElementById('destacat');
    if (mainHtmlElement) {
      mainHtmlElement.innerHTML = `Personatge destacat: ${firstName} ${lastName}`;
  } else {
      const newElement = document.createElement('p');
      newElement.innerHTML = `
      <p>Personatge destacat: ${firstName} ${lastName}</p>`
      mainHtmlElement.appendChild(newElement);
}
}

async function getAllHouses() {
  const response = await fetch(`${baseUrl}/Houses`);
  const data = await response.json();
  return data;
}

async function addDestacatHouse(name) {
  const mainHtmlElement = document.getElementById('destacatHouse');
    if (mainHtmlElement) {
      mainHtmlElement.innerHTML = `Casa destacada: ${name}`;
  } else {
      const newElement = document.createElement('p');
      newElement.innerHTML = `
      <p>Casa destacada: ${name}</p>`
      mainHtmlElement.appendChild(newElement);
}
}