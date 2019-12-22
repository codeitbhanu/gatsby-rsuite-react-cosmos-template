import React from "react"

import { Carousel } from "rsuite"

const index = () => {
  return (
    <div style={{ width: "50vw", height: "30vh" }}>
      <Carousel autoplay className="custom-slider" autoplayInterval="1000">
        <img
          src="https://via.placeholder.com/100x64/8f8e94/FFFFFF?text=1"
          height="64"
        />
        <img
          src="https://via.placeholder.com/100x64/8f8e94/FFFFFF?text=2"
          height="64"
        />
        <img
          src="https://via.placeholder.com/100x64/8f8e94/FFFFFF?text=3"
          height="64"
        />
        <img
          src="https://via.placeholder.com/100x64/8f8e94/FFFFFF?text=4"
          height="64"
        />
        <img
          src="https://via.placeholder.com/100x64/8f8e94/FFFFFF?text=5"
          height="64"
        />
      </Carousel>
    </div>
  )
}

export default index
