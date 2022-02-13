import {FC, useEffect} from "react";
import {Outlet} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {getAllMovie, setPage} from "../../store";
import {Movie} from "../../components";
import css from "./MoviePage.module.css";

const MoviesPage: FC = () => {
    const {movies, status, genres, data} = useAppSelector(state => state.movies);

    const dispatch = useAppDispatch();

    const getMovieGenres = (genre_ids: number[]) => {
        return genre_ids.map(genreId => {
            return genres.filter(genre => genre.id === genreId)[0].name
        });
    };

    useEffect(() => {
        dispatch(getAllMovie({page: data.page}))
    }, [dispatch, data.page]);

    const firstPage = () => {
        dispatch(setPage({page: 1}));

    };

    const prevPage = () => {
        if (data.page <= data.total_pages) {
            dispatch(setPage({page: data.page - 1}));
        }
    };

    const nextPage = () => {
        if (data.page <= 500) {
            dispatch(setPage({page: data.page + 1}));
        }
    };

    const lastPage = () => {
            dispatch(setPage({page: 500}));

    };


    return (
        <div>
            <div>
                {status === "fulfilled" ? <div>

                        <div className={css.moviesPages}>
                            {movies.map(movie => <Movie key={movie.id} movie={movie} getMovieGenres={getMovieGenres}/>)}
                        </div>

                        <div className={css.buttons}>
                            <button className={css.button} disabled={data.page - 1 < 1} onClick={()=>firstPage()}>
                                First page
                            </button>
                            <button className={css.button} disabled={data.page - 1 < 1} onClick={() => prevPage()}>
                                Prev page
                            </button>
                            {data.page}of{data.total_pages}
                            <button className={css.button} disabled={data.page + 1 >= 500} onClick={() => nextPage()}>
                                Next page
                            </button>
                            <button className={css.button} disabled={data.page >= 500} onClick={() => lastPage()}>
                                Last page
                            </button>

                        </div>

                    </div> :
                    <div>Loading</div>
                }
            </div>
            <Outlet/>
        </div>
    );
};

export {MoviesPage};

