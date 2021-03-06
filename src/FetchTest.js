import React, {useState} from 'react';



function Fetchy() {
  const [joke, setJoke] = useState("");

  const getJoke = () => {
    fetch("https://official-joke-api.appspot.com/random_joke")
    .then((response) => response.json())
    .then((data) => {
      //console.log(response);
      setJoke(data.setup + " ... " + data.punchline);
    });
    
  }

  return (
    <div>
        <center><p className="title1">{joke}</p></center>
        <center><button className="but1" onClick={getJoke}>Get a Joke</button></center>
    </div>
  );
}

export default Fetchy;
