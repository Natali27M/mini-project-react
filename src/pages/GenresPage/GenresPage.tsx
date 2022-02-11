import {FC} from "react";
import {Outlet} from "react-router-dom";

import {useAppSelector} from "../../hooks";
import {Genre} from "../../components";

const GenresPage: FC = () => {

    const {genres} = useAppSelector(state => state.movie);

    return (
        <div>
            <div>
                {genres.map(genre=><Genre key={genre.id} genre={genre}/>)}
            </div>
            <Outlet/>

        </div>

    );
};

export {GenresPage};

// import {FC} from "react";
// import {Outlet} from "react-router-dom";
//
// import {useAppSelector} from "../../hooks";
// import {Genre} from "../../components";
//
// const GenresPage: FC = () => {
//
//     const {genres} = useAppSelector(state => state.movie);
//
//     return (
//         <div>
//             <div>
//                 {genres.map(genre=><Genre key={genre.id} genre={genre}/>)}
//             </div>
//             <Outlet/>
//
//         </div>
//
//     );
// };
//
// export {GenresPage};
