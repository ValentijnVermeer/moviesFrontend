import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';


const UpdateMovie = () => {
	const { id } = useParams();
	const [movie, setMovie] = useState({});
	const [genres, setGenres] = useState([]);
	const [update, setUpdate] = useState(false);
	const navigate = useNavigate();
	


	useEffect(() => {
		axios
    .get(`${import.meta.env.VITE_SERVER_BASE_URL}/api/movie/${id}`)
    .then(res => {
      setMovie(res.data);
    })
    .catch(e => console.error(e)); 
	},[])

	useEffect(() => {
		movie.genres?.map(genre => {
			axios
			.get(`${import.meta.env.VITE_SERVER_BASE_URL}/api/genresid/${genre}`)
			.then(res => {
				console.log(res.data[0].id);
				genres.push(res.data[0].id);
			})
			.catch(e => console.error(e)); 
		})
	},[update])


	const HandleMovieChange = e => {
		setMovie({...movie, [e.target.name]: e.target.value})
		console.log(movie);
		setUpdate(true);
	}

	const HandleUpdate = () => {
		const newActors = movie.starring_actors.map(actor => actor.id);
		const newObj = {...movie, "director": movie.director.id, "starring_actors":newActors, "genres":genres}; 
		delete newObj.director_id;
		console.log(newObj);
		if(update){
			axios
    .put(`${import.meta.env.VITE_SERVER_BASE_URL}/api/movie/${id}`, newObj)
		.then(res => {
			navigate(-1);
		})
		.catch(e => console.error(e)); 
		} else {
			navigate(-1);
		}
	}



	return(
		<>
		{Object.keys(movie).length !== 0?
    <div className="bg-zinc-950 flex flex-col items-stretch pb-11">
    <div className="self-center flex w-full max-w-[1140px] flex-col mt-12 px-5 items-start max-md:max-w-full max-md:mt-10">
      <div className="max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[43%] max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col items-center max-md:mt-10">
              <div className="flex-col overflow-hidden relative flex aspect-[0.6666666666666666] w-[200px] items-stretch pb-12">
                <img
                  loading="lazy"
                  srcSet={movie.poster}
                  className="absolute h-full w-full object-cover object-center inset-0" />  
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between gap-6">
            <div className="flex flex-col items-stretch mt-4 max-md:mt-10">
              <div className="text-left text-orange-500 text-sm font-medium mt-7">
                <span className="font-semibold text-gray-50 pe-1">Title: </span>{" "}
                <input
                  className="appearance-none border border-orange-900 mt-2 bg-zinc-900 rounded w-full py-2 px-3  leading-tight focus:outline-none focus:border-orange-500"
                  id="name" type="text" placeholder="Movie Title" name='title' value={movie.title}
                  onChange={HandleMovieChange} />
              </div>
              <div className="text-left text-orange-500 text-sm font-medium mt-7">
                <span className="font-semibold text-gray-50 pe-1">Length in minutes: </span>{" "}
								<input
                  className="appearance-none border border-orange-900 mt-2 bg-zinc-900 rounded w-full py-2 px-3  leading-tight focus:outline-none focus:border-orange-500"
                  id="length_minutes" type="number" placeholder="Movie Length" name='length_minutes' value={movie.length_minutes}
                  onChange={HandleMovieChange} />
              </div>
              <div className="text-left text-orange-500 text-sm font-medium mt-7">
                <span className="font-semibold text-gray-50 pe-1">Year: </span>{" "}
								<input
                  className="appearance-none border border-orange-900 mt-2 bg-zinc-900 rounded w-full py-2 px-3  leading-tight focus:outline-none focus:border-orange-500"
                  id="year" type="number" placeholder="Movie Length" name='year' value={movie.year}
                  onChange={HandleMovieChange} />
              </div>
            </div>
						<div className="flex flex-col items-stretch mt-4 max-md:mt-10">

              <div className="text-left text-orange-500 text-sm font-medium mt-7">
                <span className="font-semibold text-gray-50 pe-1">Rating: </span>{" "}
                <input
                  className="appearance-none border border-orange-900 mt-2 bg-zinc-900 rounded w-full py-2 px-3  leading-tight focus:outline-none focus:border-orange-500"
                  id="rating" type="Number" step={0.1} placeholder="Movie Title" name='rating' value={movie.rating}
                  onChange={HandleMovieChange} />
              </div>
              <div className="text-left text-orange-500 text-sm font-medium mt-7">
							<span className="font-semibold text-gray-50 pe-1">Poster: </span>{" "}
								<input
                  className="appearance-none border border-orange-900 mt-2 bg-zinc-900 rounded w-full py-2 px-3  leading-tight focus:outline-none focus:border-orange-500"
                  id="name" type="text" placeholder="Poster Link" name='poster' value={movie.poster}
                  onChange={HandleMovieChange} />
              </div>
              <div className="text-left text-orange-500 text-sm font-medium mt-7">
							<span className="font-semibold text-gray-50 pe-1">Big Poster: </span>{" "}
								<input
                  className="appearance-none border border-orange-900 mt-2 bg-zinc-900 rounded w-full py-2 px-3  leading-tight focus:outline-none focus:border-orange-500"
                  id="name" type="text" placeholder="Poster Link" name='big_poster' value={movie.big_poster}
                  onChange={HandleMovieChange} />
              </div>
            </div>
          </div>
        </div>
				<div className="text-left text-orange-500 text-sm font-medium mt-7">
							<span className="font-semibold text-gray-50 pe-1">Description: </span>{" "}
								<textarea
                  className="appearance-none border border-orange-900 mt-2 bg-zinc-900 rounded w-full py-2 px-3  leading-tight focus:outline-none focus:border-orange-500"
                  id="name" type="text" placeholder="Movie Length" name='description' value={movie.description}
                  onChange={HandleMovieChange} />
        </div>
				<div className="flex items-center overflow-hidden relative flex aspect-[2] w-[400px] items-stretch mt-3">
          <img
          loading="lazy"
          srcSet={movie.big_poster}
          className="absolute h-full w-full object-cover object-center inset-0" />  
        </div>
				<div className='flex justify-content-end'>
				<button type="button" 
        className="focus:outline-none mt-5 text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-orange-900"
        onClick={HandleUpdate}>Update</button>
				</div>			
      </div>
    </div>{" "}
  </div>:<p></p>}</>);
};

export default UpdateMovie;
