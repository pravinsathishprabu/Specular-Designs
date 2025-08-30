import React, { useEffect } from 'react';
import img1 from '../assets/Projects/1.jfif';
import img2 from '../assets/Projects/2.jfif';
import img3 from '../assets/Projects/3.jfif';
import img4 from '../assets/Projects/4.jfif';
import img5 from '../assets/Projects/5.jfif';
import img6 from '../assets/Projects/6.jfif';
import img7 from '../assets/Projects/7.jfif';
import img8 from '../assets/Projects/8.jfif';
import img9 from '../assets/Projects/9.jfif';
import img10 from '../assets/Projects/10.jfif';
import img11 from '../assets/Projects/11.jfif';
import img12 from '../assets/Projects/12.jfif';
import img13 from '../assets/Projects/13.jfif';
import img14 from '../assets/Projects/14.jfif';
import img15 from '../assets/Projects/15.jfif';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Carousel } from 'bootstrap';

const Work = () => {

useEffect(() => {
  const carouselEl = document.querySelector('#carouselExample');
  if (carouselEl) {
    new Carousel(carouselEl, {
      interval: 7000,
      ride: 'carousel',
      pause: false
    });
  }
}, []);

  return (
    <>
      <div className='p-2 col-md-11 mx-auto'>
      <h2 className="text-center" style={{color: '#ee6e6c'}}>Projects</h2>
      <p className="text-center">Turning bold ideas into beautiful realities !!!.</p>
      <hr />
      <h3 className='text-center text-primary'>SKANDHA UPRESIDENCE MURUGAN TEMPLE</h3>
      <center><i>-ELEVATING THE DIVINE THROUGH ARCHITECTURE</i>
      </center><br />
        <div className='col-md-12'>
            <center>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/tY7yvwqxHsY?si=n7w8jeNfaGAeFS3H"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              className='youtube-frame'></iframe>
            </center>
            <br />
            
          </div>
        </div>
        <div className='p-2 mt-4'>
          <div className='d-flex justify-content-center'>
            <div className="carousel slide" id="carouselExample" data-bs-ride="carousel" data-bs-interval="3000">
              
              <div className="carousel-inner shadow-lg">
                {[img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15].map((img, idx) => (
                  <div key={idx} className={`carousel-item ${idx === 0 ? 'active' : ''}`}>
                    <img src={img} className="d-block w-100 project_img" alt={`Slide ${idx + 1}`} />
                  </div>
                ))}
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
          
          </div>
            <table className="table w-75 mx-auto rounded shadow-lg table-striped mt-4">
              <thead>
                <tr>
                  <th>Location</th>
                  <th>Client</th>
                  <th>Designer</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Chinnaekkadu, Ikkadu, Tiruvallur District</td>
                  <td>SKANDHA Upresidence</td>
                  <td>Ar. Karthikeyan</td>
                </tr>
              </tbody>
            </table>
          
        <div className="social-icons">
        <a href="https://wa.me/916381378407" target="_blank" rel="noopener noreferrer">
          <i class="bi bi-whatsapp text-success shadow"></i>
        </a>
        <a href="https://www.instagram.com/specular_design_studio/?utm_source=qr&igsh=NXF1M3l4dXVxdWly#" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-instagram shadow text-danger" />
        </a>
        <a href="https://www.linkedin.com/in/karthi-selvam-44029a20a/" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-linkedin shadow text-info" />
        </a>
        <a href="https://www.youtube.com/@SpecularDesignStudio" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-youtube shadow text-danger" />
        </a>
      </div>
      </div> 
    </>
  );
};

export default Work;
