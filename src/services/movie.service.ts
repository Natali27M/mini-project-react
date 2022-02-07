import {axiosService} from "./axios.service";
import {urlsMovie} from "../configs/urls";
import {IMovie} from "../interfaces";

export const movieService={
    getAll: () => axiosService.get<IMovie[]>(urlsMovie.movie),
    getById: (movieId: number) => axiosService.get<IMovie>(`/movie/{movie_id}`)
}