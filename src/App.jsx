import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './App.css';

const App = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, 
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1, 
        }
      }
    ]
  };

  return (
    <div>
      {/* Parallax Section */}
      <section className="parallax">
        <div className="parallax-text">
          <h1>India: A land of timeless beauty.</h1>
          <p>Explore India's hidden gems</p>
        </div>
      </section>

      {/* Slider Section */}
      <section className="slider-container">
        <h2>From the Himalayas to the beaches</h2><br />
        <h3>Unlock the magic of India</h3>
        <Slider {...sliderSettings}>
          <div>
            <img src="https://images.unsplash.com/photo-1602643163983-ed0babc39797?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Slide 1" />
          </div>
          <div>
            <img src="https://plus.unsplash.com/premium_photo-1697729438401-fcb4ff66d9a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Slide 3" />
          </div>
          <div>
            <img src="https://plus.unsplash.com/premium_photo-1661963629241-52c812d5c7f8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Slide 4" />
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1640529209198-0c56ce522607?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWl6b3JhbXxlbnwwfHwwfHx8MA%3D%3D" alt="Slide 5" />
          </div>
        </Slider>
      </section>

      {/* Travel Blogs Section */}
      <section className="blogs-section">
        <h2>Travel Blogs</h2>
        <div className="blogs-container">
          <div className="blog-card">
            <img src="https://plus.unsplash.com/premium_photo-1661814278311-d59ab0b4a676?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Blog 1" />
            <h3>A Journey through the Himalayas</h3>
            <p>Experience the thrill of the Himalayas, from trekking to serene mountain views.</p>
            <button className="read-more-btn">Read More</button>
          </div>
          <div className="blog-card">
            <img src="https://images.unsplash.com/photo-1609828913552-f9138ed9e42d?q=80&w=1794&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Blog 2" />
            <h3>Exploring Kerala's Backwaters</h3>
            <p>Discover the serene beauty of Kerala's tranquil backwaters and lush greenery.</p>
            <button className="read-more-btn">Read More</button>
          </div>
          <div className="blog-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtqwIOt_NZB-CH8WARIDYKKkzeAKuylIV73w&s" alt="Blog 3" />
            <h3>The Vibrance of Rajasthan</h3>
            <p>Explore the vibrant colors, forts, and palaces of Rajasthan's rich heritage.</p>
            <button className="read-more-btn">Read More</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>Created with React, Parallax, and Slick Carousel</p>
      </footer>
    </div>
  );
};

export default App;
