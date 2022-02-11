import {useLocation} from "react-router-dom";
import {IMovie, IMovieDetails, IPage} from "../../interfaces";
import {useEffect, useState} from "react";
import {useAppSelector} from "../../hooks";

const MovieDetails = () => {
    const {genres} = useAppSelector(state => state.movies);

    const state = useLocation();
    // @ts-ignore
    const movieDetails: IMovie = state.state;
    const {id, original_title, poster_path, release_date, vote_average, overview,genre_ids} = movieDetails;

    const getMovieGenres = (genre_ids: number[]) => {
        return genre_ids.map(genreId => {
            return genres.filter(genre => genre.id === genreId)[0].name
        });
    }
    const [movieGenres, setMovieGenres] = useState<string[]>([]);

    useEffect(() => {
        setMovieGenres(getMovieGenres(genre_ids));
    }, [genre_ids]);

    return (
        <div>
            <p>{id}</p>
            <h3>{original_title}</h3>
            <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt="original_title"/>
            <p>{release_date}</p>
            <p>{vote_average}</p>
            <p>{overview}</p>
            {movieGenres.map(movieGenre=><div key={movieGenre}>{movieGenre}</div>)}
        </div>
    );
};

export {MovieDetails};