import $ from 'jquery';

class AppBar extends HTMLElement {

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <style>
      .bg-custom {
        background-color: #1D1D1D;
        position: sticky;
        top: 0;
        z-index: 2;
      }

      .nav-item {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        border-radius: 5px;
      }

      .nav-item:last-child {
        margin-right: 0;
        padding-right: 0;
      }

      .nav-link {
        color: #F6D58E;
        font-weight: 700;
        font-size: 16px; 
      }

      .nav-link:hover {
        color: #F3A446;
      }

      .navbar-brand {
        color: #F6D58E;
        font-family: 'Pacifico';
        font-size: 50px;
      }

      .navbar-brand:hover {
        color: #F3A446;
        text-decoration: underline;
      }

      .navbar-collapse {
        justify-content: flex-end;
      }
    </style>
      <header class="bg-custom">
        <nav class="navbar navbar-expand-lg container-md">
          <a class="navbar-brand" href="#">
            Recipee
          </a>

          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-expanded="false" aria-controls="navbarSupportedContent">
            <span class="navbar-toggler-icon"></span>
            <span class="close-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">Recipes<span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>`;

    $('.close-toggler-icon').hide();

    $('.navbar-toggler-icon').click(function () {
      $('.close-toggler-icon').show();
      $('.navbar-toggler-icon').hide();
    });

    $('.close-toggler-icon').click(function () {
      $('.close-toggler-icon').hide();
      $('.navbar-toggler-icon').show();
    });
  }
}

customElements.define("app-bar", AppBar);