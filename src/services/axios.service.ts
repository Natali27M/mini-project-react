import axios from "axios";
import baseURL from "../configs/urls/urls";

export const axiosService = axios.create({
    baseURL,
    headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZTE3YmYwNThkMDZkYmQ5OWYxNTZlZDAxN2Y1NDNiNCIsInN1YiI" +
            "6IjYxZmU4OGJlY2Y0YjhiMDBkZGQyZDcwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kXlTznRDxzvPjDheo5" +
            "z658i1RauHvseyKSH92ZtLPF4"
    }
});
