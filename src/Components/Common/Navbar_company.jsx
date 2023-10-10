import React from 'react'
import { Link } from 'react-router-dom'

const Navbar_company = () => {
  return (
   
    <>
     <header id="header" class="fixed-top">
    <div class="container d-flex align-items-center">

      <h1 class="logo mr-auto"><Link to="/"><span>Com</span>pany</Link></h1>
      {/* <!-- Uncomment below if you prefer to use an image logo --> */}
      {/* <!-- <a href="index.html" class="logo mr-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>--> */}

      <nav class="nav-menu d-none d-lg-block">
        <ul>
          <li><Link to="/">Home</Link></li>

          <li class="drop-down"><Link to="">About</Link>
            <ul>
              <li><Link to="/About">About Us</Link></li>
              <li><Link to="/Team">Team</Link></li>
              <li><Link to="/Testimonial">Testimonials</Link></li>
              <li class="drop-down"><a href="#">Deep Drop Down</a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
            </ul>
          </li>

          <li><Link to="/Service">Services</Link></li>
          <li><Link to="/Portfolio">Portfolio</Link></li>
          <li><Link to="/Pricing">Pricing</Link></li>
          <li><Link to="/Blog">Blog</Link></li>
          <li><Link to="/Contact">Contact</Link></li>

        </ul>
      </nav>
      {/* <!-- .nav-menu --> */}

      <div class="header-social-links">
        <a href="#" class="twitter"><i class="icofont-twitter"></i></a>
        <a href="#" class="facebook"><i class="icofont-facebook"></i></a>
        <a href="#" class="instagram"><i class="icofont-instagram"></i></a>
        <a href="#" class="linkedin"><i class="icofont-linkedin"></i></a>
      </div>

    </div>
  </header>
    </>
  )
}

export default Navbar_company