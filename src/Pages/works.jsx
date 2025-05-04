import { useEffect } from 'react';
import logo from '../assets/SPECULAR_LOGO.png'
import img1 from '../assets/Projects/1.jfif'
import img2 from '../assets/Projects/2.jfif'
import img3 from '../assets/Projects/3.jfif'
import img4 from '../assets/Projects/4.jfif'
import img5 from '../assets/Projects/5.jfif'
import img6 from '../assets/Projects/6.jfif'
import img7 from '../assets/Projects/7.jfif'
import img8 from '../assets/Projects/8.jfif'
import img9 from '../assets/Projects/9.jfif'
import img10 from '../assets/Projects/10.jfif'
import img11 from '../assets/Projects/11.jfif'
import img12 from '../assets/Projects/12.jfif'
import img13 from '../assets/Projects/13.jfif'
import img14 from '../assets/Projects/14.jfif'
import img15 from '../assets/Projects/15.jfif'
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

const Work = () => {

  useEffect(() => {
  const carousel = document.querySelector('#carouselExample');
  if (carousel) {
    new window.bootstrap.Carousel(carousel, {
      interval: 2000,
      ride: 'carousel',
      pause: false,
    });
  }
}, []);

  return (
    <>
<div className='projects'>
      <div className='row p-4'>
        <div className='col-md-6 d-flex justify-content-center'>
        <div className="carousel slide" id="carouselExample" data-bs-ride="carousel" data-bs-interval="2000" data-bs-pause="false">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100 project_img" alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100 project_img" alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100 project_img" alt="Slide 3" />
          </div>
          <div className="carousel-item">
            <img src={img4} className="d-block w-100 project_img" alt="Slide 4" />
          </div>
          <div className="carousel-item">
            <img src={img5} className="d-block w-100 project_img" alt="Slide 5" />
          </div>
          <div className="carousel-item">
            <img src={img6} className="d-block w-100 project_img" alt="Slide 6" />
          </div>
          <div className="carousel-item">
            <img src={img7} className="d-block w-100 project_img" alt="Slide 7" />
          </div>
          <div className="carousel-item">
            <img src={img8} className="d-block w-100 project_img" alt="Slide 8" />
          </div>
          <div className="carousel-item">
            <img src={img9} className="d-block w-100 project_img" alt="Slide 9" />
          </div>
          <div className="carousel-item">
            <img src={img10} className="d-block w-100 project_img" alt="Slide 10" />
          </div>
          <div className="carousel-item">
            <img src={img11} className="d-block w-100 project_img" alt="Slide 11" />
          </div>
          <div className="carousel-item">
            <img src={img12} className="d-block w-100 project_img" alt="Slide 12" />
          </div>
          <div className="carousel-item">
            <img src={img13} className="d-block w-100 project_img" alt="Slide 13" />
          </div>
          <div className="carousel-item">
            <img src={img14} className="d-block w-100 project_img" alt="Slide 14" />
          </div>
          <div className="carousel-item">
            <img src={img15} className="d-block w-100 project_img" alt="Slide 15" />
          </div>
        </div>
      </div>
      </div>
        <div className='col-md-6 mt-4'>
          <h3 className='text-center text-primary'>SKANDHA UPRESIDENCE MURUGAN TEMPLE</h3>
          <i className='subtext'>   -ELEVATING THE DIVINE THROUGH ARCHITECTURE</i>
          <br/><br/>
          <center>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/tY7yvwqxHsY?si=n7w8jeNfaGAeFS3H" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </center>
          <div>
          <br/>
          <table className="table table-info table-striped">
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
        </div>
      </div>
      </div>
      </div>
      </>
  );
};

export default Work;
