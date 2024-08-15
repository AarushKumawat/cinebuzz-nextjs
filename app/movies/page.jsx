import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@components/ui/card";

export default function MoviesRoot() {
  const movies = [
    {
      title: "Movie 1",
      description: "This is another movie",
      poster:
        "https://plus.unsplash.com/premium_photo-1658526991238-f34a36d968fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmlraW5pfGVufDB8fDB8fHww",
    },
    {
      title: "Movie 2",
      description: "This is another movie",
      poster:
        "https://plus.unsplash.com/premium_photo-1658526991238-f34a36d968fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmlraW5pfGVufDB8fDB8fHww",
    },
    // Add more movies here...
    {
      title: "Movie 3",
      description: "This is another movie",
      poster:
        "https://plus.unsplash.com/premium_photo-1658526991238-f34a36d968fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmlraW5pfGVufDB8fDB8fHww",
    },
    {
      title: "Movie 4",
      description: "This is another movie",
      poster:
        "https://plus.unsplash.com/premium_photo-1658526991238-f34a36d968fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmlraW5pfGVufDB8fDB8fHww",
    },
    {
      title: "Movie 5",
      description: "This is another movie",
      poster:
        "https://plus.unsplash.com/premium_photo-1658526991238-f34a36d968fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmlraW5pfGVufDB8fDB8fHww",
    },
    {
      title: "Movie 6",
      description: "This is another movie",
      poster:
        "https://plus.unsplash.com/premium_photo-1658526991238-f34a36d968fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmlraW5pfGVufDB8fDB8fHww",
    },
    {
      title: "Movie 7",
      description: "This is another movie",
      poster:
        "https://plus.unsplash.com/premium_photo-1658526991238-f34a36d968fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmlraW5pfGVufDB8fDB8fHww",
    },
    {
      title: "Movie 8",
      description: "This is another movie",
      poster:
        "https://plus.unsplash.com/premium_photo-1658526991238-f34a36d968fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmlraW5pfGVufDB8fDB8fHww",
    },
    {
      title: "Movie 9",
      description: "This is another movie",
      poster:
        "https://plus.unsplash.com/premium_photo-1658526991238-f34a36d968fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmlraW5pfGVufDB8fDB8fHww",
    },
    // Add more movies here...
    {
      title: "Movie 10",
      description: "This is another movie",
      poster:
        "https://plus.unsplash.com/premium_photo-1658526991238-f34a36d968fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmlraW5pfGVufDB8fDB8fHww",
    },
    {
      title: "Movie 11",
      description: "This is another movie",
      poster:
        "https://plus.unsplash.com/premium_photo-1658526991238-f34a36d968fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmlraW5pfGVufDB8fDB8fHww",
    },
    {
      title: "Movie 12",
      description: "This is another movie",
      poster:
        "https://plus.unsplash.com/premium_photo-1658526991238-f34a36d968fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmlraW5pfGVufDB8fDB8fHww",
    },
    {
      title: "Movie 13",
      description: "This is another movie",
      poster:
        "https://plus.unsplash.com/premium_photo-1658526991238-f34a36d968fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmlraW5pfGVufDB8fDB8fHww",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {movies.map((movie, index) => {
        return (
          <Card className="w-full max-w-sm" key={index}>
            <div className="aspect-w-4 aspect-h-5 relative">
              <img
                src={movie.poster}
                alt="Product"
                width={400}
                height={500}
                className="object-cover rounded-t-lg"
                style={{ aspectRatio: "400/500", objectFit: "cover" }}
              />
            </div>
            <CardHeader className="grid gap-1 p-4">
              <CardTitle>{movie.title}</CardTitle>
              <CardDescription>{movie.description}</CardDescription>
            </CardHeader>
            <CardContent className="p-4">
              <button className="z-10 mt-4 text-black py-2 px-4 rounded-full black_btn border border-black bg-transparent">
                Book Now
              </button>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
