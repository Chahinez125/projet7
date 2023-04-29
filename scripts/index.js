/*// Définition de la fonction pour afficher les recettes
function displayRecipes(recipes) {
  // Sélection de la section des cartes
  const cardsSection = document.querySelector(".cards");
  // Effacement de tout contenu existant dans la section des cartes
  cardsSection.innerHTML = "";

  // Boucle sur chaque recette dans l'entrée
  recipes.forEach((recipe) => {
    // Récupération du template HTML pour la carte de recette
    const template = document.getElementById("recipe-template");
    // Clonage du template pour créer une nouvelle carte de recette
    const clone = template.content.cloneNode(true);

    // Sélection des éléments de la carte de recette
    const title = clone.querySelector(".recipe-title");
    const description = clone.querySelector(".recipe-description");
    const ingredients = clone.querySelector(".recipe-ingredients");
    const instructions = clone.querySelector(".recipe-instructions");

    // Modification du contenu des éléments de la carte de recette
    title.textContent = recipe.title;
    description.textContent = recipe.description;
    ingredients.textContent = recipe.ingredients.join(", ");
    instructions.textContent = recipe.instructions;

    // Ajout de la carte de recette à la section des cartes
    cardsSection.appendChild(clone);
  });
}

// Affichage des recettes initiales
displayRecipes(recipes);*/


// Definition de la fonction pour afficher les recettes
function displayRecipe(inputArray) {
  // Sélection de la section des cartes
  const cardsSection = document.querySelector(".cards");
  // Effacement de tout contenu existant dans la section des cartes
  cardsSection.innerHTML = "";

  // Boucle sur chaque recette dans l'entrée
  inputArray.forEach((recipe) => {
    // Récupération du code HTML pour la carte de recette à partir de la factory de recette
    const { getRecipeCardDOM } = recipesFactory(recipe);
    // Ajout de la carte de recette à la section des cartes
    cardsSection.appendChild(getRecipeCardDOM());
  });
}

// Affichage des recettes initiales
displayRecipe(recipes);

  
  
  