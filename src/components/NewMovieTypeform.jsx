import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NewMovieMovie from './NewMovieMovie'
import NewMovieDirector from './NewMovieDirector';
import NewMovieActor from './NewMovieActor';

const NewMovieTypeform = () => {
  const [activeComponent, setActiveComponent] = useState(1);
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

  const handleNext = () => {
    setActiveComponent((prevComponent) =>
      prevComponent < 4 ? prevComponent + 1 : prevComponent
    );
  };

  const handleBack = () => {
    setActiveComponent((prevComponent) =>
      prevComponent > 1 ? prevComponent - 1 : prevComponent
    );
  };

  const movieProps = {
    title,
    year,
    description,
    poster,
    big_poster,
    length_minutes,
    age_rating,
    handleNext,
    setTitle,
    setYear,
    setDescription,
    setPoster,
    setBigPoster,
    setLenghtMinutes,
    setAgeRating,
    genres,
    setGenres,
    selectedGenres,
    setSelectedGenres,
    handleGenreSelect

  }

  const directorProps = {
    directorFirstName,
    directorLastName,
    directorPhoto,
    directorDay,
    directorMonth,
    directorYear,
    setDirectorFirstName,
    setDirectorLastName,
    setDirectorPhoto,
    setDirectorDay,
    setDirectorMonth,
    setDirectorYear,
    handleBack,
    handleNext
  }

  const actorProps = {
    actorFirstName,
    actorLastName,
    actorPhoto,
    actorDay,
    actorMonth,
    actorYear,
    setActorFirstName,
    setActorLastName,
    setActorPhoto,
    setActorDay,
    setActorMonth,
    setActorYear,
    handleBack,
    handleSubmit
  }


  const componentMap = {
    1: <NewMovieMovie {...movieProps} />,
    2: <NewMovieDirector {...directorProps} />,
    3: <NewMovieActor  {...actorProps} />,
  };

  return (
    <>
      <div className="bg-zinc-950 flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap max-md:mr-1">
        <div className="self-center flex grow basis-[0%] flex-col items-stretch my-auto max-md:max-w-full">
          <div className="text-white text-opacity-50 text-xs max-md:max-w-full">
            <div className=" p-4 rounded-lg max-w-xl mx-auto"></div>
            <h2
              id="top_rated"
              className="text-2xl font-bold tracking-tight text-white mb-4"
            >
              Add a new movie
            </h2>
            {componentMap[activeComponent]}
            {/* <div className="levels example">
              <button onClick={handleBack} hidden={activeComponent === 1}>
                Previous
              </button>
              <button
                onClick={handleNext}
                hidden={activeComponent === Object.keys(componentMap).length}
              >
                Next
              </button>
              <button
                onClick={handleNext}
                hidden={activeComponent === 1 || activeComponent === 2}
              >
                Submit
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewMovieTypeform;
