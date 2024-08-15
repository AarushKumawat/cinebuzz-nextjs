import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@components/ui/card";

export default async function MoviesRoot() {
  const data = await fetch(
    "https://9390-103-187-81-72.ngrok-free.app/api/movies",
  )
    .then((response) => response.json())
    .catch((error) => console.error("Error:", error));

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {data.map((movie, index) => {
        return (
          <Card className="w-full max-w-sm" key={index}>
            <div className="aspect-w-4 aspect-h-5 relative">
              <img
                src={movie.image}
                alt="Product"
                width={400}
                height={500}
                className="object-cover rounded-t-lg"
                style={{ aspectRatio: "400/500", objectFit: "cover" }}
              />
            </div>
            <CardHeader className="grid gap-1 p-4">
              <CardTitle>{movie.title}</CardTitle>
              <CardDescription>{movie.genre}</CardDescription>
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
