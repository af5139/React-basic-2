import { Link } from "react-router-dom";
import {useParams} from "react-router-dom";
import {useState,useEffect} from "react";

function Detail(){
  const {id} = useParams();
  const [movie,setMoive] = useState([]);

  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
      )
    ).json();
      setMoive(json.data.movie);           
  }

  useEffect(() => {
    getMovies();
  }, []);
    // console.log(movie.movie);
    // console.log(movie.movie.background_image);
    console.log(movie)
  return (
    <div>
    <h1>Detail</h1>
    <Link to="/">home</Link>
    <hr></hr>
    <ul>
      <li>
        {movie.title}
      </li>
    </ul>
    <img src={movie.medium_cover_image} alt="asd"/>
    </div>
  );
}
export default Detail;