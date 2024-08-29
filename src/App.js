import './App.css';
import Navbar from './Components/Navbar/Navbar';
import HeroSection from './Components/HeroSection/HeroSection';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Productlist from './Components/Project/productlist/Productlist';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="" >
        <Navbar/>
        <HeroSection/>
        <About/>
        <Skills/>
        <Productlist/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
