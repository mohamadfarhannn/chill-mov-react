import Button from "../1-atoms/Button";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { PiSpeakerSlash } from "react-icons/pi";
// Component
import MovieListPortrait from "../4-templates/MovieListPortrait";
import MovieListLandscape from "../4-templates/MovieListLandscape";

const moviesLandscape = [
  {
    id: 1,
    title: "Shazam!",
    image: "/img/poster/landscape/landscape1.png",
    rating: "4.5/5",
    badge: "none",
  },
  {
    id: 2,
    title: "Avatar",
    image: "/img/poster/landscape/landscape2.png",
    rating: "4.2/5",
    badge: "none",
  },
  {
    id: 3,
    title: "Fast X",
    image: "/img/poster/landscape/landscape3.png",
    rating: "4.6/5",
    badge: "none",
  },
  {
    id: 4,
    title: "BLUELOCK",
    image: "/img/poster/landscape/landscape4.png",
    rating: "4.8/5",
    badge: "none",
  },
  {
    id: 5,
    title: "My Perfect Stranger",
    image: "/img/poster/landscape/landscape5.png",
    rating: "4.5/5",
    badge: "none",
  },
  {
    id: 6,
    title: "The Batman",
    image: "/img/poster/landscape/landscape6.png",
    rating: "4.3/5",
    badge: "none",
  },
  {
    id: 7,
    title: "Alice in Borderland",
    image: "/img/poster/landscape/landscape7.png",
    rating: "4.7/5",
    badge: "none",
  },
];

const moviesPortrait = [
  {
    id: 1,
    title: "Little Mermaid",
    image: "/img/poster/portrait/portrait6.png",
    rating: "4.5/5",
    badge: "none",
    releaseDate: "2023-05-26",
  },
  {
    id: 2,
    title: "The Batman",
    image: "/img/poster/portrait/portrait7.png",
    rating: "4.2/5",
    badge: "trending",
    releaseDate: "2022-03-04",
  },
  {
    id: 3,
    title: "BLUELOCK",
    image: "/img/poster/portrait/portrait5.png",
    rating: "4.6/5",
    badge: "newEpisode",
    releaseDate: "2024-10-09",
  },
  {
    id: 4,
    title: "Alice in Borderland",
    image: "/img/poster/portrait/portrait8.png",
    rating: "4.4/5",
    badge: "newEpisode",
    releaseDate: "2022-12-22",
  },
  {
    id: 5,
    title: "Big Hero 6",
    image: "/img/poster/portrait/portrait9.png",
    rating: "4.5/5",
    badge: "trending",
    releaseDate: "2014-11-07",
  },
  {
    id: 6,
    title: "Missing",
    image: "/img/poster/portrait/portrait10.png",
    rating: "4.5/5",
    badge: "none",
    releaseDate: "2023-02-24",
  },
  {
    id: 7,
    title: "M3GAN",
    image: "/img/poster/portrait/portrait11.png",
    rating: "4.5/5",
    badge: "none",
    releaseDate: "2023-01-06",
  },
  {
    id: 8,
    title: "Ant Man: Quantumania",
    image: "/img/poster/portrait/portrait12.png",
    rating: "4.8/5",
    badge: "trending",
    releaseDate: "2023-06-02",
  },
  {
    id: 9,
    title: "Doctor Strange in the Multiverse of Madness",
    image: "/img/poster/portrait/portrait13.png",
    rating: "4.9/5",
    badge: "trending",
    releaseDate: "2024-03-01",
  },
  {
    id: 10,
    title: "Black Adam",
    image: "/img/poster/portrait/portrait14.png",
    rating: "4.7/5",
    badge: "none",
    releaseDate: "2023-07-06",
  },
  {
    id: 11,
    title: "Ted Lasso",
    image: "/img/poster/portrait/portrait15.png",
    rating: "4.6/5",
    badge: "newEpisode",
    releaseDate: "2023-07-21",
  },
  {
    id: 12,
    title: "Spiderman Accross the Spiderverse",
    image: "/img/poster/portrait/portrait16.png",
    rating: "4.5/5",
    badge: "trending",
    releaseDate: "2024-06-14",
  },
  {
    id: 13,
    title: "Suzume",
    image: "/img/poster/portrait/portrait21.png",
    rating: "4.9/5",
    badge: "newEpisode",
    releaseDate: "2024-11-01",
  },
  {
    id: 14,
    title: "A Man Called Otto",
    image: "/img/poster/portrait/portrait20.png",
    rating: "4.3/5",
    badge: "none",
    releaseDate: "2024-03-29",
  },
  {
    id: 15,
    title: "Jurassic World Dominion",
    image: "/img/poster/portrait/portrait17.png",
    rating: "4.1/5",
    badge: "trending",
    releaseDate: "2024-03-08",
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
        <MovieListLandscape
          sectionTitle="Melanjutkan Tonton Film"
          movies={moviesLandscape}
          filterType="top-rated"
          movieInfo={true}
        />
        {/* Film Slider Landscape 1 End */}

        {/* Top Rating*/}
        <MovieListPortrait
          sectionTitle="Top Rating Film dan Series Hari Ini"
          movies={moviesPortrait}
          filterType=""
          movieBadge={true}
        />
        {/* Top Rating End */}

        {/* Trending */}
        <MovieListPortrait
          sectionTitle="Film Trending"
          movies={moviesPortrait}
          filterType="trending"
          movieBadge={true}
        />

        {/* New Release */}
        <MovieListPortrait
          sectionTitle="Rilis Baru"
          movies={moviesPortrait}
          filterType="new-release"
          movieBadge={true}
        />
      </section>
      {/* Film Section End */}
    </main>
  );
};

export default Homepage;
