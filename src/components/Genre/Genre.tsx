import {FC} from "react";
import {Link} from "react-router-dom";

import {IGenre} from "../../interfaces";
import css from "./Genre.module.css";

const Genre:FC<{genre:IGenre}> = ({genre:{name,id}}) => {

    return (
        <div className={css.genres}>
            <div className={css.genre}>
                <Link to={`/genres/${id}`} state={id}>{name}</Link>
            </div>
        </div>
    );
};

export {Genre};