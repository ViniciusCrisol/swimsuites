import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Shop from './pages/Shop';
import SingIn from './pages/SingIn';
import Register from './pages/Register';
import Cart from './pages/Cart';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/sing-in" exact component={SingIn} />
        <Route path="/Cart" exact component={Cart} />
        <Route path="/register" exact component={Register} />
      </Switch>
    </BrowserRouter>
  );
}
