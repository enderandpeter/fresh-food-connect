import React, { Component, PropTypes } from 'react';
import { RaisedButton, Styles, TextField, AppBar } from 'material-ui';

const ThemeManager = new Styles.ThemeManager();

export default class UserLogin extends Component {
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
        //const { increment, incrementIfOdd, decrement, counter } = this.props;
        return (
            <p>
                <AppBar
                    title="Fresh Food Connect"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"/>
                <br />
                <TextField
                    floatingLabelText="Username"
                    multiLine={false}/>
                <br />
                <TextField
                    hintText="Password Field"
                    floatingLabelText="Password"
                    type="password"/>
                <br />
                <RaisedButton label="login"/>
            </p>
        );
    }
}

UserLogin.childContextTypes = {
    muiTheme: React.PropTypes.object
};
