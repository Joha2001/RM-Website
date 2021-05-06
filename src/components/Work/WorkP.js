import React from 'react';
import './Work.css';
import Gallery from 'react-grid-gallery';
import {ImageData} from './ImageData.js';
import { useHistory } from "react-router-dom"

const WorkP = () => {
  const history = useHistory(); // History allows for button to navigate to another page.
  function handlePhoto(e) {
    e.preventDefault();
    history.push("/WorkP");
  }
  function handleVideo(e) {
    e.preventDefault();
    history.push("/WorkV");
  }
  return (
        <div className="Work">
          <button type="button" className="button" onClick={handlePhoto}>Photos</button> &nbsp; &nbsp;
          <button type="button" className="button" onClick={handleVideo}>Videos</button>
          <p></p>
          <Gallery images={ImageData} margin={20}/> {/* Change distance between images by change value for margin */}
      </div>
    );
}
 
export default WorkP;