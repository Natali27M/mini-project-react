import {FC} from "react";
import {Routes, Route} from "react-router-dom";

import {MoviesPage,GenresPage} from "./pages";
import {Layout} from "./components";

const App: FC = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<MoviesPage/>}/>
                    <Route path={'/movies'} element={<MoviesPage/>}/>
                    <Route path={'/genres'} element={<GenresPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
