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
            width={300}
            height={450}
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
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Plot Summary
            </h2>
            <p className="text-muted-foreground">{movie.description}</p>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Cast &amp; Crew
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <div className="flex flex-col items-center">
                <img
                  src={movie.poster}
                  width={100}
                  height={100}
                  alt="Tim Robbins"
                  className="rounded-full mb-2"
                  style={{ aspectRatio: "100/100", objectFit: "cover" }}
                />
                <div className="text-center">
                  <h3 className="text-lg font-medium">Tim Robbins</h3>
                  <p className="text-muted-foreground">as Andy Dufresne</p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={movie.poster}
                  width={100}
                  height={100}
                  alt="Morgan Freeman"
                  className="rounded-full mb-2"
                  style={{ aspectRatio: "100/100", objectFit: "cover" }}
                />
                <div className="text-center">
                  <h3 className="text-lg font-medium">Morgan Freeman</h3>
                  <p className="text-muted-foreground">as Red</p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={movie.poster}
                  width={100}
                  height={100}
                  alt="Bob Gunton"
                  className="rounded-full mb-2"
                  style={{ aspectRatio: "100/100", objectFit: "cover" }}
                />
                <div className="text-center">
                  <h3 className="text-lg font-medium">Bob Gunton</h3>
                  <p className="text-muted-foreground">
                    as Warden Samuel Norton
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={movie.poster}
                  width={100}
                  height={100}
                  alt="William Sadler"
                  className="rounded-full mb-2"
                  style={{ aspectRatio: "100/100", objectFit: "cover" }}
                />
                <div className="text-center">
                  <h3 className="text-lg font-medium">William Sadler</h3>
                  <p className="text-muted-foreground">as Heywood</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              User Reviews
            </h2>
            <div className="grid gap-6">
              <div className="bg-muted rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <div className="flex items-center gap-2">
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground ml-auto">
                    June 15, 2024
                  </p>
                </div>
                <p>
                  This is one of the greatest films of all time. The
                  performances, the story, the themes - everything comes
                  together perfectly. I've watched it countless times and it
                  never fails to move me.
                </p>
                <div className="flex items-center mt-2">
                  <img
                    src={movie.poster}
                    width={40}
                    height={40}
                    alt="John Doe"
                    className="rounded-full mr-2"
                    style={{ aspectRatio: "40/40", objectFit: "cover" }}
                  />
                  <p className="text-sm font-medium">John Doe</p>
                </div>
              </div>
              <div className="bg-muted rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <div className="flex items-center gap-2">
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                    <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                  </div>
                  <p className="text-sm text-muted-foreground ml-auto">
                    May 28, 2024
                  </p>
                </div>
                <p>
                  A powerful and emotional film that explores the themes of
                  hope, friendship, and redemption. The performances are
                  outstanding, and the story is truly inspiring.
                </p>
                <div className="flex items-center mt-2">
                  <img
                    src={movie.poster}
                    width={40}
                    height={40}
                    alt="Jane Smith"
                    className="rounded-full mr-2"
                    style={{ aspectRatio: "40/40", objectFit: "cover" }}
                  />
                  <p className="text-sm font-medium">Jane Smith</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
