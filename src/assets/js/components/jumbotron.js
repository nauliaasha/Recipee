class JumbotronHeader extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <style>
    .jumbotron-text {
      color: #EFEFEF;
      font-family: 'Quicksand';
      font-weight: 400;
      line-height: 2;
    }

    .text-content {
      font-size: 16px;
      width: 85%;
    }

    .text-content::before,
    .text-content::after {
      content: '"';
      font-size: 20px;
      color: #F3A446;
    }
  
    .quotation {
      margin-bottom: 2rem;
      font-size: 12px;
      width: 100%;
    }

    .btn-orange {
      background-color: #F3A446;
      border-color: #F3A446;
      color: #1F140A;
      font-weight: 700;
      font-size: 16px;
    }

    .btn-orange:hover {
      opacity: 80%;
    }

    @media (min-width: 768px) {
      .jumbotron .text-content {
        font-size: 18px;
        width: 60%;
      }

      .jumbotron .quotation {
        margin-bottom: 3rem;
        font-size: 14px;
        width: 60%;
      }

      .btn-orange {
        font-size: 18px;
      }
    }

    </style>
    <div class="jumbotron jumbotron-fluid">
      <div class="container-md jumbotron-text">
        <p class="text-content">Cooking is at once one of the simplest and most gratifying of the arts, but to cook well
          one must love and respect food.
        </p>
        <p class="quotation">— Craig Claiborne</p>
        <a href="#">
          <button class="btn btn-lg btn-orange">Cook</button>
        </a>
      </div>
    </div>
    `;
  }
}

customElements.define("jumbotron-header", JumbotronHeader);