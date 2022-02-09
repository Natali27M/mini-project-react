import {FC, useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {getAllMovie} from "../../store";
import {Genre} from "../../components";

const GenresPage: FC = () => {
    const {genres} = useAppSelector(state => state.genre);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAllMovie(genres))
    }, [dispatch,genres]);

    return (
        <div>
            {genres.map(genre=><Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {GenresPage};