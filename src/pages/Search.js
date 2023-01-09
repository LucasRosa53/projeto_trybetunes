import React, { Component } from 'react';

class Search extends Component {
  state = {
    name: '',
    buttonSubmitDisabled: true,
  };

  validacao = () => {
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
    this.setState({ [name]: value }, this.validacao);
  };

  render() {
    const { buttonSubmitDisabled, name } = this.state;
    return (
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
          >
            Pesquisar
          </button>
        </form>
      </div>
    );
  }
}
export default Search;
