import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import UserLogin from '../components/UserLogin';
import * as CounterActions from '../actions/CounterActions';

@connect(state => ({
  counter: state.counter
}))
export default class UserLoginApp extends Component {
  render() {
    const { counter, dispatch } = this.props;
    return (
      <UserLogin counter={counter}
               {...bindActionCreators(CounterActions, dispatch)} />
    );
  }
}
