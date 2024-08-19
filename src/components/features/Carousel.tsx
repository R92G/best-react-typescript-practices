import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";

/* Carousel Component
 *
 * A carousel component that displays images in a slider.
 * It also includes thumbnails for navigation.
 */

export const Carousel: React.FC<{ images: string[] }> = ({ images }) => {
  const swiperRef = useRef<Swiper | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleThumbnailClick = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index); // Navigate to the selected slide
    }
  };

  return (
    <CarouselContainer>
      <SwiperComponent
        modules={[Navigation, A11y]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setActiveIndex(swiper.activeIndex); // Update active index on slide change
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} // Update active index when sliding
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <SlideImage src={image} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </SwiperComponent>

      {/* Thumbnails */}
      <ThumbnailsContainer>
        {images.map((image, index) => (
          <Thumbnail
            loading="lazy"
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            isActive={activeIndex === index}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </ThumbnailsContainer>
    </CarouselContainer>
  );
};

// Styled Components
const CarouselContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 20px auto;
  height: fit-content;
  position: static;
  margin-bottom: 4rem;

  @media (min-width: 1024px) {
    position: sticky;
    top: 20px;
  }
`;

const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

const ThumbnailsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
  display: none;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const Thumbnail = styled.img<{ isActive: boolean }>`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 8px;
  border: ${({ isActive }) =>
    isActive ? "2px solid #007bff" : "2px solid transparent"};
  cursor: pointer;
  transition: border 0.3s ease;

  &:hover {
    border: 2px solid #007bff;
  }
`;
