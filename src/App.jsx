 
import Navbar from './components/navbar/navbar'
import Hero from './components/hero/hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title';
import About from './components/About/About'
import Campus from './components/Campus/Campus';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
   
      <Navbar/>
      <Hero/>
     <div className="container">
      <Title subtitle ='Our Programs' title=' What We Offer' />
     <Programs/>
     <About/>
     <Title subtitle ='Gallery' title=' Campus photos' />
     <Campus/>
     <Title subtitle ='TESTIMONIALS' title=' What Student Says ' />
     <Testimonials/>
     <Title subtitle ='Contact us' title='Get in Touch ' />
     <Contact/>
     <Footer/>
     </div>
    </div>
  );
}

export default App;
