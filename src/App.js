import './App.css';
import Header from './component/Header/Header';
import Shop from './component/Shop/Shop';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import ReviewOrder from './component/ReviewOrder/ReviewOrder';
import PlaceOrder from './component/PlaceOrder/PlaceOrder';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/home">
            <Shop></Shop>
          </Route>
          <Route path="/order">
            <ReviewOrder></ReviewOrder>
          </Route>
          <Route path="/placeorder">
            <PlaceOrder></PlaceOrder>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
