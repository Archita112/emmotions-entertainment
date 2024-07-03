import Navbar from './components/Navbar.jsx';
import MainSection from './components/main_section.jsx';
import AboutUs from './components/about_us_section.jsx';
import Services from './components/services.jsx';
import Whyus from './components/whyus.jsx';
import Footer from './components/footer.jsx';
import './App.css';
import './index.css';

function App() {
  return (
    <div>
      <div>
      <Navbar />
      </div>
      <div>
      <MainSection />
      </div>
      <div>
      <AboutUs />
      </div>
      <div>
      <Services />
      </div>
      <div>
      <Whyus />
      </div>
      <div>
      <Footer />
      </div>
    </div>
  );
}

export default App;
