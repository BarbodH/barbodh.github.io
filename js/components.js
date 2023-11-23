class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark" id="custom-navbar">
        <div class="container-fluid">
          <strong><a class="navbar-brand" href="#">Barbod Habibi</a></strong>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarColor01">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <a class="nav-link active" href="#">Introduction</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About Me</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Pricing</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      `;
  }
}

customElements.define("custom-navbar", Navbar);