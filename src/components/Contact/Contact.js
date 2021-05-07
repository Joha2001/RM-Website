import React, { useState } from 'react';
import './Contact.css';
import axios from 'axios';
/* Only slight changes will occur in this page, unless specific content needs to be added.
   Refer to config.js and server.js to alter any details to the emails that are sent. */
const Contact = () => {
  const [Cname,setName]=useState("")
  const [Cemail,setEmail]=useState("")
  const [Cmessage,setMessage]=useState("")
 
  const handleNameChange = ({ currentTarget: input }) => {
    setName(input.value);
  };
  const handleEmailChange = ({ currentTarget: input }) => {
    setEmail(input.value);
  };
  const handleMessageChange = ({ currentTarget: input }) => {
    setMessage(input.value);
  };

  function resetForm() {
    setName("");
    setEmail("");
    setMessage("");
  }
  
  function sendMail()
  {
    if ((Cname === "") || (Cemail === "") || (Cmessage === "")) { // Change text within alert, if wanted.
      if (Cname === "")
        alert("Please fill out a name!");
      if (Cemail === "") // Change if to else if to send only the first alert (if all three are issues)
        alert("Please fill out an email!");
      if (Cmessage === "") // Change if to else if to send only the first or second alert
        alert("Please give a short message!");
    }
    else {
      axios({
        method: "POST",
        url:"/send",
        data: {name: Cname, email: Cemail, message: Cmessage},
      }).then((response)=>{
        if (response.data.status === 'success') {
          alert("Message Sent.");
          resetForm()
        } else if(response.data.status === 'fail') {
          alert("Message failed to send.")
        }
      })
    }
  }

    return (
      <div className="Contact">
      <h1 className="header">Contact Me!</h1> {/* <---- Change this text to alter the Header*/}
      <form className="contact-form">
        <label>
        Name <br></br>
        <input type="text" name="Name" value={Cname} placeholder="Name" onChange={handleNameChange}/>
        </label>
        <br></br>
        <label>
        Email <br></br>
        <input type="email" name="Email" value={Cemail} placeholder="Email" onChange={handleEmailChange}/>
        </label>
        <br></br>
        <label>
        Message <br></br>
        <textarea name="Message" value={Cmessage} placeholder="Message" onChange={handleMessageChange} ></textarea>
        </label>
      </form>
      <button type="button" className="button" onClick={() => sendMail()}>Submit</button>
    </div>
    );
    
}
 
export default Contact;
