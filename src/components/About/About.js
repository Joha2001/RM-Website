import React from 'react';
import './About.css';
/* Change the link in src to change the image.
   You can also place a file in the About folder and do the following
   Add import photo from './photoname.png/jpg/whichever file extension the photo is 
   (right under the other imports above this comment)
   replace src="whateverlinkisthere" to src={photo}*/

const About = () => {
    return (
        <div className="About">
        <div className="left-About">
        <img class="portrait" src="https://i1.sndcdn.com/artworks-sAsRV00EqUmWoXUQ-OMw9yQ-t500x500.jpg" alt="My Portrait" />
        </div>
        <h1 className="header">Header Here</h1> {/* <---- Change this text to alter the Header */}
        <div className="desc-text"> {/* Change the text within the the two p's for description text */}
          <p> {/* Start here */}
          Text starts here. <br /> 
          Use {"<br />"} to make a new line.
          </p> {/* End here */}

        </div>
      </div>
    );
}
 
export default About;
