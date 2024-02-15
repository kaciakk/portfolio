import "./app.scss"
import { Hero } from "./components/hero/Hero";
import { Navbar } from "./components/navbar/Navbar";
import Projects  from "./components/projects/Projects";
import Contact from "./components/contact/Contact";


const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar/>
      <Hero/>
      </section>

      <Projects/>
      <section id="Contact">
      <Contact/>
      </section>
  </div>;
};

export default App;