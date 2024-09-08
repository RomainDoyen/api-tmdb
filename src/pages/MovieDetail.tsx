import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';
import { dateFormater } from '../utils/moviecrd';
import { Movie } from '../types/movie';
import Image from '../components/ui/Image';
import { links } from '../routes/routes'

export default function MovieDetail (): React.JSX.Element {

    const [currentMovieDetail, setCurrentMovieDetail] = useState<Movie | null>(null);

    const { id } = useParams<{id: string}>();

    const apiURL: string = `https://api.themoviedb.org/3/movie/`;
    const apiKey: string = import.meta.env.VITE_API_KEY;
    const language: string = "fr-FR";
    const apiImage: string = "https://image.tmdb.org/t/p/original";

    const recupMovie = async () => {
        try {
            const response: Response = await fetch(
                `${apiURL}${id}?api_key=${apiKey}&language=${language}`
            );
            if (!response.ok) {
                throw new Error(`Erreur de la requête : ${response.statusText}`);
            }
            const data: Movie = await response.json();
            setCurrentMovieDetail(data);
        } catch (error) {
            console.error("Erreur lors de la récupération des films :", error);
        }
    };

    useEffect(() => {
        recupMovie();
    }, []);

  return (
    <div>
        <Header links={links} />
        <div className="content-detail">
            <Image 
                src={currentMovieDetail ? `${apiImage}${currentMovieDetail.backdrop_path}` : ""} 
                alt={currentMovieDetail ? currentMovieDetail.title : ""}
            />
            <div className="content-film">
                <div className="movie-poster">
                    <Image 
                        src={currentMovieDetail ? `${apiImage}${currentMovieDetail.poster_path}` : ""} 
                        alt={currentMovieDetail ? currentMovieDetail.title : ""}
                    />
                </div>
                <div className='movie-detail'>
                    <h3 className="content-title"><span className='detail'>Titre:</span>{currentMovieDetail?.title}</h3>
                    <p className="content-date"><span className='detail'>Date de sortie:</span>{currentMovieDetail ? dateFormater(currentMovieDetail.release_date) : ""}</p>
                    <p className="content-rating"><span className='detail'>Note du film:</span>{currentMovieDetail ? currentMovieDetail.vote_average.toFixed(1): ""}/10 <span>⭐</span></p>
                    <p className="content-genre"><span className='detail'>Genre(s):</span>{currentMovieDetail ? currentMovieDetail.genres.map((genre) => (
                        <li key={genre.id}>{genre.name}</li>
                    )) : ""}</p>
                    <p className="movie-syn"><span className='detail'>Synopsis:</span>{currentMovieDetail ? currentMovieDetail.overview : ""}</p>
                </div>
            </div>
        </div>
        <Footer 
            nameSite="API TMDB" 
            copyright="Tous droits réservés" 
        />
    </div>
  );
};
