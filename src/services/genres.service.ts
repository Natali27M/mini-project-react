import {axiosService} from "./axios.service";
import {urlsMovie} from "../configs/urls";

export  const genresService={
    getAll: () => axiosService.get<any>(urlsMovie.genre)
}


