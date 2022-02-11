import {FC, useEffect} from "react";
import {Link} from "react-router-dom";

import {IGenre} from "../../interfaces";

const Genre:FC<{genre:IGenre}> = ({genre:{name,id}}) => {

    return (
        <div>
            <div>
                <Link to={`/genres/${id}`} state={id}>{name}</Link>
            </div>
        </div>

    );
};

export {Genre};