import Header from './components/Header';
import Footer from './components/Footer';
import Presentation from './sections/Presentation';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

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
