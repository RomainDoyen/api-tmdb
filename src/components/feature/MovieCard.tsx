import { Link } from 'react-router-dom';
import { MovieCardProps } from '../../types/movie';
import { dateFormater, addStorage, deleteStorage } from '../../utils/moviecrd';
import Button from '../ui/Button';
import Image from '../ui/Image';

export default function MovieCard ({ movie }: MovieCardProps): React.JSX.Element {

    const genreFinder = () => {
        let genreArray: string[] = [];
        for (let index = 0; index < movie.genre_ids.length; index++) {
            switch (movie.genre_ids[index]) {
                case 28:
                    genreArray.push(`Action`);
                    break;
                case 12:
                    genreArray.push(`Aventure`);
                    break;
                case 16:
                    genreArray.push(`Animation`);
                    break;
                case 35:
                    genreArray.push(`Comédie`);
                    break;
                case 80:
                    genreArray.push(`Policier`);
                    break;
                case 99:
                    genreArray.push(`Documentaire`);
                    break;
                case 18:
                    genreArray.push(`Drame`);
                    break;
                case 10751:
                    genreArray.push(`Famille`);
                    break;
                case 14:
                    genreArray.push(`Fantasy`);
                    break;
                case 36:
                    genreArray.push(`Histoire`);
                    break;
                case 27:
                    genreArray.push(`Horreur`);
                    break;
                case 10402:
                    genreArray.push(`Musique`);
                    break;
                case 9648:
                    genreArray.push(`Mystère`);
                    break;
                case 10749:
                    genreArray.push(`Romance`);
                    break;
                case 878:
                    genreArray.push(`Science-fiction`);
                    break;
                case 10770:
                    genreArray.push(`Téléfilm`);
                    break;
                case 53:
                    genreArray.push(`Thriller`);
                    break;
                case 10752:
                    genreArray.push(`Guerre`);
                    break;
                case 37:
                    genreArray.push(`Western`);
                    break;
                default:
                    break;
            }
        }
        return genreArray.map((genre: string, index: number) => <li key={index}>{genre}</li>);
    }

    return (
        <div className="main">
            <ul>
                <Link to={`/movie/${movie.id}`} className="content-link">
                <div className="content" key={movie.id}>
                    <Image 
                        src={movie.poster_path ? "https://image.tmdb.org/t/p/original/" + movie.poster_path : "./img/poster.jpg"} 
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
