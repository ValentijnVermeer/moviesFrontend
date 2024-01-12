import React from "react";
import { Route, Routes } from "react-router-dom";
import Movies from "./Movies";
import NewMovie from "./NewMovie";
import MovieDetails from "./MovieDetails";
import UpdateMovie from "./UpdateMovie";

const Main = () => {
  return (
    <div className="bg-zinc-950">
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/movies/new" element={<NewMovie />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/movies/:id/update" element={<UpdateMovie />} />
      </Routes>
    </div>
  );
};

export default Main;
