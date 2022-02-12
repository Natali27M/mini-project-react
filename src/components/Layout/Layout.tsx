import {NavLink, Outlet} from "react-router-dom";

import css from "./Layout.module.css"

const Layout = () => {

    return (
        <div>
            <div className={css.header}>
                <NavLink to="/movies">Movies</NavLink>
                <NavLink to="/genres">Genres</NavLink>
            </div>
            <div className={css.outlet}><Outlet/></div>
            <div className={css.footer}>https://api.themoviedb.org</div>
        </div>
    );
};

export {Layout};