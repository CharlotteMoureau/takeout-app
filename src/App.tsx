import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CartContext } from './context/CartContext';

import Home from './components/Home';
import Detail from './components/Detail';
import Cart from './components/Cart';

const App: React.FC = () => {
  const [cart, setCart] = useState({
    order: []
  })

  return (
    <Router>
      <CartContext.Provider value={{ cart, setCart }}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/product/:id">
            <Detail />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="*">
            <p>You tried to break my app :'(</p>
          </Route>
        </Switch>
      </CartContext.Provider>
    </Router>
  );
}

export default App;
