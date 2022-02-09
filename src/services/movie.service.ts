import {axiosService} from "./axios.service";
import {urlsMovie} from "../configs/urls";
import {IMovie} from "../interfaces";

export const movieService={
    getAll: (page:number) => axiosService.get<any>(urlsMovie.movie,{params:{page}}),
    getById: (movieId: number) => axiosService.get<IMovie>(`/movie/${movieId}`)
}