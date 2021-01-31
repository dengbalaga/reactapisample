import React, {useState} from 'react';
import Axios from 'axios';
//import logo from './logo.svg';
import './App.css';

import { Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom';


import Greet from './components/Greet';
import Welcome from './components/Welcome';
import PostList from './components/PostList';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  const [joke, setJoke] = useState("");

  const getJoke = () => {
    Axios.get("https://official-joke-api.appspot.com/random_joke").then((response) => {
      //console.log(response);
      setJoke(response.data.setup + " ... " + response.data.punchline);
    });
    
  }

  return (
    <div>
      <Router>
        <div>
          <nav>
            <ul>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/posts">About</Link></li>
 
            </ul>
          </nav>
        </div>
        <Switch>
          <Route path="/home" exact component={Home}></Route>
          <Route path="/posts" component={PostList}></Route>

        </Switch>
      </Router>
      <Header></Header>
      <center><p className="title1">{joke}</p></center>
      <center><button className="but1" onClick={getJoke}>Get a Joke</button></center>
      <Greet></Greet>
      <Welcome></Welcome>

    </div>
  );
}

export default App;
