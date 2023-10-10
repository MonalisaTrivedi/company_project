import React from 'react'
import Portfolio_comp from '../Components/Portfolio/Portfolio_comp'
import Navbar_company from '../Components/Common/Navbar_company'

const Portfolio = () => {
  return (
   <>
   <Navbar_company/>
   <main id="main">

   <section id="breadcrumbs" class="breadcrumbs">
      <div class="container">

        <div class="d-flex justify-content-between align-items-center">
          <h2>Portolio</h2>
          <ol>
            <li><a href="/">Home</a></li>
            <li>Portolio</li>
          </ol>
        </div>

      </div>
    </section>

    <Portfolio_comp/>

    </main>
   
   </>
  )
}

export default Portfolio