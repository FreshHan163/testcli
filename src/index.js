/**
 * @file 入口文件
 * @author hanxiaofang
 */
import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Switch, withRouter} from 'react-router-dom';
import App from './page/app';

class RouteIndex extends React.Component {
    render() {
        return <Router>
            <Route component={App} path="/"></Route>
        </Router>
    }
}

ReactDOM.render(
    <RouteIndex />,
    document.getElementById('app')
);
