import {FC} from "react";
import {Routes, Route} from "react-router-dom";

import {MoviesPage} from "./pages";

const App: FC = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MoviesPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
