import "./App.css";
import Footer from "./Components/Common/Footer";
import Navbar from "./Components/Common/Navbar";
import About from "./Pages/About";
import Home from "./Pages/Home";
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import Team from "./Pages/Team";
import Testimonial from "./Pages/Testimonial";
import Service from "./Pages/Service";
import Portfolio from "./Pages/Portfolio";
import Portfolio_details from "./Pages/Portfolio_details";
import Pricing from "./Pages/Pricing";
import Blog from "./Pages/Blog";
import Blog_link from "./Pages/Blog_link";
import Contact from "./Pages/Contact";
// import Blog_new from "./Pages/Blog_new";

function App() {
  return (
    <>
      <Routers>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About/>}/>
          <Route path="/Team" element={<Team/>}/>
          <Route path="/Testimonial" element={<Testimonial/>}/>
          <Route path="/Service" element={<Service/>}/>
          <Route path="/Portfolio" element={<Portfolio/>}/>
          <Route path="/Portfolio_details" element={<Portfolio_details/>}/>
          <Route path="/Pricing" element={<Pricing/>}/>
          <Route path="/Blog" element={<Blog/>}/>
          <Route path="/Blog_link" element={<Blog_link/>}/>
          <Route path="/Contact" element={<Contact/>}/>
        </Routes>
        <Footer/>
      </Routers>
    </>
  );
}

export default App;
