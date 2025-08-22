import Button from "../1-atoms/Button";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { PiSpeakerSlash } from "react-icons/pi";
import { Navigation, A11y } from "swiper/modules";
import { FaStar, FaArrowRight, FaArrowLeft } from "react-icons/fa";

// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// import swiper styles
import "swiper/css";
import "swiper/css/navigation";
import MovieListPortrait from "../4-templates/MovieListPortrait";

const movies = [
  {
    id: 1,
    title: "Don't Look Up",
    image: "/img/poster/landscape/landscape1.png",
    rating: "4.5/5",
  },
  {
    id: 2,
    title: "The Batman",
    image: "/img/poster/landscape/landscape2.png",
    rating: "4.2/5",
  },
  {
    id: 3,
    title: "Blue Lock",
    image: "/img/poster/landscape/landscape3.png",
    rating: "4.6/5",
  },
  {
    id: 4,
    title: "A Man Called Otto",
    image: "/img/poster/landscape/landscape4.png",
    rating: "4.4/5",
  },
  {
    id: 5,
    title: "Shazam!",
    image: "/img/poster/landscape/landscape5.png",
    rating: "4.5/5",
  },
];

const moviesPortrait = [
  {
    id: 1,
    title: "Don't Look Up",
    image: "/img/poster/portrait/portrait1.png",
    rating: "4.5/5",
  },
  {
    id: 2,
    title: "The Batman",
    image: "/img/poster/portrait/portrait2.png",
    rating: "4.2/5",
  },
  {
    id: 3,
    title: "Blue Lock",
    image: "/img/poster/portrait/portrait3.png",
    rating: "4.6/5",
  },
  {
    id: 4,
    title: "A Man Called Otto",
    image: "/img/poster/portrait/portrait4.png",
    rating: "4.4/5",
  },
  {
    id: 5,
    title: "Shazam!",
    image: "/img/poster/portrait/portrait5.png",
    rating: "4.5/5",
  },
  {
    id: 5,
    title: "Shazam!",
    image: "/img/poster/portrait/portrait5.png",
    rating: "4.5/5",
  },
  {
    id: 5,
    title: "Shazam!",
    image: "/img/poster/portrait/portrait5.png",
    rating: "4.5/5",
  },
];
const Homepage = () => {
  return (
    <main className="flex flex-col flex-wrap w-full bg-[#181A1C] gap-15">
      {/* Hero Section */}
      <section className="hero-section w-full h-[360px] lg:h-[587px] flex justify-center align-center relative gap-4">
        <img
          className="hero-image w-full  object-cover"
          src="/img/bg/hero4.png"
          alt=""
        />
        <div className="gradient-overlay absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-gradient-to-b from-transparent to-[#181A1C] z-10"></div>
        <div className="hero-text text-white absolute top-8 left-0 bottom-0 z-20 w-full h-full flex flex-col justify-center items-start gap-6 px-5 py-2 lg:px-[80px] lg:py-[25px]">
          <div className="hero-text flex flex-col gap-[12px] lg:gap-[20px]">
            <h1 className="hero-title text-[24px] lg:text-[48px] font-bold">
              Spider-Man: Into The Spider-Verse
            </h1>
            <p className="hero-description text-[12px] lg:text-[18px] font-medium line-clamp-3 lg:w-4xl">
              Digigit oleh laba-laba radioaktif di stasiun kereta bawah tanah,
              remaja Brooklyn bernama Miles Morales tiba-tiba mendapatkan
              kekuatan misterius yang mengubahnya menjadi satu-satunya
              Spider-Man. Ketika ia bertemu Peter Parker, ia segera menyadari
              bahwa ada banyak orang lain yang juga memiliki bakat istimewa dan
              kemampuan melayang di udara seperti dirinya. Kini Miles harus
              menggunakan kemampuan barunya untuk melawan Kingpin yang jahat,
              seorang pria raksasa gila yang dapat membuka portal ke alam
              semesta lain dan menarik berbagai versi Spider-Man ke dunia kita.
            </p>
          </div>
          <div className="hero-button flex flex-row w-full justify-between items-center">
            <div className="button-left flex flex-row gap-2">
              <Button type="button" variant="primary">
                Mulai
              </Button>
              <Button
                type="button"
                variant="secondary"
                iconLeft={<IoMdInformationCircleOutline />}
              >
                Selengkapnya
              </Button>
              <Button type="button" variant="outlined">
                13+
              </Button>
            </div>
            <div className="button-right">
              <Button type="button" variant="outlined">
                <PiSpeakerSlash />
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section End */}

      {/* Film Section */}
      <section className="film-section w-full flex flex-col gap-10">
        {/* Film Slider Landscape 1 */}
        <section className="film-slider-section w-full pl-5 pr-0 lg:px-[80px] relative">
          <h2 className="text-white text-xl lg:text-2xl font-bold mb-4">
            Melanjutkan Tonton Film
          </h2>
          <Swiper
            modules={[Navigation, A11y]}
            spaceBetween={16}
            slidesPerView={"auto"}
            loop={true}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            grabCursor={true}
            breakpoints={{
              // Konfigurasi responsif
              320: {
                slidesPerView: 1.2,
                spaceBetween: 16,
              },
              // saat layar >= 640px
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              // saat layar >= 1024px
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
          >
            {movies.map((movie) => (
              <SwiperSlide key={movie.id}>
                <div className="poster-card relative rounded-lg overflow-hidden cursor-pointer">
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="gradient-overlay absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="poster-info absolute bottom-0 left-0 p-4 text-white font-medium flex flex-row justify-between w-full">
                    <span className="title font-medium text-sm lg:text-[18px] line-clamp-1">
                      {movie.title}
                    </span>
                    <div className="rating flex flex-row items-center text-sm lg:text-[18px] mt-1 gap-1">
                      <FaStar />
                      <span className="text-[14px]">{movie.rating}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Tombol prev dan next */}
          {/* Tombol Prev */}
          <div className="swiper-button-prev-custom hidden lg:flex items-center justify-center bg-[#2F3334] hover:bg-[#000000] active:bg-[#2F3334] border-[#E7E3FC3B] text-white rounded-full w-10 h-10 cursor-pointer absolute top-[55%] left-2 lg:left-15 -translate-y-1/2 z-10">
            <FaArrowLeft />
          </div>
          {/* Tombol Next */}
          <div className="swiper-button-next-custom hidden lg:flex items-center justify-center bg-[#2F3334] hover:bg-[#000000] active:bg-[#2F3334] border-[#E7E3FC3B] text-white rounded-full w-10 h-10 cursor-pointer absolute top-[55%] right-2 lg:right-15 -translate-y-1/2 z-10">
            <FaArrowRight />
          </div>
        </section>
        {/* Film Slider Landscape 1 End */}

        {/* Film Slider Portrait 1*/}
        <section className="film-slider-section w-full pl-5 pr-0 lg:px-[80px] relative">
          <h2 className="text-white text-xl lg:text-2xl font-bold mb-4">
            Film Trending
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
        {/* Film Slider Portrait 1 End */}

        <MovieListPortrait
          sectionTitle="Film Trending"
          moviesPortrait={moviesPortrait}
        />
        <MovieListPortrait
          sectionTitle="Rilis Baru"
          moviesPortrait={moviesPortrait}
        />
      </section>
      {/* Film Section End */}
    </main>
  );
};

export default Homepage;
