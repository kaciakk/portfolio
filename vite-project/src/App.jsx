import "./app.scss"
import { Hero } from "./components/hero/Hero";
import { Navbar } from "./components/navbar/Navbar";
import Projects  from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import AboutMe from "./components/aboutme/AboutMe";
const App = () => {
  return <div>
    
    <section>
      <Navbar/>
      <Hero/>
      </section>

      <Projects/>
      <section>
      <Contact/>
      </section>
  </div>;
};

export default App;