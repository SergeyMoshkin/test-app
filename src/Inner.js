import React from 'react';
import PropTypes from 'prop-types';
import ContextDiv from './Inner.styles';

const Inner =  (props, context) =>  {
  const { currentUser } = context;
  return (
    <ContextDiv background={currentUser}>Current "context": {currentUser}</ContextDiv>
  );
};

Inner.contextTypes = {
  currentUser: PropTypes.string
};

export default Inner;
