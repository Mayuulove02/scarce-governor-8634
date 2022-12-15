
import React from "react";
import Carousel from "nuka-carousel";
import Icon from "@mdi/react";
import { mdiChevronLeft, mdiChevronRight } from "@mdi/js";

import "./Carousel.css";

const banners = [
  "https://img.gkbcdn.com/bn/2205/1500x2603-628f67f02b40c91f8ca376fa._p1_.jpg",
  "https://img.gkbcdn.com/bn/2205/1500x260-628f67db2b40c91f8ca376f8._p1_.jpg",
  "https://img.gkbcdn.com/bn/2205/1500x2602-628f67e92b40c91f8ca376f9._p1_.jpg",
  
];

function Banner() {
  return (
    <div className="h-banner" >
      <div className="h-banner__carousel">
        <Carousel
        cursor="pointer"
          autoplay
          autoplayReverse
          className="h-banner"
          renderCenterLeftControls={({ previousSlide }) => (
            <Icon
              className="h-banner__control"
              size={5}
              path={mdiChevronLeft}
              onClick={previousSlide}
              cursor={'pointer'}
            />
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <Icon
              className="h-banner__control"
              size={5}
              path={mdiChevronRight}
              onClick={nextSlide}
              cursor={'pointer'}
            />
          )}
          renderBottomCenterControls={() => null}
        >
          {banners.map((bannerSrc, index) => (
            <img key={index} alt={`Banner ${index + 1}`} src={bannerSrc} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Banner;
