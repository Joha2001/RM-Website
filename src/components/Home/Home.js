import React from 'react';
import logo from './logo.png';
import './Home.css';
import { useHistory } from "react-router-dom"
const Home = () => {

    const history = useHistory(); //History allows for button to navigate to another page.
    
    function handleClick(e) {
        e.preventDefault();
        history.push("/Visualizations");
      } //handleClick navigates the user to the visualizations when they click on the Steam button.

    return (
        <div className="App">
        <header className="App-header">
          <button onClick={handleClick}><img src={logo} className="App-logo" alt="logo" /></button>
          <p>
          <h1>I LOVE MUNNA</h1>
            <p></p>
            WOOOOOOOOOOOOOOOOOO
          </p>
        </header>
      </div>
    );
}
 
export default Home;
