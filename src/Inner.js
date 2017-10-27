import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ContextDiv from './Inner.styles';

export default class Inner extends Component {
  static contextTypes = {
    currentUser: PropTypes.string
  };

  componentWillReceiveProps(nextProps, nextContext){
    console.log("nextContext", nextContext);
    console.log("thisContext", this.context);
  }

  render(){
    const { currentUser } = this.context;

    return (
      <ContextDiv background={currentUser}>Current "context": {currentUser}</ContextDiv>
    );
  }
};

