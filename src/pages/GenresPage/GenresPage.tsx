import {FC, useEffect} from "react";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {Genre} from "../../components";
import {getAllMovie} from "../../store";
import {Outlet} from "react-router-dom";

const GenresPage: FC = () => {
    const {genres} = useAppSelector(state => state.movies);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAllMovie({page: 1}))
    }, [dispatch]);

    return (
        <div>
            <div>
                {genres.map(genre=><Genre key={genre.id} genre={genre}/>)}
            </div>
            <div>
                <Outlet/>
            </div>
        </div>

    );
};

export {GenresPage};

