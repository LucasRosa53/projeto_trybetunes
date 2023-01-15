import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Carregando from '../pages/Carregando';
import { addSong } from '../services/favoriteSongsAPI';

class MusicCard extends Component {
  state = {
    loading: false,
  };

  funcSong = async () => {
    const { musica } = this.props; /* validacao */
    this.setState({ loading: true });
    await addSong(musica);
    this.setState({ loading: false });
  };

  render() {
    const { musica } = this.props;
    const { loading } = this.state;
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
            onChange={ this.funcSong }
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
