const baseUrl = 'https://wizard-world-api.herokuapp.com';

window.onload = async() => {
  const persons = await getAllCharacters();
  const houses = await getAllHouses();

  const spinnerHtmlElement = document.getElementById('spinner');
  spinnerHtmlElement.remove();

  for (const house of houses) {
    const mainHtmlElementH = document.getElementById('main');
    const newElementH = document.createElement('div');
    newElementH.innerHTML = `
      <h2>${house.name}</h2>
      `
      if (house.name==="Gryffindor"){
        newElementH.innerHTML +=
        `<img src="Gryffindor.jpg" alt ="imagen escudo gryffindor" width="300" height="350">
        <button onclick="addDestacatHouse('${house.name}')">Destaca a ${house.name}</button>`
      } else if (house.name==="Hufflepuff"){
        newElementH.innerHTML +=
        `<img src="Hufflepuff.jpg" alt ="imagen escudo Hufflepuff" width="300" height="350">
        <button onclick="addDestacatHouse('${house.name}')">Destaca a ${house.name}</button>`      } else if (house.name==="Ravenclaw"){
        newElementH.innerHTML +=
        `<img src="Ravenclaw.jpg" alt ="imagen escudo Ravenclaw" width="300" height="350">
        <button onclick="addDestacatHouse('${house.name}')">Destaca a ${house.name}</button>`      } else if (house.name==="Slytherin"){
        newElementH.innerHTML +=
        `<img src="Slytherin.jpg" alt ="imagen escudo Slytherin" width="300" height="350">
        <button onclick="addDestacatHouse('${house.name}')">Destaca a ${house.name}</button>`      }
    mainHtmlElementH.appendChild(newElementH);
    }

  for (const person of persons) {
    const mainHtmlElement = document.getElementById('main');
    const newElement = document.createElement('div');
    newElement.innerHTML = `
      <h2>${person.firstName} ${person.lastName}</h2>
      <button onclick="addDestacat('${person.firstName}','${person.lastName}')">Destaca a ${person.firstName} ${person.lastName}</button>`
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
  for (const ingredient of ingredients) {
    const mainHtmlElement = document.getElementById('ingredients');
    const newElement = document.createElement('div');
    newElement.innerHTML = `
      <h3>${name}</h3>
      <p>${ingredient.name}</p>`
      mainHtmlElement.appendChild(newElement);
 }
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