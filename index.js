//Direccion de API como constante para que no se cambie
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

// Obtener el nombre del cóctel del HTML
const cocktailName = document.getElementById("cocktail-name").textContent;

// Concatenar el nombre del cóctel con la URL de la API
const fullUrl = url + cocktailName;

// Hacer la llamada fetch Una Promesa de Get
fetch(fullUrl)
  .then(response => response.json())
  .then(data => {
    const cocktail = data.drinks[0];

    // Mostrar imagen
    const cocktailImage = document.getElementById("cocktail-image");
    cocktailImage.src = cocktail.strDrinkThumb;

    // Mostrar receta
    const cocktailRecipe = document.getElementById("cocktail-recipe");
    cocktailRecipe.textContent = cocktail.strInstructions;
  })
  .catch(error => console.error(error));