import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Navbar_company from '../Components/Common/Navbar_company';


const Portfolio_details = () => {
  return (
   <>
   <Navbar_company/>
  <main id="main">
  <section id="breadcrumbs" class="breadcrumbs">
      <div class="container">

        <div class="d-flex justify-content-between align-items-center">
          <h2>Portfolio Details</h2>
          <ol>
            <li><a href="/">Home</a></li>
            <li>Portfolio Details</li>
          </ol>
        </div>

      </div>
    </section>

    <section id="portfolio-details" class="portfolio-details">
      <div class="container" data-aos="fade-up">
        <div class="portfolio-details-container">

          <OwlCarousel class="owl-carousel portfolio-details-carousel" items={1} loop={true} autoplay={true}>
            <img src="assets/img/portfolio/portfolio-details-1.jpg" class="img-fluid" alt=""/>
            <img src="assets/img/portfolio/portfolio-details-2.jpg" class="img-fluid" alt=""/>
            <img src="assets/img/portfolio/portfolio-details-3.jpg" class="img-fluid" alt=""/>
          </OwlCarousel>

          <div class="portfolio-info">
            <h3>Project information</h3>
            <ul>
              <li><strong>Category</strong>: Web design</li>
              <li><strong>Client</strong>: ASU Company</li>
              <li><strong>Project date</strong>: 01 March, 2020</li>
              <li><strong>Project URL</strong>: <a href="#">www.example.com</a></li>
            </ul>
          </div>

        </div>

        <div class="portfolio-description">
          <h2>This is an example of portfolio detail</h2>
          <p>
            Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.
          </p>
        </div>

      </div>
    </section>

  </main>
   </>
  )
}

export default Portfolio_details