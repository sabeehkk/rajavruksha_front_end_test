import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";

class TestimonialNewSlider extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    var settings = {
      dots: true,
      arrows: false,
      speed: 900,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      fade: false,
      responsive: [
        {
          breakpoint: 1030,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 850,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };

    const customerFeedback = [
      {
      carouselImg :'https://rajavrukshagroup.in/wp-content/uploads/2023/11/New-Project-18.webp'
      
      },
      {
      carouselImg :'https://images.pexels.com/photos/461960/pexels-photo-461960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      
      },
      {
      carouselImg :'https://images.pexels.com/photos/1382102/pexels-photo-1382102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      
      },
      {
      name: 'Roshan Kumar',
      telling: 'Exceptional service and integrity define Rajavruksha. The process of buying our farm was seamless and gratifying.',
      proffession:'Land Surveyor',
       carouselImg :'https://images.pexels.com/photos/945630/pexels-photo-945630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      ];
      
    // const customerFeedback = [
    //   {
    //     name: 'Smitha',
    //     telling: 'Choosing Rajavruksha for our farm investment was a wise decision. Professionalism and trustworthiness set them apart.',
    //     proffession:'Property Manager'
      
    //   },
    //   {
    //     name: 'Suresh N',
    //     telling: 'Our experience with Rajavruksha was outstanding. Their dedicated team ensured a smooth journey to our farm ownership.',
    //     proffession:'Property Consultant'

    //   },
    //   {
    //     name: 'Manasa V',
    //     telling: 'Rajavruksha made our dream of owning a farm a reality. Their transparent dealings and commitment stood out.',
    //     proffession:'Real Estate Investor'
    //   },
    //   {
    //     name: 'Roshan Kumar',
    //     telling: 'Exceptional service and integrity define Rajavruksha. The process of buying our farm was seamless and gratifying.',
    //     proffession:'Land Surveyor'
    //   },
    // ];
    
    return (
      <div className="testimonial-area" data-aos="fade-up">
        <div className="containerr gal-cont">
          <div className="row">
            <div className="col-lg-12">
              {/* <div className="site-heading"> */}
                {/* <h3 className="sub-title">Hear From </h3> */}
                <h2 style={{textAlign:'center',lineHeight:'45px'}} className="gallery-title">Gallery</h2>
              {/* </div> */}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
          <div style={{paddingLeft:'115px',paddingRight:'115px'}} className="testimonial-new-slider">
                <Slider style={{marginBottom:'30px'}}  ref={(c) => (this.slider = c)} {...settings}>
                  {customerFeedback.map((value,index)=>{
                    return (
                      <div className="slide">
                      <div className="gallery-testimonial">
                        <img src={value.carouselImg} alt={'namesss'} />
                          <div className="testimonial-meta">
                          <div className="testimonial-author">
                          </div>
                        </div>
                      </div>
                    </div>
                    )
                  })}                  
                  </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
}

export default TestimonialNewSlider;
