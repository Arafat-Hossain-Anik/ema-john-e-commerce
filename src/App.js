import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import OrderReview from './components/OrderReview/OrderReview';
import Inventoty from './components/Inventory/Inventoty';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Shop></Shop>
          </Route>
          <Route exact path='/shop'>
            <Shop></Shop>
          </Route>
          <Route exact path='/review'>
            <OrderReview></OrderReview>
          </Route>
          <Route path='/inventory'>
            <Inventoty></Inventoty>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
