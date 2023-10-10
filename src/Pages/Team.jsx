import React from 'react'
import Team_comp from '../Components/Team/Team_comp'
import Navbar_company from '../Components/Common/Navbar_company'

const Team = () => {
  return (
    <>
    <Navbar_company/>
     <main id="main">

     <section id="breadcrumbs" class="breadcrumbs">
      <div class="container">

        <div class="d-flex justify-content-between align-items-center">
          <h2>Team</h2>
          <ol>
            <li><a href="/">Home</a></li>
            <li>Team</li>
          </ol>
        </div>

      </div>
    </section>
    <Team_comp/>

     </main>
    </>
  )
}

export default Team