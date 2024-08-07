import { useState } from 'react';

const Carousel = ({ movies }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = movies.length;
  const mod = totalSlides/5;
  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1)%mod);
  };

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 )%mod);
  };

  return (
    <div className="relative w-full h-96 overflow-hidden">
      {/* Previous Button */}
      <div className="absolute top-1/2 transform -translate-y-1/2 left-4 z-10">
        <button
          onClick={handlePrev}
          className="bg-black text-white py-2 px-4 rounded-full black_btn"
        >
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>&#8592;</span> {/* Thicker arrow */}
        </button>
      </div>

      {/* Next Button */}
      <div className="absolute top-1/2 transform -translate-y-1/2 right-4 z-10">
        <button
          onClick={handleNext}
          className="bg-black text-white py-2 px-4 rounded-full black_btn"
        >
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>&#8594;</span> {/* Thicker arrow */}
        </button>
      </div>

      {/* Carousel Container */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {movies.map((movie, index) => (
          <div
            key={index}
            className="relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2 flex-shrink-0"
          >
            <div className="bg-white shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-105">
              <img
                src={movie.poster}
                alt="Movie poster"
                className="w-full h-72 object-cover transition-transform duration-500 ease-in-out"
                style={{ borderRadius: '0' }} // Remove curved corners from the image
              />
              <button
                type="button"
                className="absolute top-4 left-4 bg-black text-white py-2 px-4 rounded-full black_btn"
              >
                Book Now
              </button>
              <div className="p-4 bg-white rounded-b-lg">
                <h2 className="text-lg font-semibold">{movie.title}</h2>
                <p className="text-sm text-gray-700">{movie.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
