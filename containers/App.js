import React, { PropTypes } from 'react';
import UserLoginApp from './UserLoginApp';
import { Link } from 'react-router';
export default class App {
    render() {
        console.log(this.props.children);
        return (
            <div>
                <h1>App</h1>
                {/* change the <a>s to <Links>s */}
                <ul>
                    <li><Link to="/profile">About</Link></li>
                    <li><Link to="/login">login</Link></li>
                </ul>

                {/*
                 next we replace `<Child>` with `this.props.children`
                 the router will figure out the children for us
                 */}
                {this.props.children}
            </div>
        )
    }
}