// Récupération du bouton de recherche
const buttonSearch = document.querySelector("button");
// Récupération de l'input de recherche
const searchInput = document.querySelector("#search");

// Fonction de recherche

function search() {
  const searchValue = searchInput.value.toLowerCase().trim();
  const filteredRecipes = [];
  let i = 0;
  while (i < recipes.length) {
    const recipe = recipe[i];
    if (
      recipe.name.toLowerCase().includes(searchValue) ||
      recipe.description.toLowerCase().includes(searchValue) ||
      recipe.ingredients.some((ingredient) =>
        ingredient.ingredient.toLowerCase().includes(searchValue)
      )
    ) {
      filteredRecipes.push(recipe);
    }
    i++;
  }
  displayRecipe(filteredRecipes);
  
  // Affichage du message d'erreur si nécessaire
  const errorResearch = document.querySelector(".error_research");
  if (filteredRecipes.length === 0) {
    errorResearch.style.display = "block";
  } else {
    errorResearch.style.display = "none";
  }
}

// Ajout d'un écouteur d'événement au clic sur le bouton de recherche
buttonSearch.addEventListener("click", search);

// Ajout d'un écouteur d'événement à chaque fois que l'utilisateur tape quelque chose dans l'input de recherche
searchInput.addEventListener("input", () => {
  // Si la recherche contient au moins 3 caractères, on lance la recherche
  if (searchInput.value.length >= 3) {
    search();
    document.querySelector(".search_error").style.display = "none";
  }
  // Sinon, on affiche toutes les recettes et un message d'erreur
  else {
    displayRecipe(recipes);
    document.querySelector(".search_error").style.display = "block";
  }
});

