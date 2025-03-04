import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Frame1 from '../assets/frame1.png';
import Frame2 from '../assets/frame2.png';
import Frame3 from '../assets/frame3.png';
import Frame4 from '../assets/frame4.png';
import Frame5 from '../assets/frame5.png';

const CarouselAuto: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <div className="w-full mx-auto overflow-hidden">
            <Slider {...settings}>
                {[Frame1, Frame2, Frame3, Frame4, Frame5].map((frame, index) => (
                    <div key={index} className="flex justify-center items-center h-[100vh]">
                        <img 
                            src={frame} 
                            alt={`Slide ${index + 1}`} 
                            className="w-full h-full object-cover rounded-lg" 
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default CarouselAuto;