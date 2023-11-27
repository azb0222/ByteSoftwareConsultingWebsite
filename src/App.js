import logo from './logo.svg';
import './App.css';
import NavBar  from './components/Navbar';
import Hero from './components/Hero'; 
import Divider from './components/Divider'; 
import Expertise from './components/Expertise';
import MultipleIndustries from './components/MultipleIndustries';
import TechStack from './components/TechStack';
import TechIcons from './components/TechIcons';
import Trusted from './components/Trusted'; 
import Footer from './components/Footer';
import Team from './components/Team';
import OurPackages from './components/OurPackages';
import ByteDifferent from './components/WhyMakesByteDifferent';

function App() {
  return (
    <div> 
      <NavBar/>
      <Hero/>
      <Divider/>
      <Expertise/>
      <TechStack/>
      <div style={{ height: '30px' }}></div>
      <ByteDifferent></ByteDifferent>
      <OurPackages></OurPackages>
      <div style={{ height: '30px' }}></div>

      <Trusted />
      <div style={{ height: '100px' }}></div>
      {/* <TechIcons/>

      <Team /> */}
      <Footer></Footer>
      
    </div>
  );
}

export default App;