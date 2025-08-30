import {React,useState} from 'react';
import emailjs from '@emailjs/browser';

//import contact from '../assets/cover.jpg';

import { DotLottieReact } from '@lottiefiles/dotlottie-react';


const Contacts = () => {

  const sendEmail = async (formData) => {
  try {
    const result = await emailjs.send(
      'service_t9aetun',
      'template_4ni6utt',
      {
        name: formData.name,
        email: formData.email,
        mobile: formData.mobile,
        message: formData.message,
      },
      'user_7dsS6FK8hPcdBOPUro9LT'
    );
    console.log('Email sent:', result.text);


    return true;
  } catch (error) {
    console.error('Email send failed:', error);
    return false;
  }
};

  const [formData, setFormData] = useState({ name: '', email: '', mobile:'', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await sendEmail(formData);
    if (success) {
      alert('Thanks for reaching us..Will connect with you soon!');
      setFormData({ name: '', email: '', mobile:'', message: '' });
    } else {
      alert('Failed to send message.');
    }
  };

  return (
    <>
      <div className="p-2 col-md-11 mx-auto">
      <h2 className="text-center" style={{color: '#ee6e6c'}}>Contact</h2>
      <p className="text-center">Transform your ideas into stunning reality !!!.</p>
      <hr />
        <div className="row align-items-center">
          {/* Image Section */} 
          <div className="col-lg-6 col-md-12 text-center mb-4">
            <DotLottieReact
              src="https://lottie.host/1628fdd1-58f7-469b-bb16-9395ed97a4ca/FFODugSrOO.json"
              loop
              autoplay
              className='d-none d-md-block'
            />
             <div className='social_contact_2'>
                <a href="https://wa.me/916381378407" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-whatsapp text-success shadow"></i>
                </a>
                <a href="https://www.instagram.com/specular_design_studio/?utm_source=qr&igsh=NXF1M3l4dXVxdWly#" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-instagram text-danger shadow" />
                </a>
                <a href="https://www.linkedin.com/in/karthi-selvam-44029a20a/" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-linkedin text-info shadow" />
                </a>
                <a href="https://www.youtube.com/@SpecularDesignStudio" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-youtube text-danger shadow" />
                </a>
            </div>
        </div>

          {/* Form Section */}
          <div className="col-lg-6 col-md-12">
            <form className="p-4 text-dark shadow rounded" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                <i className="bi bi-person-fill"></i> Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                <i className="bi bi-envelope-fill"></i> Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="mobile" className="form-label">
                <i className="bi bi-phone-fill"></i> Mobile
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="mobile"
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  placeholder="Enter your mobile number"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                <i className="bi bi-chat-right-fill"></i> Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}  
                  rows="5"
                  placeholder="Write your message here..."
                  required
                ></textarea>
              </div>

              <div className="text-center">
                <button type="submit" className="btn btn-outline-primary">
                  <i className="bi bi-send-fill"/> Send
                </button>
              </div>

            </form>
           
          
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
