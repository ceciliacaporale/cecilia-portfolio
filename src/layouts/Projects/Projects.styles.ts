import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

export const ContainerProjects = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  max-width: 1150px;
  align-items: stretch;
  padding-top: 2rem;
  position: relative;

  @media (min-width:1346px) {
    max-width: 1250px!important;
  }
  
  @media (max-width: 422px) {
    padding-top: 8px;
  }
  `;

export const StyledSwiper = styled(Swiper)`
  width: 100%;
  max-width: 1200px;
  overflow: hidden;
  padding: 0 2rem; 

  @media (max-width: 422px) {
    padding: 0 11px;
  }
  
  .swiper-wrapper {
    height: 97%;
  }
  .swiper-button-next,
  .swiper-button-prev, 
  .swiper-button-prev:after, 
  .swiper-button-next:after {
    color: ${({ theme }) => theme.colors.black};
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
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
  display: flex;
  justify-content: center;
  align-items: stretch;  
  overflow: visible;
  padding-top: 10px;
  position: relative;
`;
