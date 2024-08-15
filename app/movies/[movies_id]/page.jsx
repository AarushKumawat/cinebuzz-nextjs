import { DatePicker } from "@components/DatePicker";

export default function MovieEach() {
  const movie = {
    title: "Movie 13",
    description: "This is another movie",
    poster:
      "https://plus.unsplash.com/premium_photo-1658526991238-f34a36d968fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmlraW5pfGVufDB8fDB8fHww",
  };

  return (
    <div className="w-full">
      <section className="w-full">
        <div className="container grid md:grid-cols-[300px_1fr] gap-8 items-center">
          <img
            src={movie.poster}
            width={200}
            height={200}
            alt="Movie Poster"
            className="rounded-lg shadow-lg"
            style={{ aspectRatio: "300/450", objectFit: "cover" }}
          />
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground">
              {movie.title}
            </h1>
            <p className="text-muted-foreground">{movie.description}</p>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-20 lg:py-24">
        <div className="container grid gap-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Book now</h2>
            <div className="flex flex-row">
              <div className="ml-auto">
                <DatePicker />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
