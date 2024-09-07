import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import type { Movie, ApiResponse } from '../../types/movie';

export default function Movie(): React.JSX.Element {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [search, setSearch] = useState<string>("code");
    const [sortGoodBad, setSortGoodBad] = useState<"goodToBad" | "badToGood" | null>(null);

    const apiURL = `https://api.themoviedb.org/3/search/movie`;
    const apiKey = import.meta.env.VITE_API_KEY;
    const language = "fr-FR";

    const recupMovie = async () => {
        try {
            const response = await fetch(
                `${apiURL}?api_key=${apiKey}&query=${search}&language=${language}`
            );
            if (!response.ok) {
                throw new Error(`Erreur de la requête : ${response.statusText}`);
            }
            const data: ApiResponse = await response.json();
            console.log(data);
            setMovies(data.results);
        } catch (error) {
            console.error("Erreur lors de la récupération des films :", error);
        }
    };

    useEffect(() => {
        recupMovie();
    }, [search]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch((e!.target as HTMLInputElement)!.value);
    };

    const sortedMovies = movies
        .slice(0, 12)
        .sort((a: Movie, b: Movie) => {
            if (sortGoodBad === "goodToBad") {
                return b.vote_average - a.vote_average;
            } else if (sortGoodBad === "badToGood") {
                return a.vote_average - b.vote_average;
            }
            return 0;
        });

    return (
        <div className='form-component'>
            <div className="form-container">
                <form>
                    <input
                        type="text"
                        placeholder='Entrez le titre du film'
                        id='searchinput'
                        onChange={handleChange}
                    />
                    {/* <button type='submit'>Rechercher</button> */}
                </form>
                <div className="btn-sort-container">
                    <button
                        className='btn-sort'
                        id='goodToBad'
                        onClick={() => setSortGoodBad("goodToBad")}
                    >
                        Top <span role='img' aria-label='arrow'><i className="fa-solid fa-arrow-up"></i></span>
                    </button>
                    <button
                        className='btn-sort'
                        id='badToGood'
                        onClick={() => setSortGoodBad("badToGood")}
                    >
                        Flop <span role='img' aria-label='arrow'><i className="fa-solid fa-arrow-down"></i></span>
                    </button>
                </div>
            </div>
            <div className="result">
                {sortedMovies.map((movie: Movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    );
};
