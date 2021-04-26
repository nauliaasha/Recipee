class DataSource {
  static searchRecipe(keyword) {
    return fetch(`https://api.spoonacular.com/recipes/search?apiKey=798d27dcdf7f4afe89a28142a9edef7d&query=${keyword}&number=24`)
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        if (responseJson.results) {
          return Promise.resolve(responseJson.results);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      });
  }
}

export default DataSource;