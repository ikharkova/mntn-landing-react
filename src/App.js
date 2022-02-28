import './App.css';
import Header from './components/Header/Header';
import ScrolNav from './components/ScrolNav/ScrolNav';
import HeroSection from './components/HeroSection/HeroSection';
import SvgGradients from './components/SvgGradients/SvgGradients';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';

const App = (props) => {
  return (
    <>
      <div className="wrapper">
        <ScrolNav/>
        <div className="container">
          <Header />
          <HeroSection />
        </div>
        <Main />
        <Footer />
      </div>
      <SvgGradients />
    </>
  );
}

export default App;
