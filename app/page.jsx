

'use client';
import Feed from '@components/Feed'
import Carousel from '../components/Carousel';

const movies = [
  {
        title: 'Movie 1',
        description: 'This is another movie',
        poster: 'https://media.istockphoto.com/id/995815438/vector/movie-and-film-modern-retro-vintage-poster-background.jpg?s=612x612&w=0&k=20&c=UvRsJaKcp0EKIuqDKp6S7Dwhltt0D5rbegPkS-B8nDQ='
  },
  {
    title: 'Movie 2',
    description: 'This is another movie',
    poster: 'https://media.istockphoto.com/id/995815438/vector/movie-and-film-modern-retro-vintage-poster-background.jpg?s=612x612&w=0&k=20&c=UvRsJaKcp0EKIuqDKp6S7Dwhltt0D5rbegPkS-B8nDQ='
  },
  // Add more movies here...
  {
    title: 'Movie 3',
    description: 'This is another movie',
    poster: 'https://media.istockphoto.com/id/995815438/vector/movie-and-film-modern-retro-vintage-poster-background.jpg?s=612x612&w=0&k=20&c=UvRsJaKcp0EKIuqDKp6S7Dwhltt0D5rbegPkS-B8nDQ='
  },
  {
    title: 'Movie 4',
    description: 'This is another movie',
    poster: 'https://media.istockphoto.com/id/995815438/vector/movie-and-film-modern-retro-vintage-poster-background.jpg?s=612x612&w=0&k=20&c=UvRsJaKcp0EKIuqDKp6S7Dwhltt0D5rbegPkS-B8nDQ='
  },
  {
    title: 'Movie 5',
    description: 'This is another movie',
    poster: 'https://media.istockphoto.com/id/995815438/vector/movie-and-film-modern-retro-vintage-poster-background.jpg?s=612x612&w=0&k=20&c=UvRsJaKcp0EKIuqDKp6S7Dwhltt0D5rbegPkS-B8nDQ='
  },
  {
    title: 'Movie 6',
    description: 'This is another movie',
    poster: 'https://media.istockphoto.com/id/995815438/vector/movie-and-film-modern-retro-vintage-poster-background.jpg?s=612x612&w=0&k=20&c=UvRsJaKcp0EKIuqDKp6S7Dwhltt0D5rbegPkS-B8nDQ='
  },
  {
    title: 'Movie 7',
    description: 'This is another movie',
    poster: 'https://media.istockphoto.com/id/995815438/vector/movie-and-film-modern-retro-vintage-poster-background.jpg?s=612x612&w=0&k=20&c=UvRsJaKcp0EKIuqDKp6S7Dwhltt0D5rbegPkS-B8nDQ='
  },
  {
    title: 'Movie 8',
    description: 'This is another movie',
    poster: 'https://media.istockphoto.com/id/995815438/vector/movie-and-film-modern-retro-vintage-poster-background.jpg?s=612x612&w=0&k=20&c=UvRsJaKcp0EKIuqDKp6S7Dwhltt0D5rbegPkS-B8nDQ='
},
{
title: 'Movie 9',
description: 'This is another movie',
poster: 'https://media.istockphoto.com/id/995815438/vector/movie-and-film-modern-retro-vintage-poster-background.jpg?s=612x612&w=0&k=20&c=UvRsJaKcp0EKIuqDKp6S7Dwhltt0D5rbegPkS-B8nDQ='
},
// Add more movies here...
{
title: 'Movie 10',
description: 'This is another movie',
poster: 'https://media.istockphoto.com/id/995815438/vector/movie-and-film-modern-retro-vintage-poster-background.jpg?s=612x612&w=0&k=20&c=UvRsJaKcp0EKIuqDKp6S7Dwhltt0D5rbegPkS-B8nDQ='
},
{
title: 'Movie 11',
description: 'This is another movie',
poster: 'https://media.istockphoto.com/id/995815438/vector/movie-and-film-modern-retro-vintage-poster-background.jpg?s=612x612&w=0&k=20&c=UvRsJaKcp0EKIuqDKp6S7Dwhltt0D5rbegPkS-B8nDQ='
},
{
title: 'Movie 12',
description: 'This is another movie',
poster: 'https://media.istockphoto.com/id/995815438/vector/movie-and-film-modern-retro-vintage-poster-background.jpg?s=612x612&w=0&k=20&c=UvRsJaKcp0EKIuqDKp6S7Dwhltt0D5rbegPkS-B8nDQ='
},
{
title: 'Movie 13',
description: 'This is another movie',
poster: 'https://media.istockphoto.com/id/995815438/vector/movie-and-film-modern-retro-vintage-poster-background.jpg?s=612x612&w=0&k=20&c=UvRsJaKcp0EKIuqDKp6S7Dwhltt0D5rbegPkS-B8nDQ='
}
];

const Home = () => {

    // const prompt = "write quote of the day"

    // const [output, setOutput] = useState('This is a nextjs project')

    // const generateText = async () => {
    //     try {
    //         const response = await fetch('/api/', {
    //             method: 'POST',  // Method should be a string
    //             headers: {
    //                 'Content-Type': 'application/json'  // Correct header key
    //             },
    //             body: JSON.stringify({ body: prompt })  // Correct JSON.stringify usage
    //         });

            
    //         if (response.ok) {
    //             const data = await response.json();
    //             setOutput(data.output);
    //         } else {
    //             const errorData = await response.json();
    //             setOutput(`Error: ${errorData.error}`);
    //         }
    //     } catch (error) {
    //         console.error(error);
    //         setOutput('An unexpected error occurred.');
    //     }
    // }

    return (
        <section className="w-full flex-center flex-col">
            <h1 className="head_text text-center">
                Book your movie 
                <br className="max-md:hidden" />
                <span className="orange_gradient text-center"> at Cinebuzz</span>
            </h1>
            <p className="desc text-center">
                
            </p>
            <br>
            </br>
            <br>
            </br>
            <h2 className = "">
            <Carousel movies={movies} />

            </h2>
            <br >
            </br>
            
      <div>
        {/* <p>{output}</p> Display API response */}
      </div>
            <Feed />
            
        </section>
    )
}

export default Home;
