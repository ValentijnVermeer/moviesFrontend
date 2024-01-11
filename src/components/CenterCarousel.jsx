import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useEffect, useState } from "react";
import axios from "axios";
import Star from "../assets/public/StarGold.png";
import {Link} from 'react-router-dom'

const CenterCarousel = () => {
    const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_BASE_URL}/api/movies`)
      .then((res) => {
        console.log(res.data);
        setMovies(res.data);
      })
      .catch((e) => console.error(e));
  }, []);
  return (
    <div className='bg-zinc-950 centercarousel-container'>
<Carousel
  additionalTransfrom={0}
  arrows
  autoPlaySpeed={3000}
  centerMode={true}
  className=""
//   containerClass="container"
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  pauseOnHover
  renderArrowsWhenDisabled={false}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
  responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 3,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2,
      partialVisibilityGutter: 30
    }
  }}
  rewind={false}
  rewindWithAnimation={false}
  rtl={false}
  shouldResetAutoplay
  showDots={false}
  sliderClass=""
  slidesToSlide={1}
  swipeable
>

          {movies !== null ? movies.map((movie) => (
            <Link to={`/movies/${movie.id}`}>
            <div key={movie.id} className="group relative mx-4">
              <div key={movie.id} className="relative aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 image-container-val">
                <img
                  src={movie.poster}
                  // alt={movie.alttext}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
                <div className="absolute bottom-3 left-2 mt-4 flex justify-between text-white">
                  <div>
                    <h3 className="text-xl text-white font-semibold">
                      {movie.title}
                    </h3>
                  </div>
                </div>
              </div>
              </div>
            
            </Link>
          )):<p>No movie found!</p>}
         
     
</Carousel>
</div>
  )
}

export default CenterCarousel