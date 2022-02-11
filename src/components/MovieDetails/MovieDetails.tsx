
import {useLocation} from "react-router-dom";
import {useState,useEffect} from "react";


const MovieDetails = () => {
    const {state} = useLocation();
    console.log(state)
    // const [movie, setMovie] = useState(null);
    //
    //
    // useEffect(() => {
    //     if (state) {
    //         setMovie({state})
    //         return
    //     }},[])
//     const stateMovie = useAppSelector(state => state.movie);
//    const movieDetails=stateMovie.movies
//     console.log(movieDetails)
//
//     const dispatch = useAppDispatch();
//
//     const {id} = useParams();
// console.log(id)
//
//     useEffect(() => {
//         if(id){
//             // @ts-ignore
//             dispatch()
//             console.log(id)
//         }
//     }, []);

    // const {id} = useParams();
    // const [user,setUser] = useState(null);
    //
    // useEffect(() => {
    //     userService.getById(id).then(value => setUser({...value}));
    // }, [id]);

    return (
        <div>

        </div>
    );
};

export {MovieDetails};