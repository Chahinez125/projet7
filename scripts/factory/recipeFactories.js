function recipesFactory(data) {
  const { id, name, time, description, ingredients } = data;
  const picture = `./assets/savoureux.jpeg`;

  function getRecipeCardDOM() {
    const card = document.createElement("article");
    card.classList.add("recipe_card");
    card.id = id;

    const image = document.createElement("img");
    image.classList.add("recipe_card__image");
    image.src = picture;
    image.alt = name;
    card.appendChild(image);

    const infos = document.createElement("div");
    infos.classList.add("recipe__infos");
    card.appendChild(infos);

    const titleTime = document.createElement("div");
    titleTime.classList.add("recipe_title_time");
    infos.appendChild(titleTime);

    const title = document.createElement("h2");
    title.classList.add("recipe_title");
    title.textContent = name;
    titleTime.appendChild(title);

    const recipeTime = document.createElement("div");
    recipeTime.classList.add("recipe_time");
    titleTime.appendChild(recipeTime);

    const timeImage = document.createElement("img");
    timeImage.src = "./assets/time.png";
    timeImage.classList.add("time");
    timeImage.alt = "icône horloge";
    recipeTime.appendChild(timeImage);

    const timeText = document.createElement("p");
    timeText.textContent = `${time} min`;
    recipeTime.appendChild(timeText);

    const ingredientsText = document.createElement("div");
    ingredientsText.classList.add("ingredients_recipe_text");
    infos.appendChild(ingredientsText);

    const ingredientsTab = document.createElement("div");
    ingredientsTab.classList.add("ingredients_tab");
    ingredientsText.appendChild(ingredientsTab);

    ingredients.forEach((ingredient) => {
      const ingredientElement = document.createElement("p");
      ingredientElement.classList.add("ingredient");

      const bold = document.createElement("span");
      bold.classList.add("ingredient_bold");
      bold.textContent = `${ingredient.ingredient}:`;

      const quantity = document.createTextNode(ingredient.quantity || "");
      ingredientElement.append(bold, quantity);
      ingredientsTab.appendChild(ingredientElement);
    });

    const desc = document.createElement("p");
    desc.classList.add("recipe_desc");
    desc.textContent = description;
    ingredientsText.appendChild(desc);

    return card;
  }

  return { getRecipeCardDOM };
}

const recipe1 = recipesFactory(recipe1[0]);
document.body.appendChild(recipe1.getRecipeCardDOM());

const recipe2 = recipesFactory(recipe2[1]);
document.body.appendChild(recipe2.getRecipeCardDOM());
