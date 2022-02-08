import {axiosService} from "./axios.service";
import {urlsMovie} from "../configs/urls";
import {IMovie} from "../interfaces";

export const movieService={
    getAll: () => axiosService.get<any>(urlsMovie.movie),
    getById: (movieId: number) => axiosService.get<IMovie>(`/movie/${movieId}`)
}