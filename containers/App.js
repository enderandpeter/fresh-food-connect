import React, { PropTypes } from 'react';
import { Link } from 'react-router';
export default class App {

    static propTypes = {
        children: PropTypes.object.isRequired
    };

    render() {
        return (
            <div>
                <h1>App</h1>
                {/* change the <a>s to <Links>s */}
                <ul>
                    <li><Link to="/profile">profile</Link></li>
                    <li><Link to="/">login</Link></li>
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