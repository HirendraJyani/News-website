import './App.css';
import AboutApp from './components/AboutApp/AboutApp';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import HowItWorks from './components/HowItWorks/HowItWorks';
import SuccessStory from './components/SuccessStory/SuccessStory';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <HowItWorks />
      <SuccessStory />
      <AboutApp />
    </div>
  );
}

export default App;
