import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContextDiv from './Inner.styles';

class Inner extends Component {

  static contextTypes = {
    currentUser: PropTypes.string
  };

  render() {
    const { currentUser } = this.context;
    return (
      <ContextDiv background={currentUser}>Current "context": {currentUser}</ContextDiv>
    );
  }
}

export default Inner;
