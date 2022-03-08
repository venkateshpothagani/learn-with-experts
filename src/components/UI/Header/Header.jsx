const Header = () => {
  const logoSize = { "font-size": "1.5rem" };
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container container-fluid">
          <a class="navbar-brand" href="google.com">
            <i class="bi bi-award-fill" style={logoSize}></i>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="google.com"
                >
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="google.com">
                  Experts
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="google.com">
                  Ask Query
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="google.com">
                  About
                </a>
              </li>
            </ul>
            <div class="d-flex">
              <button class="btn btn-primary me-2 px-4" type="submit">
                Login
              </button>
              <button class="btn btn-secondary" type="submit">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
