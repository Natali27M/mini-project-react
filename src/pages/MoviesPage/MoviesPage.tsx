import {FC, useEffect} from "react";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {getAllMovie} from "../../store";
import {Movie} from "../../components/Movie";

const MoviesPage:FC = () => {

    const {movies} = useAppSelector(state => state.movie);
    const dispatch = useAppDispatch();

    useEffect(()=>{
        dispatch(getAllMovie())
    },[dispatch])
    return (
        <div>
            {movies.map(movie=><Movie key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {MoviesPage};