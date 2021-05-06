import React from 'react';
import './Work.css';
import {VideoData} from './VideoData.js';
import { useHistory } from "react-router-dom";
import YouTube from 'react-youtube';
const WorkV = () => {
  const history = useHistory(); // History allows for button to navigate to another page.
  function handlePhoto(e) {
    e.preventDefault();
    history.push("/WorkP");
  }
  function handleVideo(e) {
    e.preventDefault();
    history.push("/WorkV");
  }
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  return (
        <div className="Work">
          <button type="button" className="button" onClick={handlePhoto}>Photos</button> &nbsp; &nbsp;
          <button type="button" className="button" onClick={handleVideo}>Videos</button>
          <p></p>
          {VideoData.map((item, index) => {
                  return (
                              <div>
                                <YouTube videoId={item.id} opts={opts}></YouTube>
                                <p></p>
                              </div>
                  )
               })}
      </div>
    );
}
 
export default WorkV;