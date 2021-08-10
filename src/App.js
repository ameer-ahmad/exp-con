import Nav from './components/Nav';
import Hero from './components/Hero';
import RedSection from './components/RedSection';
import YellowSection from './components/YellowSection';
import Perks from './components/Perks';
import Reviews from './components/Reviews';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Hero/>
      <RedSection/>
      <YellowSection/>
      <Perks/>
      <Reviews/>
    </div>
  );
}

export default App;
