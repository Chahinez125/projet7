const filterTags = document.querySelector(".filter_tags");
const elementsOfTags = document.querySelectorAll(".element");

function createTag(element) {
  // Création d'un nouvel élément div qui sera utilisé pour créer un tag
  const tag = document.createElement("div");
  // Ajout de la classe "tags" à l'élément div
  tag.classList.add("tags");

  // Définition du HTML pour le tag
  const tagHtml = `
        <p>${element.innerText}</p>
        <img class="close_tag" alt="Fermer le tag">
      `;
  // Insertion du HTML dans l'élément div
  tag.innerHTML = tagHtml;

  // Ajout du tag à la liste des tags filtrés
  filterTags.appendChild(tag);

  // Cache l'élément cliqué
  element.style.display = "none";

  let placeholder, modalbg;
  // Vérification de la catégorie de l'élément cliqué
  switch (element.getAttribute("categorie")) {
    case "ingredient":
      // Définition de la catégorie de l'élément div en tant qu'ingrédient
      tag.setAttribute("categorie", "ingredient");
      // Définition de la couleur de fond pour le tag en bleu
      tag.style.background = "#3282F7";

      // Récupération de la liste des ingrédients
      modalbg = document.querySelector(".ingredients_list");
      placeholder = document.getElementsByName("ingredients")[0];
      break;
    case "appliance":
      // Définition de la catégorie de l'élément div en tant qu'appareil
      tag.setAttribute("categorie", "appliance");
      // Définition de la couleur de fond pour le tag en vert
      tag.style.background = "#68D9A4";

      // Récupération de la liste des appareils
      modalbg = document.querySelector(".devices_list");
      placeholder = document.getElementsByName("devices")[0];
      break;
    case "ustensil":
      // Définition de la catégorie de l'élément div en tant qu'ustensile
      tag.setAttribute("categorie", "ustensil");
      // Définition de la couleur de fond pour le tag en rouge
      tag.style.background = "#ED6454";

      // Récupération de la liste des ustensiles
      modalbg = document.querySelector(".ustensils_list");
      placeholder = document.getElementsByName("ustensils")[0];
      break;
    default:
      // Erreur si la catégorie n'est pas valide
      console.error("Invalid categorie attribute");
      return;
  }

  // Vérification si la liste de la catégorie correspondante est visible
  if (modalbg.classList.contains("none")) {
    // Si la classe "none" est présente sur l'élément modalbg, la supprimer
    modalbg.classList.remove("none");
  } else {
    // Sinon, ajouter la classe "none" à l'élément modalbg
    modalbg.classList.add("none");
    // Et définir le placeholder de l'élément placeholder avec la valeur de l'attribut "categorie" de l'élément cliqué
    placeholder.placeholder = element.getAttribute("categorie");
  }
}

const allIngredients = document.querySelectorAll(".ingredient_tag");
const allDevices = document.querySelectorAll(".device_tag");
const allUstensils = document.querySelectorAll(".ustensil_tag");

elementsOfTags.forEach((element) => {
  element.addEventListener("click", () => {
    document.querySelector(".search_error").style.display = "none";
    let inputRecipeaArray = [];
    createTag(element);

// Fonction pour afficher les recettes filtrées
function displayRecipeFilter() {
  // Set search input value to empty
  searchInput.value = "";
  
  // Get all selected tags
  const allTags = document.querySelectorAll(".tags");

  // Filter recipes based on selected tags
  const filteredRecipes = recipes.filter((recipe) => {
    // Check if all tags match recipe's ingredients, appliances and ustensils
    return Array.from(allTags).every((tag) => {
      const category = tag.getAttribute("categorie");
      if (category === "ingredient") {
        // Check if recipe has ingredient that matches tag
        return recipe.ingredients.some(
          (ingredient) => ingredient.ingredient.toLowerCase() === tag.innerText.toLowerCase()
        );
      } else if (category === "appliance") {
        // Check if recipe's appliance matches tag
        return recipe.appliance.toLowerCase().includes(tag.innerText.toLowerCase());
      } else if (category === "ustensil") {
        // Check if recipe has ustensil that matches tag
        return recipe.ustensils.some(
          (ustensil) => ustensil.toLowerCase() === tag.innerText.toLowerCase()
        );
      }
    });
  });

  // Display filtered recipes
  displayRecipe(filteredRecipes);
}

  // Exécuter la fonction displayRecipeFilter()
  displayRecipeFilter();
  

  // Fonction pour filtrer les éléments
function filterElements() {
    // Boucle à travers tous les ingrédients
    allIngredients.forEach((ingredientOnList) => {
      // Cache tous les ingrédients
      ingredientOnList.style.display = "none";
      // Vérifie si les ingrédients sont présents dans les recettes restantes
      if (
        inputRecipeaArray.some((remainRecipes) => {
          return remainRecipes.ingredients.some((ingredient) => {
            // Vérifie si le nom de l'ingrédient est inclus dans la liste des ingrédients
            return ingredient.ingredient
              .toLowerCase()
              .includes(ingredientOnList.innerText.toLowerCase());
          });
        })
      ) {
        // Affiche l'ingrédient si présent dans les recettes restantes
        ingredientOnList.style.display = "block";
      }
    });
  
    // Boucle à travers tous les appareils
    allDevices.forEach((applianceOnList) => {
      // Cache tous les appareils
      applianceOnList.style.display = "none";
      // Vérifie si les appareils sont présents dans les recettes restantes
      if (
        inputRecipeaArray.some((remainRecipes) => {
          return remainRecipes.appliance
            .toLowerCase()
            .includes(applianceOnList.innerText.toLowerCase());
        })
      ) {
        // Affiche l'appareil si présent dans les recettes restantes
        applianceOnList.style.display = "block";
      }
    });
  
    // Boucle à travers tous les ustensiles
    allUstensils.forEach((ustensilOnList) => {
      // Cache tous les ustensiles
      ustensilOnList.style.display = "none";
      // Vérifie si les ustensiles sont présents dans les recettes restantes
      if (
        inputRecipeaArray.some((remainRecipes) => {
          return remainRecipes.ustensils.some((ustensil) => {
            // Vérifie si le nom de l'ustensile est inclus dans la liste des ustensiles
            return ustensil
              .toLowerCase()
              .includes(ustensilOnList.innerText.toLowerCase());
          });
        })
      ) {
        // Affiche l'ustensile si présent dans les recettes restantes
        ustensilOnList.style.display = "block";
      }
    });
  }
  
  // Appelle la fonction pour filtrer les éléments
  filterElements();
  

    const close = document.querySelectorAll(".close_tag");
    close.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        element.style.display = "block";
        e.target.closest("div").remove();

        inputRecipeaArray = [];
        displayRecipeFilter();
        filterElements();
      });
    });
  });
});
