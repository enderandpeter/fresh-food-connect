import React, { Component } from 'react';
import AddressFormApp from './AddressFormApp';
import { createRedux } from 'redux';
import { Provider } from 'redux/react';
import * as stores from '../stores';

const redux = createRedux(stores);

export default class App extends Component {
  render() {
    return (
      <Provider redux={redux}>
        {() => <AddressFormApp />}
      </Provider>
    );
  }
}
