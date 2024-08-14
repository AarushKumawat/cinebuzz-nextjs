import { useState, useEffect } from "react";

const Carousel = ({ movies }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  const totalSlides = movies.length;
  const mod = totalSlides / 5;

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % mod);
  };

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1) % mod);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMovieIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 3000);

    return () => clearInterval(interval);
  }, [movies.length]);

  const handleBookNow = (movie) => {
    console.log(`Booking movie: ${movie.title}`);
  };

  return (
    <div className="relative w-full h-auto overflow-hidden">
      {/* Highlighted Movie Box */}
      <div className="mb-4 relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-full mx-auto mt-8 h-96 w-[80%]">
        <img
          src={movies[currentMovieIndex].poster}
          alt="Highlighted Movie"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
        <h3 className="z-10 mt-3 text-3xl font-bold text-white">
          {movies[currentMovieIndex].title}
        </h3>
        <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
          {movies[currentMovieIndex].description}
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative w-[80%] overflow-hidden flex justify-center items-center mx-auto">
        {/* Previous Button */}
        <div className="absolute top-1/2 transform -translate-y-1/2 left-4 z-10">
          <button
            onClick={handlePrev}
            className="bg-black text-white py-2 px-4 rounded-full black_btn border-white bg-transparent border-solid"
          >
            <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
              &#8592;
            </span>
          </button>
        </div>

        {/* Carousel Items */}
        <div
          className="flex transition-transform duration-500 ease-in-out md: m-20"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {movies.map((movie, index) => (
            <div
              key={index}
              className="relative w-full sm:w-1/3 md:w-1/4 lg:w-1/5 px-1 flex-shrink-0"
            >
              <div className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-4 pb-4 pt-20 mx-auto">
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                <h3 className="z-10 mt-2 text-xl font-bold text-white">
                  {movie.title}
                </h3>
                <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                  {movie.description}
                </div>
                <button
                  onClick={() => handleBookNow(movie)}
                  className="z-10 mt-4 text-white py-2 px-4 rounded-full black_btn border border-white bg-transparent"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Next Button */}
        <div className="absolute top-1/2 transform -translate-y-1/2 right-4 z-10">
          <button
            onClick={handleNext}
            className="bg-black text-white py-2 px-4 rounded-full black_btn bg-transparent border-white border-solid"
          >
            <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
              &#8594;
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
