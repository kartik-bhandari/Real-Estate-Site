import Companies from './components/companies/companies';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import GetStarted from './components/getStarted/getStarted';
import Header from './components/header/header'
import Hero from './components/hero'
import Residencies from './components/residencies/residencies';
import Value from './components/value/value';
import './app.css'
function App() {
  return (
    <div className="App" >
    
      <Header/>
      <Hero/>
      <Companies/>
      <Residencies/>
      <Value/>
      <Contact/>
      <GetStarted/>
      <Footer/>
    </div>
  );
}

export default App;
