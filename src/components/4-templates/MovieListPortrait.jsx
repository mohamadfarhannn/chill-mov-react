import { Navigation, A11y } from "swiper/modules";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// import swiper styles
import "swiper/css";
import "swiper/css/navigation";

const MovieListPortrait = ({ sectionTitle, moviesPortrait }) => {
  return (
    <section className="film-slider-section w-full pl-5 pr-0 lg:px-[80px] relative">
      <h2 className="text-white text-xl lg:text-2xl font-bold mb-4">
        {sectionTitle}
      </h2>
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={16}
        slidesPerView={"auto"}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next-custom-portrait",
          prevEl: ".swiper-button-prev-custom-portrait",
        }}
        grabCursor={true}
        breakpoints={{
          // Konfigurasi responsif
          320: {
            slidesPerView: 3.2,
            spaceBetween: 16,
          },
          // saat layar >= 640px
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // saat layar >= 1024px
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
      >
        {moviesPortrait.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div className="poster-card relative rounded-lg overflow-hidden cursor-pointer">
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-full object-cover"
              />
              <div className="top-film-badge bg-[#b71f1d] text-white p-1 lg:px-2 lg:py-1 rounded-br-md rounded-tl-md lg:rounded-br-lg lg:rounded-tl-lg  absolute top-0 right-2 lg:right-4 z-20 text-[8px] lg:text-[14px]">
                <p className="text-center">
                  Top
                  <br />
                  <span>10</span>
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Tombol prev dan next */}
      {/* Tombol Prev */}
      <div className="swiper-button-prev-custom-portrait hidden lg:flex items-center justify-center bg-[#2F3334] hover:bg-[#000000] active:bg-[#2F3334] border-[#E7E3FC3B] text-white rounded-full w-10 h-10 cursor-pointer absolute top-[55%] left-2 lg:left-15 -translate-y-1/2 z-10">
        <FaArrowLeft />
      </div>
      {/* Tombol Next */}
      <div className="swiper-button-next-custom-portrait hidden lg:flex items-center justify-center bg-[#2F3334] hover:bg-[#000000] active:bg-[#2F3334] border-[#E7E3FC3B] text-white rounded-full w-10 h-10 cursor-pointer absolute top-[55%] right-2 lg:right-15 -translate-y-1/2 z-10">
        <FaArrowRight />
      </div>
    </section>
  );
};

export default MovieListPortrait;
