const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/';

const cocktails = ['margarita', 'martini', 'daiquiri', 'cosmopolitan', 'mojito'];

cocktails.forEach((cocktail, index) => {
  const cocktailName = document.getElementById(`cocktail-name${index + 1}`);
  const cocktailImage = document.getElementById(`cocktail-image${index + 1}`);
  const cocktailRecipe = document.getElementById(`cocktail-recipe${index + 1}`);

  fetch(`${baseUrl}search.php?s=${cocktail}`)
    .then((response) => response.json())
    .then((data) => {
      const drink = data.drinks[0];
      cocktailName.innerText = drink.strDrink;
      cocktailImage.src = drink.strDrinkThumb;
      cocktailRecipe.innerText = drink.strInstructions;
    })
    .catch((error) => console.log(error));
});

const scrollToBottomButton = document.querySelector('a[href="#footer"]');
                const footer = document.querySelector('#footer');
              
                scrollToBottomButton.addEventListener('click', (event) => {
                  event.preventDefault();
                  footer.scrollIntoView({ behavior: 'smooth' });
                });