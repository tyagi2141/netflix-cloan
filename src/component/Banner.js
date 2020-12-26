import React, { useState, useEffect } from "react";
import axios from "../constant/axios";
import requests from "../constant/request";
import "../../src/HeaderBanner.css";
const base_url = "https://image.tmdb.org/t/p/original";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOrignal);

      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  //console.warn("rahultyagi", `url(${base_url}${movie.backdrop_path})`);

  function truncateString(str, num) {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }

  return (
    <div>
      <header
        className="banner"
        style={{
          backgroundImage: `url(${base_url}${movie?.backdrop_path})`,
          backgroundPosition: " center center",
          backgroundSize: "cover",
        }}
      >
        <div className="banner_content">
          <h1 className="banner_title">
            {movie?.name || movie?.title || movie?.original_name}
          </h1>
          <div className="banner_buttons">
            <button className="banner_button">play</button>
            <button className="banner_button">my list</button>
          </div>
          <h1 className="banner_discription">
            {truncateString(movie?.overview, 150)}
          </h1>
        </div>
        <div className="banner_fade_bottom"></div>
      </header>
    </div>
  );
};

export default Banner;
