import Nav from './components/Nav';
import Hero from './components/Hero';
import RedSection from './components/RedSection';
import YellowSection from './components/YellowSection';
import Perks from './components/Perks';
import Reviews from './components/Reviews';
import Purchase from './components/Purchase';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Hero/>
      <RedSection/>
      <YellowSection/>
      <Perks/>
      <Reviews/>
      <Purchase/>
    </div>
  );
}

export default App;
