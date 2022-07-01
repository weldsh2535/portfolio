import './App.css';
import Home from './Components/Home';
import About from './Components/About'
import Service from './Components/Service';
import Project from './Components/Project';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <div className='home__bg'>
        <Home/>
        <About/>
        <Service/>
        <Project/>
        {/* <Blog/> */}
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
