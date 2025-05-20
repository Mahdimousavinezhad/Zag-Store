import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Banner() {
  return (
    <div className="pt-10">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        draggable={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src="/images/b1.jpg"
            alt="Banner"
            width={2000}
            height={1500}
            priority
            className="h-[450px] rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/b2.jpg"
            alt="Banner"
            width={2000}
            height={1500}
            priority
            className="h-[450px] rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/b3.jpg"
            alt="Banner"
            width={2000}
            height={1500}
            priority
            className="h-[450px] rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/b4.jpg"
            alt="Banner"
            width={2000}
            height={1500}
            priority
            className="h-[450px] rounded-lg"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Banner;
