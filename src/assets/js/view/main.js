import '../components/recipe-list.js';
import '../components/search-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const recipeListElement = document.querySelector('recipe-list');

  const onButtonSearchClicked = e => {
    searchRecipe(searchElement.value);
    e.preventDefault();
  };

  const searchRecipe = keyword => {
    console.log(keyword);
    DataSource.searchRecipe(keyword)
      .then(renderResult)
      .catch(fallbackResult);
  };

  const renderResult = results => {
    recipeListElement.recipes = results;
    console.log(results);
  };

  const fallbackResult = message => {
    recipeListElement.renderError(message);
  };

  searchRecipe(searchElement.value);

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;