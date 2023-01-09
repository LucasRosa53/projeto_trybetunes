import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Carregando from './Carregando';
import { createUser } from '../services/userAPI';

class Login extends Component {
  state = {
    name: '',
    buttonSubmitDisabled: true,
    loading: false,
  };

  validacao = () => {
    const { name } = this.state;
    const maiorQtres = 3;
    if (name.length >= maiorQtres) {
      this.setState({
        buttonSubmitDisabled: false,
      });
    }
  };

  funcSalvar = (user) => {
    const { history } = this.props;
    this.setState({ loading: true }, async () => {
      if (user) {
        await createUser({ name: user });
        return history.push('/search');
      }
    });
  };

  funcTarget = ({ target:
  { value, name } }) => {
    this.setState({ [name]: value }, this.validacao);
  };

  render() {
    const { buttonSubmitDisabled, name, loading } = this.state;
    return (
      <div data-testid="page-login">
        <form>
          <input
            data-testid="login-name-input"
            type="text"
            name="name"
            value={ name }
            onChange={ this.funcTarget }
          />
          <button
            type="submit"
            data-testid="login-submit-button"
            disabled={ buttonSubmitDisabled }
            onClick={ () => this.funcSalvar(name) }
          >
            Entrar

          </button>
          { loading && <Carregando /> }

        </form>
      </div>
    );
  }
}
Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;
export default Login;
