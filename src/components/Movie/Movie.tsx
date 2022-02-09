import {FC, useEffect, useState} from "react";

import {IMovie} from "../../interfaces";
import css from "./Movie.module.css"

const Movie: FC<{ movie: IMovie ,getMovieGenres:any}> = (
    {
        movie:
            {
                original_title,
                release_date,
                poster_path,
                vote_average,
                overview,
                genre_ids
            },
        getMovieGenres
    }) => {
    const [movieGenres, setMovieGenres] = useState<any[]>([]);

    useEffect(() => {
        setMovieGenres(getMovieGenres(genre_ids));
    }, []);


    return (
        <div className={css.movieCard}>
            <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt="original_title"/>
            <p>{original_title}</p>
            <p>{release_date}</p>
            <p>{vote_average}</p>
            <p>{overview}</p>
            <div>{movieGenres.map((genre,index)=><div key={index}>{genre}</div>)}</div>
        </div>
    );
};

export {Movie};