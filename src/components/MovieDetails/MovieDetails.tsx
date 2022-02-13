import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

import {IMovie} from "../../interfaces";
import {useAppSelector} from "../../hooks";
import css from "./MovieDetails.module.css";

const MovieDetails = () => {
    const {genres} = useAppSelector(state => state.movies);

    const state = useLocation();
    // @ts-ignore
    const movieDetails: IMovie = state.state;
    const {original_title, poster_path, release_date, vote_average, overview,genre_ids} = movieDetails;

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
        <div className={css.main}>
            <h2>{original_title}</h2>

            <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt="original_title"/>

            <div className={css.releaseData}>
                <p>{release_date}</p>
            </div>

            <p>-{vote_average}-</p>

            <div className={css.movieGenres}>
                {movieGenres.map(movieGenre=><div key={movieGenre}>{movieGenre}</div>)}
            </div>

            <div className={css.overview}>
                <p>{overview}</p>
            </div>

        </div>
    );
};

export {MovieDetails};