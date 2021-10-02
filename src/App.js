import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Loading from './components/UI/Loading';
import './App.css';

function App() {
  const MoviesPage = lazy(() => import('./pages/MoviesPage'));
  const TvPage = lazy(() => import('./pages/TvPage'));
  const Genre = lazy(() => import('./pages/Genere'));
  const Details = lazy(() => import('./pages/Details/Details'));

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route path="/" exact>
              <Redirect to="/movies">
                <MoviesPage />
              </Redirect>
            </Route>
            <Route path="/movies">
              <MoviesPage />
            </Route>
            <Route path="/tv">
              <TvPage />
            </Route>

            <Route path="/details/:id">
              <Details />
            </Route>

            <Route path="/genere">
              <Genre />
            </Route>
            <Route path="*">
              <h2>Not Found</h2>
            </Route>
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
