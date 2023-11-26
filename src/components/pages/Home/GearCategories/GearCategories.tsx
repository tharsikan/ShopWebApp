// @ts-nocheck
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import useSwiperRef from "../../../../hooks/useSwiperRef";
import Card from "../../../common/Card";
import { useEffect, useState } from "react";
import clsx from 'clsx';
import { instrumentOptions } from "../../Gear-Catalog/gearData";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { categorySelect } from "../../../../redux/features/categories/categorySlice";

const GearCategories = () => {
  const dispatch = useAppDispatch();
  const category = useAppSelector((state) => state.categorySelect);
  const [nextEl, nextRef] = useSwiperRef();
  const [prevEl, prevRef] = useSwiperRef();
  const [selector, setSelector] = useState(category.value);

  useEffect(() => {

    dispatch(categorySelect(selector));
  
  });
  
  return (
    <Card noMt>
      <div className="flex justify-between">
        <h4 className="underline">Categories</h4>
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

      <div className="mt-[10px]">
        <div className="">
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl,
              nextEl,
            }}
            spaceBetween={10}
            breakpoints={{
              0: {
                slidesPerView: 4,
              },
              400: {
                slidesPerView: 6,
              },
              640: {
                slidesPerView: 10,
              },
              1480: {
                slidesPerView: 12,
              },
            }}
          >
            {instrumentOptions.map((el, idx) => {
              return (
                <SwiperSlide key={"home-category-slider-item" + idx}>
                  <div
                    className={clsx(
                      selector === el.label
                        ? "cursor-pointer flex flex-col items-center border-b-4 border-orange-300 "
                        : "cursor-pointer flex flex-col items-center hover:border-b-4 hover:border-orange-300"
                    )}
                    onClick={() => setSelector(el.label)}
                  >
                    <div
                      className={clsx(
                        selector === el.label
                          ? "rounded-[50%] overflow-hidden w-[54px] h-[54px] relative bg-orange-100 "
                          : "rounded-[50%] overflow-hidden w-[54px] h-[54px] relative hover:bg-orange-100  "
                      )}
                    >
                      <img
                        className="absolute w-[76x] h-[76x]"
                        src="/assets/vectors/home/slider-border.svg"
                        alt="border"
                      />
                      <img
                        className="rounded-[50%] w-[48px] h-[48px] absolute left-2/4 -translate-x-2/4 top-2/4 -translate-y-2/4"
                        src={el.icon}
                        alt="slider"
                      />
                    </div>
                    <div className="mt-1 text-center font-medium text-[10px]">
                      {el.label}
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </Card>
  );
};

export default GearCategories;
