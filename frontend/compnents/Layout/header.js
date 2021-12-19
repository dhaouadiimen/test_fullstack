import NavBar from "./NavBar";

export default function Header() {
    return (
        <div class="fixed-top">
            <NavBar></NavBar>
            <nav class="navbar navbar-expand-lg navbar-light bg-dark">
 
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link text-white" href="#">Home<span class="sr-only"></span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white"  href="#">About Us</a>
      </li>
     
      <li class="nav-item">
        <a class="nav-link text-white "  href="#">Contact Us</a>
      </li>
    </ul>
    
  </div>
</nav>
        </div>
    )
}
