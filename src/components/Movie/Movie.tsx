import {FC} from "react";

import {IMovie} from "../../interfaces";

const Movie:FC<{movie:IMovie}> = ({movie:{original_title, id, poster_path}}) => {
    return (
        <div>
            <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt="original_title"/>
            <p>{original_title}</p>
            <p>{id}</p>
        </div>
    );
};

export {Movie};