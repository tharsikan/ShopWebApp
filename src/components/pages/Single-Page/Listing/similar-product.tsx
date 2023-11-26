// @ts-nocheck
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import useSwiperRef from '../../../../hooks/useSwiperRef';
import Card from '../../../common/Card/Card';
import { ProductCard } from '../../Market/product-card';
export default function SimilarProduct() {
  const [nextEl, nextRef] = useSwiperRef();
  const [prevEl, prevRef] = useSwiperRef();
  return (
    <Card>
      <div className='flex items-center justify-between'>
        <p className='text-[22px] font-semibold mt-6 mb-3'>Similar Products</p>
        <div className='flex gap-1'>
          <img
            ref={prevRef}
            className='cursor-pointer your-class-arrow your-class-prev'
            src='/assets/vectors/common/arrow-left.svg'
            alt='arrow left'
          />
          <img
            ref={nextRef}
            className='cursor-pointer your-class-arrow your-class-next'
            src='/assets/vectors/common/arrow-right.svg'
            alt='arrow right'
          />
        </div>
      </div>
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl,
          nextEl,
        }}
        loop={true}
        spaceBetween={10}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {Array.from(Array(12)).map((item) => (
          <SwiperSlide key={item}>
            <ProductCard alt />
          </SwiperSlide>
        ))}
      </Swiper>
    </Card>
  );
}
