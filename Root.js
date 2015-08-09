import React, { Component, PropTypes } from 'react'
import { Redirect, Router, Route } from 'react-router';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as stores from './stores';
import App from './containers/App';
import Counter from './components/Counter';
import UserLogin from './components/UserLogin';

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
                {() =>
                    <Router history={history}>
                        <Route component={App}>
                            <Route path="/" component={UserLogin}/>
                            <Route path="/profile" component={Counter}/>
                        </Route>
                    </Router>
                }
            </Provider>
        );
    }
}
