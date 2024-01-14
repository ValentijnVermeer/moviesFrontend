import React, { useEffect, useState } from "react";
import axios from "axios";

const NewMovieMovie = () => {
  const [genres, setGenres] = useState([]);
  const [lengthMinutes, setLetMinutes] = useState(null)

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_BASE_URL}/api/genres`)

      .then((res) => {
        setGenres(res.data);
      })

      .catch((error) => console.error("Error fetching genres:", error));
  }, []);

  const handleGenreSelect = (e) => {
    console.log("something");
  };

  const HandleCommentChange = (e) => {
    console.log("something");
  };

  const handleSubmit = async (e) => {
    console.log("something");
  };

  const handleAgeRatingChange = () => {
    console.log("handleAgeRatingChange");
  };

  return (
    <div className="bg-zinc-950 flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap max-md:mr-1">
      <div className="self-center flex grow basis-[0%] flex-col items-stretch my-auto max-md:max-w-full">
        <div className="text-white text-opacity-50 text-xs max-md:max-w-full">
          <div className=" p-4 rounded-lg max-w-xl mx-auto">
            <form>
              <div className="mb-4">
                <label className="block text-white font-medium mb-2" for="name">
                  Title
                </label>
                <input
                  className="appearance-none border border-orange-500 bg-zinc-900 rounded w-full py-2 px-3   focus:outline-none focus:border-orange-500"
                  id="name"
                  type="text"
                  placeholder="Enter movie title"
                  name="title"
                  onChange={HandleCommentChange}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-white font-medium mb-2"
                  for="comment"
                >
                  Movie description
                </label>
                <textarea
                  rows="4"
                  className="appearance-none border border-orange-500 bg-zinc-900 rounded w-full py-2 px-3  focus:outline-none focus:border-orange-500"
                  id="comment"
                  placeholder="Express your opinion"
                  onChange={HandleCommentChange}
                  name="content"
                  value="Enter a movie description..."
                ></textarea>
              </div>

              <div className="mb-4">
                <label className="block text-white font-medium mb-2" for="name">
                  Release year
                </label>
                <select
                  className="appearance-none border border-orange-500 bg-zinc-900 rounded w-full py-2 px-3  focus:outline-none focus:border-orange-500"
                  id="grid-state"
                >
                  <option>Select a year</option>
                  <option>1990</option>
                  <option>1991</option>
                  <option>1992</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-white font-medium mb-2" for="name">
                  Small movie poster (URL)
                </label>
                <input
                  className="appearance-none border border-orange-500 bg-zinc-900 rounded w-full py-2 px-3   focus:outline-none focus:border-orange-500"
                  id="name"
                  type="text"
                  placeholder="Enter movie title"
                  name="title"
                  onChange={HandleCommentChange}
                />
              </div>

              <div className="mb-4">
                <label className="block text-white font-medium mb-2" for="name">
                  Large movie poster (URL)
                </label>
                <input
                  className="appearance-none border border-orange-500 bg-zinc-900 rounded w-full py-2 px-3   focus:outline-none focus:border-orange-500"
                  id="name"
                  type="text"
                  placeholder="Enter movie title"
                  name="title"
                  onChange={HandleCommentChange}
                />
              </div>

              <div className="mb-4">
                <label className="block text-white font-medium mb-2" for="name">
                  Length (in minutes)
                </label>
                <input
                  className="appearance-none border border-orange-500 bg-zinc-900 rounded w-full py-2 px-3   focus:outline-none focus:border-orange-500"
                  id="name"
                  type="text"
                  placeholder="Length (in minutes)"
                  name="title"
                  onChange={HandleCommentChange}
                />
              </div>

              <fieldset className="flex max-w-md flex-row gap-4">
                <legend className="block text-white font-medium mb-2">
                  Age restriction
                </legend>
                <div className="flex font-small items-center gap-2">
                  <input
                    type="radio"
                    className="font-small text-orange-500 border-white"
                    id="+0"
                    name="countries"
                    value="0"
                    onChange={handleAgeRatingChange}
                  />
                  <label htmlFor="+0" className="text-white text-l">
                    +0
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="+6"
                    name="countries"
                    value="6"
                    onChange={handleAgeRatingChange}
                    className="font-small text-orange-500 border-white"
                  />
                  <label htmlFor="+6" className="text-white text-l">
                    +6
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="+12"
                    name="countries"
                    value="12"
                    onChange={handleAgeRatingChange}
                    className="font-small text-orange-500 border-white"
                  />
                  <label htmlFor="+12" className="text-white text-l">
                    +12
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="+16"
                    name="countries"
                    value="16"
                    onChange={handleAgeRatingChange}
                    className="font-small text-orange-500 border-white"
                  />
                  <label htmlFor="+16" className="text-white text-l">
                    +16
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="+18"
                    name="countries"
                    value="18"
                    onChange={handleAgeRatingChange}
                    className="font-small text-orange-500 border-white"
                  />
                  <label htmlFor="+18" className="text-white text-l ">
                    +18
                  </label>
                </div>
              </fieldset>

              <div>
                <div className="mb-2 block text-white">
                  <label
                    htmlFor="countries"
                    value="Select the genre"
                    className="text-white text-xl"
                  />
                </div>
                <select 
                  multiple
                  id="genres"
                  required
                  onChange={handleGenreSelect}
                  className="custom-select-val appearance-none bg-none border border-orange-500 bg-zinc-900 rounded w-full py-2 px-3   focus:outline-none focus:border-orange-500"
                >
                  {genres.map((genre) => (
                    <option key={genre.id} value={genre.id}>
                      {genre.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex justify-end">
                <button
                  className="bg-orange-500 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewMovieMovie;
