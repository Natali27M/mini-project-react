import {axiosService} from "./axios.service";
import {urlsMovie} from "../configs/urls";

export const movieService={
    getAll: (page:number) => axiosService.get<any>(urlsMovie.movie,{params:{page}})
}