import { DatePicker } from "@components/DatePicker";
import TheatreCard from "@components/TheatreCard";

export default async function MovieEach({ params }) {
    const { id } = params;

    const movieResponse = await fetch(`http://localhost:5000/api/movies/${id}`);
    const movieData = await movieResponse.json().catch((error) => {
        console.error("Error:", error);
        return null;
    });

    if (!movieData) {
        return <div>Movie not found</div>;
    }

    // Fetch theatres for the movie
    const showtimeResponse = await fetch(`http://localhost:5000/api/movies/${id}/showtimes`);
    const showtimeData = await showtimeResponse.json().catch((error) => {
        console.error("Error:", error);
        return [];
    });

    return (
        <div className="w-full">
            <section className="w-full">
                <div className="container grid md:grid-cols-[300px_1fr] gap-8 items-center">
                    <img
                        src={movieData.image}
                        width={200}
                        height={200}
                        alt="Movie Poster"
                        className="rounded-lg shadow-lg"
                        style={{ aspectRatio: "300/450", objectFit: "cover" }}
                    />
                    <div className="space-y-4">
                        <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground">
                            {movieData.title}
                        </h1>
                        <p className="text-muted-foreground">{movieData.description}</p>
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
                        {/* Currently hardcoded , working on the API - Amit*/}
                        <div className="pt-4">
                            <TheatreCard
                                    name={"Rajhans Cinemas"}
                                    times={["12:30PM", "3:30PM", "6:30PM", "9:30PM", "12:30AM"]}
                                />
                            <TheatreCard
                                    name={"Abhiruchi City Pride"}
                                    times={["12:30PM", "3:30PM", "6:30PM", "9:30PM", "12:30AM"]}
                                />
                            <TheatreCard
                                    name={"PVR Cinemas"}
                                    times={["12:30PM", "3:30PM", "6:30PM", "9:30PM", "12:30AM"]}
                                />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
