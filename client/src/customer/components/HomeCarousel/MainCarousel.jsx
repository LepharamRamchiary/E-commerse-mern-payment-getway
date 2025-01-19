import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './MainCarouselData';

const MainCarousel = () => {
    // Map the data to create carousel items
    const items = mainCarouselData.map((item) => (
        <img
            // key={index} // Add a unique key
            className="w-full h-auto object-cover cursor-pointer"
            role="presentation"
            src={item.image}
            alt=""
        />
    ));

    return (
        <div className='w-full overflow-hidden'>
            <AliceCarousel
                // mouseTracking
                items={items}
                // controlsStrategy="alternate"
                infinite
                autoPlay
                autoPlayInterval={3000}
                disableButtonsControls
            />
        </div>
    );
};

export default MainCarousel;
