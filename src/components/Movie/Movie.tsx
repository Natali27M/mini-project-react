import {FC, useEffect, useState} from "react";
import {Link} from "react-router-dom";

import {IMovie} from "../../interfaces";
import css from "./Movie.module.css"

const Movie: FC<{ movie: IMovie, getMovieGenres: (id:number[])=>string[]}> = (
    {
        movie:
            {
                id,
                original_title,
                release_date,
                poster_path,
                vote_average,
                overview,
                genre_ids
            },
        getMovieGenres
    }) => {

    const [movieGenres, setMovieGenres] = useState<string[]>([]);

    useEffect(() => {
        setMovieGenres(getMovieGenres(genre_ids));
    }, [genre_ids,getMovieGenres]);

    return (
        <div className={css.movieCard}>

                <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt="original_title"/>

    <Link to={`/movies/${id.toString()}`} state={original_title}> Перехід</Link>
            <h4>{original_title}</h4>
            <p>{release_date}</p>
            <p>{vote_average}</p>
            <p>{overview}</p>
            <div>{movieGenres.map((genre, index) => <div key={index}>{genre}</div>)}</div>
        </div>
    );
};

export {Movie};