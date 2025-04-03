import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

export const ContainerProjects = styled.div`
 display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1150px;
  align-items: stretch;
  padding: 2rem 0;
  position: relative;
  `;

export const StyledSwiper = styled(Swiper)`
  width: 100%;
  max-width: 1200px;
  overflow: hidden;
  padding: 0 2rem; 
  
  .swiper-button-next,
  .swiper-button-prev, 
  .swiper-button-prev:after, 
  .swiper-button-next:after {
    color: #000;
    top: 50%;
    transform: translateY(-50%);
    font-size: 22px;
  }

  .swiper-button-next {
    right: 0;
  }

  .swiper-button-prev {
    left: 0;
  }

  .swiper-pagination  {
    position: relative;
    margin-top: 2rem;

    span {
      background-color: #57C0C3;
      border: 1px solid #000;
    }
  }
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
  display: flex;
  justify-content: center;
align-items: stretch;  overflow: visible;
  padding-top: 10px;
  position: relative;
`;
