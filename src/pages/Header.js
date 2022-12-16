import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Carregando from './Carregando';

class Header extends Component {
  state = {
    name: '',
    loading: false,

  };

  componentDidMount() {
    this.setState({ loading: true }, async () => {
      const userName = await getUser();
      this.setState({ name: userName });
      this.setState({ loading: false });
    });
  }

  render() {
    const { name, loading } = this.state;

    return (
      <header data-testid="header-component">
        <nav>
          <Link to="/search">Procurar</Link>
          <Link to="/album/:id">Album</Link>
          <Link to="/favorites">Favoritos</Link>
          <Link to="/profile">Perfil</Link>
          <Link to="/profile/edit">Edição de Perfil</Link>
        </nav>
        <section data-testid="header-user-name">
          { loading === true ? <Carregando /> : <p>{ name.name }</p> }
        </section>
      </header>
    );
  }
}
export default Header;
