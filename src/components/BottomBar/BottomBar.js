import React from 'react';
import './Contact.css';
import SocialData from './SocialData.js'
const BottomBar = () => {
    return (
<div className="Contact">
<h1 className="header">Social Media Below!</h1> {/* <---- Change this text to alter the Header*/}
<div className="desc-text"> {/*Change the text within the the two p's for description text*/}
{SocialData.map((item, index) => {
          return (
             <li key={index} className={item.cName}>
               <a alt={item.title} title={item.title} href={item.}>
                   {item.icon}
                   <span>{item.title}</span></a>
             </li>
          )
       })}
</div>
</div>
    );
}
 
export default BottomBar;

