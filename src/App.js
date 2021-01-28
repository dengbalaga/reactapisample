import React, {useState} from 'react';
import Axios from 'axios';
//import logo from './logo.svg';
import './App.css';


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
      <center><p className="title1">{joke}</p></center>
      <center><button className="but1" onClick={getJoke}>Get a Joke</button></center>
    </div>
  );
}

export default App;
