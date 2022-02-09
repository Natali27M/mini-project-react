import {FC, useEffect,useState} from "react";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {getAllMovie, setPage} from "../../store";
import {Movie} from "../../components/Movie";
import css from "./MoviePage.module.css";

const MoviesPage:FC = () => {
    const {movies,status,genres,data} = useAppSelector(state => state.movie);

    const dispatch = useAppDispatch();

    const getMovieGenres = (genre_ids: []) => {
        return genre_ids.map(genreId => {
            return genres.filter(genre => genre.id === genreId)[0].name
        });
    };

    useEffect(() => {
        dispatch(getAllMovie({page:data.page}))
    }, [data.page]);

    const prevPage = () => {
        // @ts-ignore
        if (data.page <= data.total_pages) {
            dispatch(setPage({page: data.page - 1}));
        }
    };

    const nextPage = () => {
        // @ts-ignore
        if (data.page <= data.total_pages) {
            dispatch(setPage({page: data.page + 1}));
        }
    };

    const lastPage = () => {
        // @ts-ignore
        if (data.page <= data.total_pages) {
            dispatch(setPage({page: data.total_pages}));
        }
    };

    return (
        <div>
            {status === "fulfilled" ? <div>
                    <div className={css.header}>Header</div>
                    <div className={css.moviePagesStyle}>
                        {movies.map(movie => <Movie key={movie.id} movie={movie} getMovieGenres={getMovieGenres}/>)}
                    </div>
                    <div>
                        <button>First page</button>
                        <button disabled={data.page - 1 < 1} onClick={() => prevPage()}>Prev page</button>
                        {data.page}of{data.total_pages}
                        <button onClick={() => nextPage()}>Next page</button>
                        {/*disabled={data.page + 1 > data.total_pages}*/}
                        <button onClick={() => lastPage()}>Last page</button>
                    </div>
                    <div className={css.footer}>Footer</div>
                </div> :
                <div>Loading</div>
            }
        </div>
    );
};

export {MoviesPage};