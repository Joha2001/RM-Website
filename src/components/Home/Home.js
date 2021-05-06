import React from 'react';
import './Home.css';
import { Fade } from 'react-slideshow-image';
import { HomePhotos } from './HomePhotos.js';
import 'react-slideshow-image/dist/styles.css';
// To change the slideshow image aspect ratio, go to Home.css and change .slideshow-img
// Duration = How many seconds
const Home = () => {
    return (
<div className="Home">
<h1 className="header">Header Here</h1> {/* <---- Change this text to alter the Header*/}
<div className="slideshow">
      <Fade autoplay={true} duration={3000}> 
      {HomePhotos.map((item) => {
                  return (
                      <img class="slideshow-img" src={item.src} alt={item.title}/>
                  )
               })}  
      </Fade>
      </div>
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
