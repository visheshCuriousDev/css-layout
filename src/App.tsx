import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import React, {Suspense} from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Loading from './utility/loading';

const Home = React.lazy(() => import('./components/home'));
const NotFound = React.lazy(() => import('./utility/404'));

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        </Route>
        <Route path='*'>
          <Suspense fallback={<Loading />}>
            <NotFound />
          </Suspense>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
