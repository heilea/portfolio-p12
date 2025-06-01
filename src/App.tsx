import Header from './components/Header';
import Footer from './components/Footer';
import Presentation from './components/sections/Presentation';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="presentation" className="section"><Presentation /></section>
        <section id="projects" className="section"><Projects /></section>
        <section id="contact" className="section"><Contact /></section>
      </main>
      <Footer />
    </>
  );
}

export default App;
