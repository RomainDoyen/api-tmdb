import { Link } from 'react-router-dom';
import { MovieCardProps } from '../../types/movie';
import { dateFormater, addStorage, deleteStorage } from '../../utils/moviecrd';
import Button from '../ui/Button';
import Image from '../ui/Image';
import { genres } from '../../utils/movieGenre';

export default function MovieCard ({ movie }: MovieCardProps): React.JSX.Element {

    const apiImage: string = "https://image.tmdb.org/t/p/original";

    const genreFinder = () => {
        return movie.genre_ids
            .map((id: number) => genres[id])
            .filter(Boolean) // Filtre les valeurs undefined au cas où un genre ID n'est pas trouvé
            .map((genre: string, index: number) => 
                <li key={index}>
                    {genre}
                </li>
            );
    }

    return (
        <div className="main">
            <ul>
                <Link to={`/movie/${movie.id}`} className="content-link">
                <div className="content" key={movie.id}>
                    <Image 
                        src={movie.poster_path ? apiImage + movie.poster_path : "./img/poster.jpg"} 
                        alt={movie.title}
                    />
                    <div className="content-overlay"></div>
                    <div className="content-details fadeIn-bottom">
                        <h3 className="content-title"><span className="movie-content">Titre:</span> {movie.title}</h3>
                        <p className="content-date"><span className="movie-content">Date de sortie:</span> {dateFormater(movie.release_date)}</p>
                        <p className="content-rating"><span className="movie-content">Note du film:</span> {movie.vote_average.toFixed(1)}/10 <span>⭐</span></p>
                        <p className="content-genre"><span className="movie-content">Genre(s):</span> {movie.genre_ids ? genreFinder() : movie.genres.map((genre) => (
                            <li key={genre.id}>{genre.name}</li>
                        ))}</p>
                        <p className="content-syn"><span className="movie-content">Synopsis:</span> {movie.overview}</p>
                        {movie.genre_ids ? (
                            <Button 
                                className='btn-add'
                                onClick={() => addStorage(movie)}
                                text='Ajouter aux coup de coeur'
                            />
                        ):(
                            <Button 
                                className='btn-del'
                                onClick={() => {
                                    deleteStorage(movie);
                                    window.location.reload();
                                }}
                                text='Supprimer ce coup de coeur'
                            />
                        )}
                    </div>
                </div>
                </Link>
            </ul>
        </div>
    );
};
