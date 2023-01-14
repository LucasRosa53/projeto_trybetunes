import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MusicCard from '../components/MusicCard';
import getMusics from '../services/musicsAPI';

class Album extends Component {
  state = {
    albumInfo: {},
    musicList: [],
  };

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const musicas = await getMusics(id);
    this.setState({ albumInfo: musicas[0] });
    const somenteMusicas = [...musicas.slice(1)];
    this.setState({ musicList: somenteMusicas });
  }

  render() {
    const { albumInfo, musicList } = this.state;
    return (
      <main>
        <div data-testid="page-album" />
        <div>
          <p data-testid="artist-name">
            { albumInfo.artistName }
          </p>
        </div>
        <div>
          <p data-testid="album-name">
            { albumInfo.collectionName }
          </p>
        </div>
        <div>
          { musicList.map((music) => (
            <MusicCard
              musica={ music }
              key={ music.trackId }
            />
          )) }
        </div>
      </main>
    );
  }
}
export default Album;

Album.propTypes = {
  match: PropTypes.string.isRequired,
  params: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
