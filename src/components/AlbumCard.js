import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class AlbumCard extends Component {
  render() {
    const { collectionName, collectionId } = this.props;
    return (
      <li>
        <Link
          data-testid={ `link-to-album-${collectionId}` }
          to={ `/album/${collectionId}` }
        >
          { collectionName }

        </Link>
      </li>
    );
  }
}
export default AlbumCard;

AlbumCard.propTypes = {
  collectionName: PropTypes.string.isRequired,
  collectionId: PropTypes.number.isRequired,
};
