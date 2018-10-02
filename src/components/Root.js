import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'connected-react-router';
import App from './App';

export default class Root extends Component {
  render() {
    const { history } = this.props;
    return (
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    );
  }
}

Root.propTypes = {
  history: PropTypes.object.isRequired
};
