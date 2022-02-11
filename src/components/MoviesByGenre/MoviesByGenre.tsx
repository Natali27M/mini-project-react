import {FC, useEffect} from "react";
import {useParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {getAllGenres} from "../../store";

const MoviesByGenre:FC= () => {
    const {moviesByGenre} = useAppSelector(state => state.genres);

    const dispatch = useAppDispatch();
    const {id}=useParams()

    useEffect(() => {
        if(id){
            // @ts-ignore
            dispatch(getAllGenres(id))
        }
    }, [id]);

    return (
        <div>
            {moviesByGenre.map(movieByGenre=><div key={movieByGenre.id}>{movieByGenre.original_title}</div>)}
        </div>
    );
};

export {MoviesByGenre};