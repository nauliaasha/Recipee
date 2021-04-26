class RecipeItem extends HTMLElement {
  set recipe(recipe) {
    this._recipe = recipe;
    this.render();
  }

  render() {
    this.innerHTML = `
      <style>
      .recipe-card {
        margin-bottom: 3rem; 
        box-shadow: 0 0 2px 1px #F6D58E;
        overflow: hidden;
      }

      .recipe-icon,
      .icon-text {
        color: #4A6E2E;
      }

      .btn-danger:hover {
        background-color: #4A6E2E;
        border-color: #4A6E2E;
      }

      .fire-icon {
        color: #FFFAA4;
      }

      .img-wrapper {
        position: relative;
        overflow: hidden;
        width: 100%;
        height: 250px;
      }

      .card-img-top {
        position: absolute;
        height: 100%;
        object-fit: cover;
      }
      </style>
      <div class="col-12">
        <div class="card recipe-card">
          <div class="img-wrapper">
            <img src="https://spoonacular.com/recipeImages/${this._recipe.image}" class="card-img-top"
              alt="${this._recipe.title}">
          </div>
          <div class="card-body text-center">
            <h5 class="card-title">${this._recipe.title}</h5>
            <div class="card-text">
              <p class="icon-text"><i class="far fa-clock recipe-icon"></i>&nbsp;${this._recipe.readyInMinutes}&nbsp;minutes</p>
              <p class="icon-text"><i class="far fa-smile recipe-icon"></i>&nbsp;${this._recipe.servings}&nbsp;people</p>
            </div>
            <a href="${this._recipe.sourceUrl}" class="btn btn-danger">Cook&nbsp;<i class="fab fa-hotjar fire-icon"></i></a>
          </div>
        </div>
      </div>`;
  }
}

customElements.define("recipe-item", RecipeItem);