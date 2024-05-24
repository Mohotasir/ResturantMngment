import SectionHeader from "../../Shared/SectionHeader/SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
export default function Testimonial() {
  const [rev, setRiv] = useState([]);
  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => setRiv(data));
  }, []);
  return (
    <section className="mb-24 max-w-screen-lg mx-auto">
      <div>
        <SectionHeader
          heading={"---What Our Clients Say---"}
          subHeading={"TESTIMONIALS"}
        ></SectionHeader>
      </div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper my-12">
        {rev.map((rev) => (
          <SwiperSlide key={rev._id} className="text-center ">
            <div>
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
              <p className="py-6 max-w-[70%] mx-auto">{rev.details}</p>
              <h1 className="text-orange-600 text-lg">{rev.name}</h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
