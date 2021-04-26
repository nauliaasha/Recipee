class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector("#searchElement").value;
  }

  render() {
    this.innerHTML = `
    <style> 
      .form-control:focus,
      .form-control:target {
        box-shadow: none;
        border-color: #F3A446;
      }

    </style>
      <form class="form-inline" id="search-bar">
        <input class="form-control mr-sm-2" id="searchElement" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-warning my-2 my-sm-0" id="searchButtonElement" type="submit">Search</button>
      </form>
    `;

    this.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
  }
}

customElements.define("search-bar", SearchBar);
