import React, { Component, PropTypes } from 'react';
import {RaisedButton, Styles, TextField} from 'material-ui';

const ThemeManager = new Styles.ThemeManager();

export default class AddressForm extends Component {
  static propTypes = {
    increment: PropTypes.func.isRequired,
    incrementIfOdd: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired
  };

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  render() {
    const { increment, incrementIfOdd, decrement, counter } = this.props;
    return (
      <p>
        Enter Address

        <br />
        <TextField
            floatingLabelText="Address"
            multiLine={true} />
        <br />
        <TextField
            floatingLabelText="City"
            defaultValue="Denver" />
        <br />
        <TextField
            floatingLabelText="State"
            defaultValue="CO"
            style={{width: '5rem'}}/>
        {' '}
        <TextField
            floatingLabelText="Zip"
            defaultValue=""
            style={{width: '9rem'}} />
        <br />
        <br />
        <RaisedButton label="Save" />

        <br />
        <br />
        Clicked: {counter} times yo
        {' '}
        <button onClick={increment}>+</button>
        {' '}
        <button onClick={decrement}>-</button>
        {' '}
        <button onClick={incrementIfOdd}>Increment if odd</button>
      </p>
    );
  }
}

AddressForm.childContextTypes = {
  muiTheme: React.PropTypes.object
};
