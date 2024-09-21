import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow  from '../../assets/white-arrow.png'
const Contact = () => {
     const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "14b390a5-2aa0-4c03-9bb8-51a7c2a5dcd7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>
                feel free to reach out  through contact from or find our contact
                information below.Your feedback, questions, and suggestions are important
                to us as we strive to provide exceptional services to our 
                university community. 
            </p>
            <ul>
                <li> <img src={mail_icon} alt="" />Contact@GreatStack.dev</li>
                <li>  <img src={phone_icon} alt="" />+966 742 683 654</li>
                <li><img src={location_icon} alt="" />456 States Ave New Jersey<br/> 1264 MA UNITED STATES</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label >Your Name</label>
                <input type="text" name='name' placeholder='Enter your Name' required />
                <label>Phone Number</label>
                <input type="tel"  name='phone' placeholder='Enter your mobile number' required />
                <label>
                    Write your Messages here
                </label>
                <textarea name='message' rows="6" placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
                <span>
                  {result}
                </span>
            </form>
        </div>
       
      
    </div>
  )
}

export default Contact;
