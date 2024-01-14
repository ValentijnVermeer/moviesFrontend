import React from 'react';
import {
  Button,
  Checkbox,
  Label,
  TextInput,
  Textarea,
  Radio,
  Select,
} from "flowbite-react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DatepickerViewsDecades } from "flowbite-react/lib/esm/components/Datepicker/Views/Decades";
import { Datepicker } from "flowbite-react";
import NewMovieMovie from './NewMovieMovie'
import NewMovieDirector from './NewMovieDirector';
import NewMovieActor from './NewMovieActor';

const NewMovie = () => {
  const [title, setTitle] = useState("");
  // const [author, setAuthor] = useState("");
  const [year, setYear] = useState(null);
  const [description, setDescription] = useState("");
  const [poster, setPoster] = useState("");
  const [big_poster, setBigPoster] = useState("");
  const [length_minutes, setLenghtMinutes] = useState(null);
  const [age_rating, setAgeRating] = useState(null);
  const [director, setDirector] = useState("");
  const [directorFirstName, setDirectorFirstName] = useState("");
  const [directorLastName, setDirectorLastName] = useState("");
  const [directorPhoto, setDirectorPhoto] = useState("");
  const [directorDay, setDirectorDay] = useState("");
  const [directorMonth, setDirectorMonth] = useState("");
  const [directorYear, setDirectorYear] = useState("");

  const [actorFirstName, setActorFirstName] = useState("");
  const [actorLastName, setActorLastName] = useState("");
  const [actorPhoto, setActorPhoto] = useState("");
  const [actorDay, setActorDay] = useState("");
  const [actorMonth, setActorMonth] = useState("");
  const [actorYear, setActorYear] = useState("");

  const [genres, setGenres] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [starring_actors, setStarringActors] = useState([""]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genreIds, setGenreIds] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_BASE_URL}/api/genres`)

      .then((res) => {
        setGenres(res.data);
      })

      .catch((error) => console.error("Error fetching genres:", error));
  }, []);

  const handleGenreSelect = (event) => {
    const selectedOptions = Array.from(event.target.selectedOptions).map(
      (option) => parseInt(option.value, 10)
    );
    setSelectedGenres(selectedOptions);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const selectedIds = genres
      .filter((genre) => selectedGenres.includes(genre.title))
      .map((genre) => genre.id);
    setGenreIds(selectedIds);
    console.log(selectedIds);

    const formattedDateOfBirthDirector = `${directorYear}-${directorMonth}-${directorDay}T23:00:00.000Z`;
    console.log(formattedDateOfBirthDirector);

    const formattedDateOfBirthActor = `${actorYear}-${actorMonth}-${actorDay}T23:00:00.000Z`;
    console.log(formattedDateOfBirthActor);

    try {
      const directorResponse = await axios.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/api/artists`,
        {
          first_name: directorFirstName,
          second_name: directorLastName,
          date_of_birth: formattedDateOfBirthDirector,
          photo: directorPhoto,
        }
      );
      const directorId = directorResponse.data.id;
      console.log(directorId);

      let actorIds = [];
      const actorResponse = await axios.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/api/artists`,
        {
          first_name: actorFirstName,
          second_name: actorLastName,
          date_of_birth: formattedDateOfBirthActor,
          photo: actorPhoto,
        }
      );
      actorIds.push(actorResponse.data.id);
      console.log(actorIds);

      axios.post(`${import.meta.env.VITE_SERVER_BASE_URL}/api/movies`, {
        title,
        year,
        description,
        poster,
        big_poster,
        length_minutes,
        age_rating,
        director: directorId,
        genres: selectedGenres,
        starring_actors: actorIds,
      });
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  // const handleSetStarringActors = (value, index) => {
  //   const newActors = [...starring_actors];
  //   newActors[index] = value;

  //   if (index === starring_actors.length - 1) {
  //     newActors.push("");
  //   }

  //   setStarringActors(newActors);
  // };

	const handleAgeRatingChange = (event) => {
		setAgeRating(event.target.value);
	};

  return (
    <>
    <div className="bg-zinc-950">
      <div className="bg-zinc-950 grow flex-1 flex justify-center items-center">
        <div className="bg-zinc-950 grow text-white flex flex-col justify-center items-center my-10">
          <h2 className="text-2xl font-bold tracking-tight text-white">
            Add a new movie
          </h2>
          <form
            onSubmit={handleSubmit}
            className=" mt-6 text-white flex w-full max-w-6xl flex-col gap-4"
          >
            <div className="flex flex-row gap-7">
              <div className="flex-1">
                <div>
                  <div className="mb-2 block text-white">
                    <Label
                      htmlFor=""
                      value="Title"
                      className="text-xl text-white"
                    />
                  </div>
                  <TextInput
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label
                      htmlFor=""
                      value="Release year"
                      className=" text-xl text-white"
                    />
                  </div>
                  <TextInput
                    type="text"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    required
                  />
                </div>

                <div className="max-w-md">
                  <div className="mb-2 block">
                    <Label
                      htmlFor="comment"
                      value="Movie description"
                      className=" text-xl text-white"
                    />
                  </div>
                  <Textarea
                    id="comment"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    rows={4}
                  />
                </div>

                <div>
                  <div className="mb-2 block">
                    <Label
                      htmlFor=""
                      value="Small movie poster (URL)"
                      className=" text-xl text-white"
                    />
                  </div>
                  <TextInput
                    type="text"
                    value={poster}
                    onChange={(e) => setPoster(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <div className="mb-2 block">
                    <Label
                      htmlFor=""
                      value="Large movie poster (URL)"
                      className="text-xl text-white"
                    />
                  </div>
                  <TextInput
                    type="text"
                    value={big_poster}
                    onChange={(e) => setBigPoster(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                {/* <fieldset className="flex max-w-md flex-row gap-4">
                  <legend className="mb-4 text-xl text-white font-semibold">
                    Age restriction
                  </legend>
                  <div className="flex items-center gap-2">
                    <Radio
                      id="+0"
                      name="countries"
                      value="0"
                      onChange={handleAgeRatingChange}
                    />
                    <Label htmlFor="+0" className="text-white text-xl">
                      +0
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Radio
                      id="+6"
                      name="countries"
                      value="6"
                      onChange={handleAgeRatingChange}
                    />
                    <Label htmlFor="+6" className="text-white text-xl">
                      +6
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Radio
                      id="+12"
                      name="countries"
                      value="12"
                      onChange={handleAgeRatingChange}
                    />
                    <Label htmlFor="+12" className="text-white text-xl">
                      +12
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Radio
                      id="+16"
                      name="countries"
                      value="16"
                      onChange={handleAgeRatingChange}
                    />
                    <Label htmlFor="+16" className="text-white text-xl">
                      +16
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Radio
                      id="+18"
                      name="countries"
                      value="18"
                      onChange={handleAgeRatingChange}
                    />
                    <Label htmlFor="+18" className="text-white text-xl">
                      +18
                    </Label>
                  </div>
                </fieldset> */}

                <div>
                  <div className="mb-2 block">
                    <Label
                      htmlFor=""
                      value="Director First Name"
                      className="text-white text-xl"
                    />
                  </div>
                  <TextInput
                    type="text"
                    value={directorFirstName}
                    onChange={(e) => setDirectorFirstName(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <div className="mb-2 block">
                    <Label
                      htmlFor=""
                      value="Director Last Name"
                      className="text-white text-xl"
                    />
                  </div>
                  <TextInput
                    type="text"
                    value={directorLastName}
                    onChange={(e) => setDirectorLastName(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <div className="mb-2 block">
                    <Label
                      htmlFor=""
                      value="Director Date of Birth (DD/MM/YYYY)"
                      className="text-white text-xl"
                    />
                  </div>
                  <div className="flex flex-row">
                    <TextInput
                      type="text"
                      value={directorDay}
                      onChange={(e) => setDirectorDay(e.target.value)}
                      required
                    />
                    <TextInput
                      type="text"
                      value={directorMonth}
                      onChange={(e) => setDirectorMonth(e.target.value)}
                      required
                    />
                    <TextInput
                      type="text"
                      value={directorYear}
                      onChange={(e) => setDirectorYear(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div>
                  <div className="mb-2 block">
                    <Label
                      htmlFor=""
                      value="Director Photo (URL)"
                      className="text-white text-xl"
                    />
                  </div>
                  <TextInput
                    type="text"
                    value={directorPhoto}
                    onChange={(e) => setDirectorPhoto(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <div className="mb-2 block">
                    <Label
                      htmlFor=""
                      value="Length (in minutes)"
                      className="text-white text-xl"
                    />
                  </div>
                  <TextInput
                    type="text"
                    value={length_minutes}
                    onChange={(e) => setLenghtMinutes(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <div className="mb-2 block">
                    <Label
                      htmlFor=""
                      value="Actor First Name"
                      className="text-white text-xl"
                    />
                  </div>
                  <TextInput
                    type="text"
                    value={actorFirstName}
                    onChange={(e) => setActorFirstName(e.target.value)}
                  />
                </div>

                <div>
                  <div className="mb-2 block">
                    <Label
                      htmlFor=""
                      value="Actor Last Name"
                      className="text-white text-xl"
                    />
                  </div>
                  <TextInput
                    type="text"
                    value={actorLastName}
                    onChange={(e) => setActorLastName(e.target.value)}
                  />
                </div>

                <div>
                  <div className="mb-2 block">
                    <Label
                      htmlFor=""
                      value="Actor Date of Birth (DD/MM/YYYY)"
                      className="text-white text-xl"
                    />
                  </div>
                  <div className="flex flex-row">
                    <TextInput
                      type="text"
                      value={actorDay}
                      onChange={(e) => setActorDay(e.target.value)}
                      required
                    />
                    <TextInput
                      type="text"
                      value={actorMonth}
                      onChange={(e) => setActorMonth(e.target.value)}
                      required
                    />
                    <TextInput
                      type="text"
                      value={actorYear}
                      onChange={(e) => setActorYear(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div>
                  <div className="mb-2 block text-white">
                    <Label
                      htmlFor="countries"
                      value="Select the genre"
                      className="text-white text-xl"
                    />
                  </div>
                  <Select
                    multiple
                    id="genres"
                    required
                    onChange={handleGenreSelect}
                  >
                    {genres.map((genre) => (
                      <option key={genre.id} value={genre.id}>
                        {genre.title}
                      </option>
                    ))}
                  </Select>
                </div>
              </div>
            </div>
            <Button
              type="submit"
              className="text-2xl submit-button-val bg-orange-500"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>



<NewMovieMovie />
<NewMovieDirector />
<NewMovieActor />
</>





  );
};

export default NewMovie;
