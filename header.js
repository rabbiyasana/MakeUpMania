 document.getElementById("header").innerHTML = 
 `<link rel="stylesheet" href="style.css">
 <!-- navigation -->
 
 <div class="container-fluid navigation-bg">
    <div class="container">
    <nav class="navbar navbar-expand-lg navigation-bg">
    <div class="container-fluid">
      <img src="images/logo.webp" alt="" srcset="" />
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarScroll"
        aria-controls="navbarScroll"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse ml-4" id="navbarScroll">
        <ul
          class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
          style="--bs-scroll-height: 100px"
        >
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="index.html"
              >Home</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="product.html">Products</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="AboutUs.html">About Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="contact.html">Contact</a>
          </li>
        </ul>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search Product"
            aria-label="Search"
          />
          <button class="btn btn-color btn-outline-dark" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
   </nav>
        </div>
</div>
`
