



import React, { useState } from 'react';

const Contactform = () => {

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

   

    

    function handleContactForm(e){
    e.prventDefault();
    const contactData = {
        username,
        password,
        message
    }
    
  console.log(contactData);
  

    }

  return (
    <>
    <h1>Contact Form...!</h1>
    <form onSubmit={handleContactForm}>
        <label htmlFor="username">UserName</label>
        <input type="text"
         name='username'
         required
         value={username}
         onChange={(e)=>setUserName(e.target.value)} />


        <label htmlFor="password">Password</label>
        <input type="password"
         name='password'
         required
         value={password}
         onChange={(e)=>setPassword(e.target.value)} />



        <label htmlFor="message">Message</label>
        <input type="text"
         name='message'
         required
         value={message}
         onChange={(e)=>setMessage(e.target.value)} />

        <br />

        <div className="clearfix">
                <button type="submit" className="btn">
                  Sign Up
                </button>
              </div>

    </form>

      
    </>
  )
}

export default Contactform;
