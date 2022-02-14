import {FC} from "react";
import {Routes, Route} from "react-router-dom";
import './App.css';

import {MoviesPage,GenresPage} from "./pages";
import {Layout, MovieDetails, MoviesByGenre} from "./components";

const App: FC = () => {

    return (
        <div>
            <Routes>
                <Route path={"/"} element={<Layout/>}>
                    <Route index element={<MoviesPage/>}/>
                    <Route path={"/movies"} element={<MoviesPage/>}/>
                    <Route path={"/movies/:id"} element={<MovieDetails/>}/>
                    <Route path={"/genres"} element={<GenresPage/>}>
                        <Route path={":genre_id"} element={<MoviesByGenre/>}/>
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;

