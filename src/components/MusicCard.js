import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Carregando from '../pages/Carregando';
import { addSong, getFavoriteSongs } from '../services/favoriteSongsAPI';

class MusicCard extends Component {
  state = {
    loading: false,
    mscFavorita: false,
  };

  async componentDidMount() {
    const guardaFunc = await this.funcMusicaFavorita();
    this.setState({ mscFavorita: guardaFunc });
  }

  funcMusicaFavorita = async () => {
    const { musica: { trackId } } = this.props;
    const musicaFavorita = await getFavoriteSongs();
    return musicaFavorita.map((e) => e.trackId).includes(trackId);
  };

  funcSong = async () => {
    const { musica } = this.props; /* validacao */
    const { mscFavorita } = this.state;
    this.setState({ loading: true });
    await addSong(musica);
    this.setState({ loading: false, mscFavorita: !mscFavorita });
  };

  render() {
    const { musica } = this.props;
    const { loading, mscFavorita } = this.state;
    return (
      <div>
        <div>
          <audio data-testid="audio-component" src={ musica.previewUrl } controls>
            <track kind="captions" />
            O seu navegador não suporta o elemento
            {' '}
            {' '}
            <code>audio</code>
            .
          </audio>
          <p>{ musica.trackName }</p>
        </div>
        { loading && <Carregando /> }
        <label
          htmlFor={ musica.trackId }
        >
          {' '}
          Favorita
          <input
            data-testid={ `checkbox-music-${musica.trackId}` }
            id={ musica.trackId }
            type="checkbox"
            checked={ mscFavorita }
            onClick={ this.funcSong }
          />
        </label>
      </div>
    );
  }
}
export default MusicCard;

MusicCard.propTypes = {
  musica: PropTypes.number.isRequired,
  previewUrl: PropTypes.string.isRequired,
  trackName: PropTypes.string.isRequired,
};
