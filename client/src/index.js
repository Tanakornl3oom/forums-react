import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/App/App';
import Forums from './container/Forums/Forums';
import ManageForum from './container/Forums/ManageForum';
import NotFound from './container/NotFound/NotFound';
import Layout from './container/Layout/Layout';
import * as serviceWorker from './serviceWorker';
import {
    Route,
    Redirect,
    Switch,
    BrowserRouter as Router
} from 'react-router-dom';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Switch>
                {/* <Route exact path="/">
                    <Redirect to="/login" />
                </Route> */}
                <Route path="/test" component={App} />
                <Layout path="/forums" component={Forums} />
                <Layout path="/manage-forum" component={ManageForum} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
