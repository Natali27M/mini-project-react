import {FC} from "react";
import {Link} from "react-router-dom";
import useLocalStorage from 'use-local-storage';

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
    }) => {

    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

    const switchTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light"
        setTheme(newTheme);
    };

    return (
        <div className={theme === "light" ? css.movieCardDark : css.movieCard}>
            <Link to={`/movies/${id.toString()}`} state={{
                id, original_title, poster_path, release_date, vote_average,
                overview, genre_ids
            }}>
                <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt="original_title"/>
            </Link>
            <div className={theme === "light" ? css.informationDark : css.information}>
                <h3>{original_title}</h3>
                <p>{release_date}</p>
                <p>-{vote_average}-</p>
            </div>

        </div>
    );
};

export {Movie};