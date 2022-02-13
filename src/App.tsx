import {FC} from "react";
import {Routes, Route} from "react-router-dom";
import useLocalStorage from 'use-local-storage';

import {MoviesPage,GenresPage} from "./pages";
import {Layout, MovieDetails, MoviesByGenre} from "./components";
import './App.css';

const App: FC = () => {
    // const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    //
    // const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
    //
    // const switchTheme = () => {
    //     const newTheme = theme === "light" ? "dark" : "light"
    //     setTheme(newTheme);
    // };

    return (
        <div>
            {/*<button onClick={switchTheme}>Switch to{theme=== "light" ? "Dark" : "Light"}Theme</button>*/}
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


// import {FC} from "react";
// import {Routes, Route} from "react-router-dom";
//
// import {MoviesPage,GenresPage} from "./pages";
// import {Layout, MovieDetails, MoviesByGenre} from "./components";
//
// const App: FC = () => {
//     return (
//         <div>
//             <Routes>
//                 <Route path={"/"} element={<Layout/>}>
//                     <Route index element={<MoviesPage/>}/>
//                     <Route path={"/movies"} element={<MoviesPage/>}/>
//                     <Route path={"/movies/:id"} element={<MovieDetails/>}/>
//                     <Route path={"/genres"} element={<GenresPage/>}>
//                         <Route path={":genre_id"} element={<MoviesByGenre/>}/>
//                     </Route>
//                 </Route>
//             </Routes>
//         </div>
//     );
// }
//
// export default App;
