import React from 'react'

 function ContactUs() {
    const handleclick =(e)=>{
        console.log(e)
    }
  return (
    <div className='main-container'>
      <div className='contact'>
        <h1>Contact US</h1>
        <p>Let us hear you!!</p>
      </div>
      <div className='image_and_content'>
        <div className='boxes'>
            <div className='call-btns'>
                <button className='chat-btn'>VIA SUPPORTED CHAT</button>
                <button className='call-btn'>VOICE CALL</button>
            </div>
           <div className='text-area'>
           <button className='sms-btn'>VIA SMS FORM</button>
           
           <input  className="input-name" type='text' placeholder='Name'/>
           <input className="input-name"   type='email' placeholder='email'/>
           <textarea className="text__area" type='text' placeholder='Enter the complaint details'/>
           
           </div>
           <button className='submit-btn' >SUBMIT</button>
        </div>
        <div className='image'>
            <img src='./contact.webp'/>
        </div>
        
      </div>
    </div>
  )
}
export default ContactUs;