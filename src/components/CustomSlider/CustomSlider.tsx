import type { ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";

import "swiper/swiper-bundle.css";

interface CustomSliderProps<T> {
  data: T[] | undefined;
  renderItem: (item: T) => ReactNode;
  slidesPerView?: number;
}

// T extends { id: string } yazırıq ki, map edərkən key={item.id} xəta verməsin
function CustomSlider<T extends { id: string }>({
  data,
  renderItem,
  slidesPerView = 3,
}: CustomSliderProps<T>) {
  if (!data) return null;

  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={25}
      slidesPerView={slidesPerView}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        320: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: slidesPerView },
      }}
    >
      {data.map((item) => (
        <SwiperSlide key={item.id}>{renderItem(item)}</SwiperSlide>
      ))}
    </Swiper>
  );
}

export default CustomSlider;
