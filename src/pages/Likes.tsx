import { useEffect, useState } from 'react';
import Header from '../components/ui/Header';
import MovieCard from '../components/feature/MovieCard';
import Footer from '../components/ui/Footer';
import { Movie } from '../types/movie';
import { links } from '../routes/routes'

export default function Likes (): React.JSX.Element {

    const [listData, setListData] = useState<Movie[]>([]);

    const apiURL: string = `https://api.themoviedb.org/3/movie/`;
    const apiKey: string = import.meta.env.VITE_API_KEY;
    const language: string = "fr-FR";

    let moviesId: string[] = window.localStorage.movies
        ? Array.from(new Set(window.localStorage.movies.split(",")))
        : [];

    const fetchMovies = async () => {
        try {
            const movieRequests: Promise<Movie>[] = moviesId.map(async (id: string) => {
                const response: Response = await fetch(`${apiURL}${id}?api_key=${apiKey}&language=${language}`);
                if (!response.ok) {
                    throw new Error(`Erreur de la requête : ${response.statusText}`);
                }
                const data: Movie = await response.json();
                return data;
            });
        
            const movies: Movie[] = await Promise.all(movieRequests);
            setListData(movies);
        } catch (error) {
            console.error("Erreur lors de la récupération des films :", error);
        }
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    return (
        <>
            <Header links={links} />
            <div className="form-component">
                <div className="result">
                    {listData.length > 0 ? (
                        listData.map((movie: Movie, index: number) => 
                            <MovieCard 
                                movie={movie} 
                                key={`${movie.id}-${index}`} 
                            />
                        )
                    ) : (
                        <p>Vous n'avez pas encore de coup de coeur</p>
                    )}
                </div>
            </div>
            <Footer 
                nameSite="API TMDB" 
                copyright="Tous droits réservés" 
            />
        </>
    );
};
