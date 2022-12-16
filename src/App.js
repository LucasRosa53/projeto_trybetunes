import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Search from './pages/Search';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import NotFound from './pages/NotFound';
import Header from './pages/Header';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <main>
            <Switch>
              <Route exact path="/" component={ Login } />
              <Route path="/search" component={ Search } />
              <Route path="/album/:id" component={ Album } />
              <Route path="/favorites" component={ Favorites } />
              <Route path="/profile" component={ Profile } />
              <Route path="/profile/edit" component={ ProfileEdit } />
              <NotFound />
            </Switch>
          </main>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
// começando o projeto vamo q vamo
