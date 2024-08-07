// import { useState, useEffect } from "react";

// const Carousel = ({ movies }) => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
//   const totalSlides = movies.length;
//   const mod = totalSlides / 5;

//   const handleNext = () => {
//     setCurrentSlide((prevSlide) => (prevSlide + 1) % mod);
//   };

//   const handlePrev = () => {
//     setCurrentSlide((prevSlide) => (prevSlide - 1) % mod);
//   };

//   // Automatically change the highlighted movie every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentMovieIndex((prevIndex) => (prevIndex + 1) % movies.length);
//     }, 3000); // Change the interval time as needed

//     return () => clearInterval(interval); // Clean up the interval on component unmount
//   }, [movies.length]);

//   return (
//     <div className="relative w-full h-auto overflow-hidden">
//       {/* Highlighted Movie Box */}
//       {/* <div className="mb-4 relative">
//         <div className="flex justify-center items-center w-full h-[30rem] bg-gray-200 p-4">
//           <img
//             src={movies[currentMovieIndex].poster}
//             alt="Highlighted Movie"
//             className="w-full h-full object-cover rounded-md"
//           />
//         </div> */}

//       {/* Movie Title Overlay */}
//       {/* <div className="absolute top-4 left-4 bg-black text-white py-2 px-4 rounded shadow-lg">
//           <h2 className="text-lg font-bold">{movies[currentMovieIndex].title}</h2>
//         </div>

//         <div className="text-center mt-2">
//           <h2 className="text-xl font-bold">{movies[currentMovieIndex].title}</h2>
//           <p className="text-sm text-gray-700">{movies[currentMovieIndex].description}</p>
//         </div>
//       </div> */}
//       <div class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24 ">
//         <img src={movies[1].poster} alt="University of Southern California" class="absolute inset-0 h-full w-full object-cover"/>
//           <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
//           <h3 class="z-10 mt-3 text-3xl font-bold text-white">{movies[1].title}</h3>
//           <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">{movies[1].description}</div>
//       </div>
//       <br>
//       </br>

//       {/* Carousel Container */}
//       <div className="relative w-full h-96 overflow-hidden">
//         {/* Previous Button */}
//         <div className="absolute top-1/2 transform -translate-y-1/2 left-4 z-10">
//           <button
//             onClick={handlePrev}
//             className="bg-black text-white py-2 px-4 rounded-full black_btn"
//           >
//             <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
//               &#8592;
//             </span>{" "}
//             {/* Thicker arrow */}
//           </button>
//         </div>

//         {/* Next Button */}
//         <div className="absolute top-1/2 transform -translate-y-1/2 right-4 z-10">
//           <button
//             onClick={handleNext}
//             className="bg-black text-white py-2 px-4 rounded-full black_btn"
//           >
//             <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
//               &#8594;
//             </span>{" "}
//             {/* Thicker arrow */}
//           </button>
//         </div>

//         {/* Carousel Items */}
//         <div
//           className="flex transition-transform duration-500 ease-in-out -mr-32"
//           style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//         >
//           {movies.map((movie, index) => (
//             <div
//               key={index}
//               className="relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2 flex-shrink-0"
//             >
//               <div className="bg-white shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-105">
//                 <img
//                   src={movie.poster}
//                   alt="Movie poster"
//                   className="w-full h-72 object-cover transition-transform duration-500 ease-in-out"
//                   style={{ borderRadius: "0" }} // Remove curved corners from the image
//                 />
//                 <button
//                   type="button"
//                   className="absolute top-4 left-4 bg-black text-white py-2 px-4 rounded-full black_btn"
//                 >
//                   Book Now
//                 </button>
//                 <div className="p-4 bg-white rounded-b-lg">
//                   <h2 className="text-lg font-semibold">{movie.title}</h2>
//                   <p className="text-sm text-gray-700">{movie.description}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Carousel;

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
      setCurrentMovieIndex((prevIndex) => (prevIndex + 1) );
    }, 3000);

    return () => clearInterval(interval);
  }, [movies.length]);

  const handleBookNow = (movie) => {
    console.log(`Booking movie: ${movie.title}`);
  };

  return (
    <div className="relative w-full h-auto overflow-hidden -mr-36">
      {/* Highlighted Movie Box */}
      <div className="mb-4  relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-full mx-auto mt-8 h-100 " >
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
      <div className="relative w-full overflow-hidden flex justify-center items-center">
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
          className="flex transition-transform duration-500 ease-in-out -mr-24"
          style={{ transform: `translateX(-${currentSlide * 100}%)`, maxWidth: "100%" }}
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
