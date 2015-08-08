import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'redux/react';
import AddressForm from '../components/AddressForm';
import * as CounterActions from '../actions/CounterActions';

@connect(state => ({
  counter: state.counter
}))
export default class AddressFormApp extends Component {
  render() {
    const { counter, dispatch } = this.props;
    return (
      <AddressForm counter={counter}
               {...bindActionCreators(CounterActions, dispatch)} />
    );
  }
}
