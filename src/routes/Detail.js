import { Link } from "react-router-dom";
import {useParams} from "react-router-dom";
import {useState,useEffect} from "react";

function Detail(){
  const {id} = useParams();

  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
      )
    ).json();
    console.log(json)
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
    <h1>Detail</h1>
    <Link to="/">asd</Link>
    </div>
  );
}
export default Detail;