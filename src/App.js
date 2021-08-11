import Landing from './components/Landing';
import PricingPage from './components/PricingPage';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import PaymentPage from './components/PaymentPage';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Landing} />
      <Route path="/pricing" component={PricingPage} />
      <Route path="/payment" component={PaymentPage} />
    </Router>
  );
}

export default App;
