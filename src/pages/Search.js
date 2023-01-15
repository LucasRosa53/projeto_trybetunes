import React, { Component } from 'react';
import AlbumCard from '../components/AlbumCard';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Carregando from './Carregando';

class Search extends Component {
  state = {
    name: '',
    buttonSubmitDisabled: true,
    loading: false,
    albums: [],
    artista: '',
  };

  funcApi = async (e) => {
    const { name } = this.state;
    e.preventDefault();
    this.setState({ artista: name,
      loading: true });
    const albums = await searchAlbumsAPI(name);
    this.setState({ albums, loading: false, name: '' });
  };

  validacaoPesquisar = () => {
    const { name } = this.state;
    const maiorQdois = 2;
    if (name.length >= maiorQdois) {
      this.setState({
        buttonSubmitDisabled: false,
      });
    }
  };

  funcTarget = ({ target:
    { value, name } }) => {
    this.setState({ [name]: value }, this.validacaoPesquisar);
  };

  render() {
    const { buttonSubmitDisabled, name, loading, albums, artista } = this.state;
    return (
      <>
        <div data-testid="page-search">
          <form>

            <input
              data-testid="search-artist-input"
              type="text"
              name="name"
              value={ name }
              onChange={ this.funcTarget }
            />

            <button
              type="submit"
              data-testid="search-artist-button"
              disabled={ buttonSubmitDisabled }
              onClick={ this.funcApi }
            >
              Pesquisar
            </button>
          </form>
        </div>
        <main>
          {artista && (
            <p>
              Resultado de álbuns de:
              {' '}
              {artista}
              {' '}
            </p>)}
          {loading ? <Carregando /> : (
            <ul>
              {albums.length === 0 && artista
                ? (<p>`Nenhum álbum foi encontrado`</p>) : (
                  albums.map((album) => (<AlbumCard
                    { ...album }
                    key={ album.collectionId }
                  />))
                )}
            </ul>
          )}
        </main>
      </>
    );
  }
}
export default Search;
