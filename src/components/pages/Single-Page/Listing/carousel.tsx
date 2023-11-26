import { HTMLAttributes, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import 'swiper/css/zoom';

import { FreeMode, Navigation, Thumbs, Zoom } from 'swiper';
import { cn } from '../../../../helpers/utils';

const ThumbGallery = ({
  className,
  ...props
}: { className?: string } & HTMLAttributes<HTMLDivElement>) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div
      {...props}
      className={cn('select-none px-4 py-3.5 rounded-xl bg-white ', {})}
    >
      <Swiper
        spaceBetween={10}
        thumbs={{
          //@ts-ignore
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        zoom={true}
        modules={[FreeMode, Thumbs, Zoom]}
        className='overflow-hidden rounded-xl h-96'
      >
        {data.map((_) => (
          <SwiperSlide key={_}>
            <div className='swiper-zoom-container'>
              <img alt='' className=' !object-cover' src={_} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <br />
      <Swiper
        //@ts-ignore
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
      >
        {data.map((_) => (
          <SwiperSlide
            tabIndex={0}
            className='ring-accentYellow-500  [&:where(.swiper-slide-thumb-active)]:ring m-0.5 mb-1 rounded-lg'
            key={_}
          >
            <img
              alt=''
              className={cn('w-full h-full  rounded-lg shadow-lg cursor-pointer')}
              src={_}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ThumbGallery;

const data = [
  "/assets/imgs/gear/bass/fender/pbass502.png",
  "/assets/imgs/gear/bass/fender/pbass51.png",
  "/assets/imgs/gear/bass/fender/pbass510.png",
 
];
