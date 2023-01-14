import React, { Component } from 'react';

class MusicCard extends Component {
  render() {
    const { musica } = this.props;
    return (
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
    );
  }
}
export default MusicCard;
