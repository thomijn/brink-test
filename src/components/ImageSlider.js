'use client';

/**
 * ImageSlider Component:
 * - Utilizes 'Swiper' and 'SwiperSlide' components from 'swiper/react' to create an image slider.
 * - It's a functional component receiving 'amountOfSlides' as a prop to determine the number of slides.
 * - The 'Swiper' configuration includes 'spaceBetween' set to 20 and 'slidesPerView' set to 1.15, 
 *   which controls the spacing between slides and the number of slides visible.
 * - use client is used because this component has to be used on the client side.
 * - The component is exported as default for use in other parts of the application.
 */

import { Swiper, SwiperSlide } from 'swiper/react';

const ImageSlider = ({ amountOfSlides }) => {
    return (
        <div className="ImageSlider">
            <Swiper
                spaceBetween={20}
                slidesPerView={1.15}
            >
                <div className="slides-container">
                    {
                        Array(amountOfSlides).fill().map((_, i) => (
                            <SwiperSlide key={i}>
                                <div className="image" />
                            </SwiperSlide>
                        ))
                    }
                </div >
            </Swiper>
        </div>
    )
}

export default ImageSlider