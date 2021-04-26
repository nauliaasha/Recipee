import './recipe-item.js';

class RecipeList extends HTMLElement {
  set recipes(recipes) {
    this._recipes = recipes;
    this.render();
  }

  renderError(message) {
    this.innerHTML = `
    <style>
      .placeholder {
        font-weight: lighter;
        color: rgba(0, 0, 0, 0.5);
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        text-align: center;
      }
    </style>
    `;
    this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }

  render() {
    this.innerHTML = "";
    this.className = "row row-cols-1 row-cols-sm-2 row-cols-md-3";
    this._recipes.forEach(recipe => {
      const recipeItemElement = document.createElement("recipe-item");
      recipeItemElement.recipe = recipe;
      this.appendChild(recipeItemElement);
    });
  }
}

customElements.define("recipe-list", RecipeList);