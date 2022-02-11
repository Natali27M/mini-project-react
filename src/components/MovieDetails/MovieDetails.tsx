import {useAppDispatch, useAppSelector} from "../../hooks";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {getAllMovie} from "../../store";

const MovieDetails = () => {
    const stateMovie = useAppSelector(state => state.movie);
   const movieDetails=stateMovie.movies
    console.log(movieDetails)

    const dispatch = useAppDispatch();

    const {id} = useParams();
console.log(id)

    useEffect(() => {
        if(id){
            // @ts-ignore
            dispatch(getAllMovie(id))
            console.log(id)
        }
    }, []);

    // const {id} = useParams();
    // const [user,setUser] = useState(null);
    //
    // useEffect(() => {
    //     userService.getById(id).then(value => setUser({...value}));
    // }, [id]);

    return (
        <div>
            {}
        </div>
    );
};

export {MovieDetails};