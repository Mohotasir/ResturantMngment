import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import slide1 from "../../../../public/assets/home/slide1.jpg";
import slide2 from "../../../../public/assets/home/slide2.jpg";
import slide3 from "../../../../public/assets/home/slide3.jpg";
import slide4 from "../../../../public/assets/home/slide4.jpg";
import slide5 from "../../../../public/assets/home/slide5.jpg";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";
export default function Category() {
  return (
    <div>
         <SectionHeader
           heading={"---From 11:00am to 10:00pm---"}
           subHeading={"ORDER ONLINE"}
         >
         </SectionHeader>
         <Swiper
      slidesPerView={4}
      spaceBetween={20}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper md:w-[70%] my-24"
    >
      <SwiperSlide>
        <img src={slide1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide3} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide4} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide5} alt="" />
      </SwiperSlide>
    </Swiper>
    </div>
   
  );
}
