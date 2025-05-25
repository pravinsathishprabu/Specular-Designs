import React from 'react';
import img1 from '../assets/Interior.jpg';
import img2 from '../assets/Exterior.jpg';
import img3 from '../assets/Architecture design.jpg';
import img4 from '../assets/urban planning.jpg';

const Services = () => {

  return (
    <div className="p-4 col-md-11 mx-auto">
      <h1 className="text-center">Our Services</h1>
      <p className="text-center">We offer a variety of services to meet your needs.</p>
      <hr />

      <div
        id="carouselExample"
        className="carousel slide mt-4"
         data-bs-ride="carousel"
        // data-bs-interval="3000"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-md-6">
                <img src={img1} className="d-block w-100" alt="Interior Service" />
              </div>
              <div className="col-md-6 text-start mt-2">
                <h4>1. Interior Design</h4>
                <hr/>
                <p>🌟 We create spaces that are not only beautiful but also functional and tailored to your lifestyle.</p>
                <p>🌟 Our team of experts will work with you to design a space that reflects your personal style and meets your needs.</p>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-md-6 text-start mt-2">
                <h4>2. Exterior Design</h4>
                <hr/>
                <p>🌟 We design exteriors that are not only visually stunning but also durable and sustainable.</p>
                <p>🌟 Our team will work with you to create an exterior that enhances the beauty of your property and stands the test of time.</p>
              </div>
              <div className="col-md-6">
                <img src={img2} className="d-block w-100" alt="Exterior Service" />
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-md-6">
                <img src={img3} className="d-block w-100" alt="Architecture Design" />
              </div>
              <div className="col-md-6 text-start mt-2">
                <h4>3. Architecture Design</h4>
                <hr/>
                <p>🌟 We provide architectural services that blend aesthetics with functionality.</p>
                <p>🌟 Our architects will collaborate with you to create designs that are innovative and sustainable.</p>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-md-6 text-start mt-2">
                <h4>4. Urban Planning</h4>
                <hr/>
                <p>🌟 Our urban planning services ensure sustainable and efficient land use.</p>
                <p>🌟 Our team will work with you to create an exterior that enhances the beauty of your property and stands the test of time.</p>
              </div>
              <div className="col-md-6">
                <img src={img4} className="d-block w-100" alt="Urban Planning Service" />
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-facebook"></i>
        </a>
        <a href="https://www.instagram.com/specular_design_studio/?utm_source=qr&igsh=NXF1M3l4dXVxdWly#" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-instagram text-danger" />
        </a>
        <a href="https://www.linkedin.com/in/karthi-selvam-44029a20a/" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-linkedin text-info" />
        </a>
        <a href="https://www.youtube.com/@SpecularDesignStudio" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-youtube text-danger" />
        </a>
      </div>
      </div> 
  );
};

export default Services;
