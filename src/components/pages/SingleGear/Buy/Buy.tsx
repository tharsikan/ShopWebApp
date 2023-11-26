// @ts-nocheck

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import Card from "../../../common/Card/Card";
import ProductCard from "../../../common/ProductCard";
import useSwiperRef from "../../../../hooks/useSwiperRef";

const catalogData = [
  {
    img: "/assets/vectors/",
    name: "ASAT Classic Sonic",
    description: "Lorem Ipsum is simply dummy text of the printing and",
    numberOfReviews: 108,
  },
  {
    img: "/assets/vectors/",
    name: "ASAT Classic Sonic",
    description: "Lorem Ipsum is simply dummy text of the printing and",
    numberOfReviews: 108,
  },
  {
    img: "/assets/vectors/",
    name: "ASAT Classic Sonic",
    description: "Lorem Ipsum is simply dummy text of the printing and",
    numberOfReviews: 108,
  },
  {
    img: "/assets/vectors/",
    name: "ASAT Classic Sonic",
    description: "Lorem Ipsum is simply dummy text of the printing and",
    numberOfReviews: 108,
  },
  {
    img: "/assets/vectors/",
    name: "ASAT Classic Sonic",
    description: "Lorem Ipsum is simply dummy text of the printing and",
    numberOfReviews: 108,
  },
  {
    img: "/assets/vectors/",
    name: "ASAT Classic Sonic",
    description: "Lorem Ipsum is simply dummy text of the printing and",
    numberOfReviews: 108,
  },
  {
    img: "/assets/vectors/",
    name: "ASAT Classic Sonic",
    description: "Lorem Ipsum is simply dummy text of the printing and",
    numberOfReviews: 108,
  },
  {
    img: "/assets/vectors/",
    name: "ASAT Classic Sonic",
    description: "Lorem Ipsum is simply dummy text of the printing and",
    numberOfReviews: 108,
  },
  {
    img: "/assets/vectors/",
    name: "ASAT Classic Sonic",
    description: "Lorem Ipsum is simply dummy text of the printing and",
    numberOfReviews: 108,
  },
];

const Buy = () => {
  const [nextEl, nextRef] = useSwiperRef();
  const [prevEl, prevRef] = useSwiperRef();

  return (
    <Card className="mt-6 p-5">
      <div className="flex justify-between items-center">
        <div className="text-[22px] font-semibold">Buy Items Here</div>
        <div className="flex gap-1">
          <img
            ref={prevRef}
            className="cursor-pointer your-class-arrow your-class-prev"
            src="/assets/vectors/common/arrow-left.svg"
            alt="arrow left"
          />
          <img
            ref={nextRef}
            className="cursor-pointer your-class-arrow your-class-next"
            src="/assets/vectors/common/arrow-right.svg"
            alt="arrow right"
          />
        </div>
      </div>

      <div className="mt-4">
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl,
            nextEl,
          }}
          spaceBetween={10}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            575: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 3.5,
            },
            1480: {
              slidesPerView: 4.5,
            },
          }}
        >
          {catalogData.map((el, idx) => {
            return (
              <SwiperSlide key={"product-" + idx}>
                <ProductCard
                  name={el.name}
                  description={el.description}
                  price="$1,850"
                  numberOfReviews={el.numberOfReviews}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </Card>
  );
};

export default Buy;
