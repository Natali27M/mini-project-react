import {FC, useEffect} from "react";
import {useParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {getAllGenres, getAllGenresPage, setGenreId} from "../../store";
import css from "./MovieByGenres.module.css";

const MoviesByGenre: FC = () => {
    const {moviesByGenre, status, genreId} = useAppSelector(state => state.genres);

    const dispatch = useAppDispatch();

    const {genre_id} = useParams()
    dispatch(setGenreId({genre_id}))


    useEffect(() => {
        if (genre_id) {
            // @ts-ignore
            dispatch(getAllGenres({genre_id: genreId, page: 1}))

        }
    }, [dispatch, genre_id]);

    const {data} = useAppSelector(state => state.genres);

    useEffect(() => {
        dispatch(getAllGenresPage({page: data.page}))
    }, [dispatch, data.page]);

    const firstPage = () => {
        // @ts-ignore
        dispatch(getAllGenres({genre_id: genreId,page: 1}));
    };

    const prevPage = () => {
        if (data.page <= data.total_pages) {
            // @ts-ignore
            dispatch(getAllGenres({genre_id: genreId, page: data.page - 1}))
        }
    };

    const nextPage = () => {
        if (data.page >= 1) {
            // @ts-ignore
            dispatch(getAllGenres({genre_id: genreId, page: data.page + 1}))
        }
    };

    const lastPage = () => {
        // @ts-ignore
        dispatch(getAllGenres({genre_id: genreId, page: 500}));

    };

    return (
        <div>
            {status === "fulfilled" ? <div>
                    <div className={css.moviesAll}>
                        {moviesByGenre.map(movieByGenre => <div className={css.movieCard} key={movieByGenre.id}>
                            <img src={`https://image.tmdb.org/t/p/w200${movieByGenre.poster_path}`} alt="original_title"/>
                            <div className={css.information}>
                                <div className={css.originalTitle}>
                                    <h3> {movieByGenre.original_title}</h3>
                                </div>
                                <div className={css.dataAverage}>
                                    <p>{movieByGenre.release_date}</p>
                                    <p>-{movieByGenre.vote_average}-</p>
                                </div>
                                <p>{movieByGenre.overview}</p>
                            </div>
                        </div>)}
                    </div>
                    <div className={css.buttons}>
                        <button className={css.button} disabled={data.page - 1 < 1} onClick={() => firstPage()}>First page
                        </button>
                        <button className={css.button} disabled={data.page - 1 < 1} onClick={() => prevPage()}>Prev</button>
                        {data.page}of{data.total_pages}
                        <button className={css.button} disabled={data.page + 1 >= 500} onClick={() => nextPage()}>Next
                        </button>
                        <button className={css.button} disabled={data.page >= 500} onClick={() => lastPage()}>Last page
                        </button>
                    </div>

                </div> :
                <div>Loading</div>
            }
        </div>
    );
};

export {MoviesByGenre};
