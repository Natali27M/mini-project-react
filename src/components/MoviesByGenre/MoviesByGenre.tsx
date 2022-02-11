import {FC, useEffect} from "react";
import {useParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {getAllGenres, getAllMovie, setPage, setPageGenre} from "../../store";

const MoviesByGenre:FC= () => {
    const {moviesByGenre,status} = useAppSelector(state => state.genres);

    const dispatch = useAppDispatch();

    const {genre_id}=useParams()

    useEffect(() => {
        if(genre_id){
            // @ts-ignore
            dispatch(getAllGenres({genre_id}))
        }
    }, [genre_id]);

    const {data} = useAppSelector(state => state.genres);

    useEffect(() => {
        // @ts-ignore
        dispatch(getAllGenres({page: data.page}))
    }, [data.page]);


    const prevPage = () => {
        if (data.page <= data.total_pages) {
            dispatch(setPageGenre({page: data.page - 1}));
            console.log(data.page)
        }
    };

    const nextPage = () => {
        if (data.page >= 1) {
            dispatch(setPageGenre({page: data.page + 1}));
            console.log(data.page)
        }
    };
    //
    // useEffect(() => {
    //     dispatch(getAllMovie({page: data.page}))
    // }, [dispatch, data.page]);
    //
    // const prevPage = () => {
    //     if (data.page <= data.total_pages) {
    //         dispatch(setPage({page: data.page - 1}));
    //     }
    // };
    //
    // const nextPage = () => {
    //     if (data.page <= data.total_pages) {
    //         dispatch(setPage({page: data.page + 1}));
    //     }
    // };

    return (
        <div>
            {status === "fulfilled" ?<div>
                <div>
                    {moviesByGenre.map(movieByGenre => <div key={movieByGenre.id}>{movieByGenre.original_title}</div>)}
                </div>
                <button disabled={data.page - 1 < 1} onClick={() => prevPage()}>Prev</button>
            {data.page}of{data.total_pages}
                <button disabled={data.page + 1 > data.total_pages} onClick={() => nextPage()}>Next</button>
            </div>:
                <div>Loading</div>
            }
        </div>
    );
};

export {MoviesByGenre};