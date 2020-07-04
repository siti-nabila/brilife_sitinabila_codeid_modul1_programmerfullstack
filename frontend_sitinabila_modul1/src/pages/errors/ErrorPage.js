import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorPage extends Component {
    render() {
      return (
        <div>
          <h1> Error {this.props.code}</h1>
        </div>
      )
    };
}
ErrorPage.propTypes = {
    code: PropTypes.number.isRequired
}

export default ErrorPage;