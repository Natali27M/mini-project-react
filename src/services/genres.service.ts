import {axiosService} from "./axios.service";
import {urlsMovie} from "../configs/urls";

export  const genresService={
    getAll: () => axiosService.get<any>(urlsMovie.genre),
    getGenres: (genre_id:number,page:number) => axiosService.get<any>(urlsMovie.movie + `?with_genres=${genre_id}`,
        {params:{page}})
}


