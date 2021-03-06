import {NavLink, Outlet} from "react-router-dom";
import useLocalStorage from "use-local-storage";

import css from "./Layout.module.css"

const Layout = () => {
    const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const [theme, setTheme] = useLocalStorage("theme", defaultDark ? "dark" : "light");

    const switchTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light"
        setTheme(newTheme);
    };

    return (
        <div>
            <div className={theme === "light" ? css.header : css.headerDark}>
                <NavLink to="/movies">Movies</NavLink>
                <NavLink to="/genres">Genres</NavLink>
                <button onClick={switchTheme}>
                    Switch to{theme === "light" ? "Dark" : "Light"}Theme
                </button>
            </div>
            <div className={theme === "light" ? css.outlet : css.outletDark}><Outlet/></div>
            <div className={theme === "light" ? css.footer : css.footerDark}>https://api.themoviedb.org</div>
        </div>
    );
};

export {Layout};

