import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "./Hooks/useNowPlayingMovies";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
