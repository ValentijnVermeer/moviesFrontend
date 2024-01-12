import React from "react";
import {
  Button,
  Checkbox,
  Label,
  TextInput,
  Textarea,
  Radio,
} from "flowbite-react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
  const [genres, setGenres] = useState([""]);
  const [inputValue, setInputValue] = useState("");
  const [starring_actors, setStarringActors] = useState([""]);

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${import.meta.env.VITE_SERVER_BASE_URL}/api/movies`, {
        title,
        year,
        description,
        poster,
        big_poster,
        length_minutes,
        age_rating,
        director,
        genres,
        starring_actors,
      })
      .then((res) => navigate("/"))
      .catch((e) => console.error(e));
  };

  const handleSetStarringActors = (value, index) => {
    const newActors = [...starring_actors];
    newActors[index] = value;

    if (index === starring_actors.length - 1) {
      newActors.push("");
    }

    setStarringActors(newActors);
  };

  return (
    <>
      <h2>Add a new movie</h2>
      <form onSubmit={handleSubmit} className="flex max-w-md flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="" value="Title" />
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
            <Label htmlFor="" value="Release year" />
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
            <Label htmlFor="comment" value="Movie description" />
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
            <Label htmlFor="" value="Small movie poster (URL)" />
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
            <Label htmlFor="" value="Large movie poster (URL)" />
          </div>
          <TextInput
            type="text"
            value={big_poster}
            onChange={(e) => setBigPoster(e.target.value)}
            required
          />
        </div>

        <fieldset className="flex max-w-md flex-row gap-4">
          <legend className="mb-4">Age restriction</legend>
          <div className="flex items-center gap-2">
            <Radio id="+0" name="countries" value="0" />
            <Label htmlFor="+0">+0</Label>
          </div>
          <div className="flex items-center gap-2">
            <Radio id="+6" name="countries" value="6" />
            <Label htmlFor="+6">+6</Label>
          </div>
          <div className="flex items-center gap-2">
            <Radio id="+12" name="countries" value="12" />
            <Label htmlFor="+12">+12</Label>
          </div>
          <div className="flex items-center gap-2">
            <Radio id="+16" name="countries" value="16" />
            <Label htmlFor="+16">+16</Label>
          </div>
          <div className="flex items-center gap-2">
            <Radio id="+18" name="countries" value="18" disabled />
            <Label htmlFor="+18">+18</Label>
          </div>
        </fieldset>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="" value="Director" />
          </div>
          <TextInput
            type="text"
            value={director}
            onChange={(e) => setDirector(e.target.value)}
            required
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="" value="Length (in minutes)" />
          </div>
          <TextInput
            type="text"
            value={length_minutes}
            onChange={(e) => setLenghtMinutes(e.target.value)}
            required
          />
        </div>

        <div>
          {starring_actors.map((actor, index) => (
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor={`director-${index}`}
                  value={`Actor ${index + 1}`}
                />
              </div>
              <TextInput
                type="text"
                value={actor}
                onChange={(e) => handleSetStarringActors(e.target.value, index)}
                required={index !== starring_actors.length - 1}
              />
            </div>
          ))}
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="" value="Genre" />
          </div>
          <TextInput
            type="text"
            value={genres}
            onChange={(e) => setGenres(e.target.value)}
            required
          />
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </>
  );
};

export default NewMovie;
