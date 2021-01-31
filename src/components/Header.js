import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom';

import Home from './Home';
import PostList from './PostList';

class Welcome extends Component {
    render() {
        return (
            <div>
                <Router>
                <ul>
                    <li><Link to={"/home"} >Home</Link></li>
                    <li><Link to={"/posts"} >Post List</Link></li>
                </ul>

                <Switch>
          <Route path="/home" exact component={Home}></Route>
          <Route path="/posts" component={PostList}></Route>
        </Switch>
        </Router>
            </div>
        )
    }
}

export default Welcome;