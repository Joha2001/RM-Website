import React from 'react';
import './Home.css';
import logo from './logo.png' /* <---- Place the image in the Home folder and change the name to logo.png 
Alternatively, you can change the path from logo.png to the filename of your choice.*/
const Home = () => {
    return (
        <div className="Home">
        <div className="left-Home">
        <img src={logo} alt="Logo" />
        </div>
        <h1 className="header">Header Here</h1> {/* <---- Change this text to alter the Header*/}
        <div className="desc-text"> {/*Change the text within the the two p's for description text*/}
          <p> {/*Start here*/}
          Text starts here. <br /> 
          Use {"<br />"} to make a new line.
          </p> {/*End here*/}

        </div>
      </div>
    );
}
 
export default Home;
