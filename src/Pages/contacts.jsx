import React from 'react';
import Navbar from './nav';
import welcome from '../assets/welcome.png';

const Contacts = () => {
  return (
    <>
      <Navbar />
      <div className="container py-4">
        <div className="row align-items-center">
          {/* Image Section */}
          <div className="col-lg-6 col-md-12 text-center mb-4 d-none d-md-block">
            <img
              src={welcome}
              alt="Welcome"
              className="img-fluid col-md-8"
              style={{ borderRadius: '10px', maxWidth: '100%' }}
            />
          </div>

          {/* Form Section */}
          <div className="col-lg-6 col-md-12">
            <form className="p-4">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                <i class="bi bi-person-fill"></i> Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                <i class="bi bi-envelope-fill"></i> Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="mobile" className="form-label">
                <i class="bi bi-phone-fill"></i> Mobile
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="mobile"
                  placeholder="Enter your mobile number"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                <i class="bi bi-chat-right-fill"></i> Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="5"
                  placeholder="Write your message here..."
                  required
                ></textarea>
              </div>

              <div className="text-center">
                <button type="submit" className="btn btn-primary">
                  Send Message
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
