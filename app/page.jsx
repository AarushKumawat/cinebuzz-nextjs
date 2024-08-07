// 'use client';
// import Feed from '@components/Feed'

// import { useState } from "react"

// const Home = () => {

//     const prompt = "write quote of the day"

//     const [output, setOutput] = useState('This is a nextjs project')

//     const generateText = async () => {
//         try {
//             const response = await fetch('api/generate', {
//                 method: POST,
//                 headers: {
//                     'Content-type': 'application/json'
//                 },
//                 body: JSON.stringify({ body: prompt })
//             }),

//             const data = await response.json()

//             if (response.ok) {
//                 setOutput(data.output)
//             } 
//             else {
//                 setOutput(data.error){

//                 }
//             }
//         } catch (error) {
//             console.error(error)
//         }
//     }

//     return (

//         <section className="w-full flex-center flex-col">
//             <h1 className="head_text text-center">
//                 Discover and share
//                 <br className="max-md:hidden" />
//                 <span className="orange_gradient text-center"> AI powered prompts</span>
//             </h1>
//             <p className="desc text-center">
//                 NextApp is an open-source AI prompting tool for modern world to dicover, create and share creative prompts.
//             </p>
//             <h3 onClick={generateText}>
//                 {output}
//             </h3>

//             <Feed />
//         </section>
//     )
// }

// export default Home

// const prompt = "write quote of the day"

    // const [output, setOutput] = useState('This is a nextjs project')

    // const generateText = async () => {
    //     try {
    //         const response = await fetch('api/Route', {
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

'use client';
import Feed from '@components/Feed'
import { useState } from "react"
import Head from 'next/head';
import Carousel from '../components/Carousel';

const movies = [
  {
        title: 'Movie 1',
        description: 'This is another movie',
        poster: 'https://plus.unsplash.com/premium_photo-1658526991238-f34a36d968fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmlraW5pfGVufDB8fDB8fHww'
  },
  {
    title: 'Movie 2',
    description: 'This is another movie',
    poster: 'https://plus.unsplash.com/premium_photo-1658526991238-f34a36d968fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmlraW5pfGVufDB8fDB8fHww'
  },
  // Add more movies here...
  {
    title: 'Movie 3',
    description: 'This is another movie',
    poster: 'https://plus.unsplash.com/premium_photo-1658526991238-f34a36d968fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmlraW5pfGVufDB8fDB8fHww'
  },
  {
    title: 'Movie 4',
    description: 'This is another movie',
    poster: 'https://plus.unsplash.com/premium_photo-1658526991238-f34a36d968fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmlraW5pfGVufDB8fDB8fHww'
  },
  {
    title: 'Movie 5',
    description: 'This is another movie',
    poster: 'https://plus.unsplash.com/premium_photo-1658526991238-f34a36d968fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmlraW5pfGVufDB8fDB8fHww'
  },
  {
    title: 'Movie 6',
    description: 'This is another movie',
    poster: 'https://plus.unsplash.com/premium_photo-1658526991238-f34a36d968fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmlraW5pfGVufDB8fDB8fHww'
  },
  {
    title: 'Movie 7',
    description: 'This is another movie',
    poster: 'https://plus.unsplash.com/premium_photo-1658526991238-f34a36d968fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmlraW5pfGVufDB8fDB8fHww'
  },
  {
    title: 'Movie 1',
    description: 'This is another movie',
    poster: 'https://plus.unsplash.com/premium_photo-1658526991238-f34a36d968fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmlraW5pfGVufDB8fDB8fHww'
},
{
title: 'Movie 2',
description: 'This is another movie',
poster: 'https://plus.unsplash.com/premium_photo-1658526991238-f34a36d968fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmlraW5pfGVufDB8fDB8fHww'
},
// Add more movies here...
{
title: 'Movie 3',
description: 'This is another movie',
poster: 'https://plus.unsplash.com/premium_photo-1658526991238-f34a36d968fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmlraW5pfGVufDB8fDB8fHww'
},
{
title: 'Movie 4',
description: 'This is another movie',
poster: 'https://plus.unsplash.com/premium_photo-1658526991238-f34a36d968fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmlraW5pfGVufDB8fDB8fHww'
},
{
title: 'Movie 5',
description: 'This is another movie',
poster: 'https://plus.unsplash.com/premium_photo-1658526991238-f34a36d968fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmlraW5pfGVufDB8fDB8fHww'
},
{
title: 'Movie 6',
description: 'This is another movie',
poster: 'https://plus.unsplash.com/premium_photo-1658526991238-f34a36d968fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmlraW5pfGVufDB8fDB8fHww'
},
{
title: 'Movie 7',
description: 'This is another movie',
poster: 'https://cdn.discordapp.com/attachments/1267180380708929559/1270804328919076945/image.png?ex=66b50842&is=66b3b6c2&hm=a5cb2dd9fa979d0f7899b8f6f1390322329f41f59a36fba401d1ac2280868b1c&'
}
];

const Home = () => {

    const prompt = "write quote of the day"

    const [output, setOutput] = useState('This is a nextjs project')

    const generateText = async () => {
        try {
            const response = await fetch('/api/', {
                method: 'POST',  // Method should be a string
                headers: {
                    'Content-Type': 'application/json'  // Correct header key
                },
                body: JSON.stringify({ body: prompt })  // Correct JSON.stringify usage
            });

            
            if (response.ok) {
                const data = await response.json();
                setOutput(data.output);
            } else {
                const errorData = await response.json();
                setOutput(`Error: ${errorData.error}`);
            }
        } catch (error) {
            console.error(error);
            setOutput('An unexpected error occurred.');
        }
    }

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
            <button onClick={generateText}>Hello</button> {/* Button triggers API call */}
      <div>
        <p>{output}</p> {/* Display API response */}
      </div>
            <Feed />
        </section>
    )
}

export default Home;
