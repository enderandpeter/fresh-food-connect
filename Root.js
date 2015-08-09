import React, { Component, PropTypes } from 'react'
import { Redirect, Router, Route } from 'react-router';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as stores from './stores';
import App from './containers/App';
import CounterApp from './containers/CounterApp';
import UserLoginApp from './containers/UserLoginApp';

const reducer = combineReducers(stores);
const store = createStore(reducer);

export default class Root extends Component {

    static propTypes = {
        history: PropTypes.object.isRequired
    };

    render () {
        const { history } = this.props;
        return (
            <Provider store={store}>
                {renderRoutes.bind(null, history)}
            </Provider>
        );
    }
}

function renderRoutes(history) {
    return (
        <Router history={history}>
            <Route component={App} path='/'>
                <Route path="profile" component={CounterApp}/>
                <Route path="login" component={UserLoginApp}/>
            </Route>
        </Router>
    );
}
