import {FC} from "react";

import {IGenre} from "../../interfaces";

const Genre:FC<{genre:IGenre}> = ({genre:{name}}) => {
    return (
        <div>
            {name}
        </div>
    );
};

export {Genre};