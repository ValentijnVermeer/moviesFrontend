import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import DirectorBox from './DirectorBox';
import like from "../assets/public/bx_like_1.png";
import dislike from "../assets/public/bx_dislike_1.png";
import DeletePage from './DeletePage';
import { useNavigate } from 'react-router-dom';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [isShownDirector, setIsShownDirector] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const [isShownActor, setIsShownActor] = useState([]);
  const [comments, setComments] = useState([]);
  const [commentLikes, setCommentLikes] = useState([]);
  const [commentDislikes, setCommentDislikes] = useState([]);
  const [comment, setComment] = useState({"movie_id": id});
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
    .get(`${import.meta.env.VITE_SERVER_BASE_URL}/api/movie/${id}`)
    .then(res => {
      setMovie(res.data);
    })
    .catch(e => console.error(e)); 

    axios
    .get(`${import.meta.env.VITE_SERVER_BASE_URL}/api/movies/comments/${id}`)
    .then(res => {
      setComments(res.data);
    })
    .catch(e => console.error(e)); 

  }, []);

  useEffect(() => {
    movie?.starring_actors?.map(actor => {
      isShownActor.push({"id":actor.id,
       "value":false, 
       "first_name":actor.first_name,
       "second_name":actor.second_name,
       "date_of_birth":actor.date_of_birth,
       "photo":actor.photo})
    });
  },[movie])

  useEffect(() => {
    let commentsLikeData = {};
    commentsLikeData = comments.map(comment => {
      return {...commentsLikeData, [comment.id]: false}
    })
    setCommentLikes(commentsLikeData);

    let commentsDislikeData = {};
    commentsDislikeData = comments.map(comment => {
      return {...commentsDislikeData, [comment.id]: false}
    })
    setCommentLikes(commentsDislikeData);
    setTimeout(() => {
			setLoading(false);
	}, 500);

  },[comments])

  const LikeHandler = () => {
    setIsLiked(true);
    axios
    .patch(`${import.meta.env.VITE_SERVER_BASE_URL}/api/movie/like/${id}`)
    .catch(e => console.error(e));
  }  

  const DislikeHandler = () => {
    setIsDisliked(true);
    axios
    .patch(`${import.meta.env.VITE_SERVER_BASE_URL}/api/movie/dislike/${id}`)
    .catch(e => console.error(e));
  }
  
  const ShowActorHandler = (id) =>{
    const newActors = isShownActor.map(actor => {
      if(actor.id === id){
        actor.value = !actor.value;
      }
      return actor;
    })
    setIsShownActor(newActors);
  }
const LikeCommentHandler = (id) => {
  setCommentLikes({...commentLikes, [id]: true});
  axios
  .patch(`${import.meta.env.VITE_SERVER_BASE_URL}/api/comment/like/${id}`)
  .catch(e => console.error(e));
}

const DislikeCommentHandler = (id) => {
  setCommentDislikes({...commentDislikes, [id]:true })
  axios
  .patch(`${import.meta.env.VITE_SERVER_BASE_URL}/api/comment/dislike/${id}`)
  .catch(e => console.error(e));
}

const HandleCommentChange = e => {
  setComment({...comment, [e.target.name]: e.target.value})
  console.log(comment);
}

const handleSubmit = e => {
  e.preventDefault();
  axios
    .post(`${import.meta.env.VITE_SERVER_BASE_URL}/api/comments`, comment)
    .then(res => {
      setComment({"movie_id":id, "author":'', "content":''});
      axios
      .get(`${import.meta.env.VITE_SERVER_BASE_URL}/api/movies/comments/${id}`)
      .then(res => {
        setComments(res.data);
      })
      .catch(e => console.error(e)); 
    })
    .catch(e => console.error(e));
};

  return (
    <>
    {deleteConfirmation?<DeletePage id={id} setDeleteConfirmation={setDeleteConfirmation} />:<></>}
    {loading?<div class="flex items-center justify-center min-h-screen p-5 bg-black-900 min-w-screen">
				<div class="flex space-x-2 animate-pulse">
						<div class="w-3 h-3 bg-orange-500 rounded-full"></div>
						<div class="w-3 h-3 bg-orange-500 rounded-full"></div>
						<div class="w-3 h-3 bg-orange-500 rounded-full"></div>
				</div>
				</div>:
    <div className="bg-zinc-950 flex flex-col items-stretch pb-11">
        <div className="self-center flex w-full max-w-[1140px] flex-col mt-12 px-5 items-start max-md:max-w-full max-md:mt-10">
          <div className="w-[507px] max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[43%] max-md:w-full max-md:ml-0">
                <div className="flex grow flex-col items-center max-md:mt-10">
                  <div className="flex-col overflow-hidden relative flex aspect-[0.6666666666666666] w-[200px] items-stretch pb-12">
                    <img
                      loading="lazy"
                      srcSet={movie.poster}
                      className="absolute h-full w-full object-cover object-center inset-0" />  
                  </div>
                  <div className='mt-3'>
                    <button type="button" 
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    onClick={() => setDeleteConfirmation(!deleteConfirmation)}>Delete</button>
                    <button type="button" 
                    className="focus:outline-none text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-orange-900"
                    onClick={() => navigate(`/movies/${id}/update`)}>Update</button>
                </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[57%] ml-5 max-md:w-full max-md:ml-0">
                <div className="flex flex-col items-stretch mt-4 max-md:mt-10">
                  <div className="text-left text-white text-2xl font-semibold">
                    {movie.title}
                  </div>
                  <div className="text-left text-orange-500 text-sm font-medium mt-7">
                    <span className="font-semibold text-gray-50 pe-1">Name: </span>{" "}
                    <span className="text-orange-500">{movie.title} </span>
                  </div>
                  <div className="text-left text-orange-500 text-sm font-medium whitespace-nowrap mt-5">
                    <span className="font-semibold text-gray-50 pe-1">Time: </span>{" "}
                    <span className="text-orange-500">
                      {movie.length_minutes} minutes
                    </span>
                  </div>
                  <div className="text-left text-orange-500 text-sm font-medium mt-5">
                    <span className="font-semibold text-gray-50 pe-1">Year: </span>
                    <span className="text-orange-500">{movie.year} </span>
                  </div>
                  <div className="text-left text-orange-500 text-sm font-medium mt-5">
                    <span className="font-semibold text-gray-50 pe-1">Genres:</span>{" "}
                    <span className="text-orange-500">{movie?.genres?.length > 0 ? movie.genres.map((genre, index) => {
                      if (movie.genres.length - 1 === index) {
                        return genre;
                      } else {
                        return genre + ', ';
                      }
                    }) : <p>.</p>} </span>
                  </div>
                  <div className="text-left text-orange-500 text-sm font-medium mt-3">
                    <span className="font-semibold text-gray-50 pe-1">Director:</span>{" "}
                    <span className="text-orange-500"><Link
                      key={movie?.director?.id}
                      to={`/artists/${movie?.director?.id}`}
                      onMouseEnter={() => setIsShownDirector(true)}
                      onMouseLeave={() => setIsShownDirector(false)}
                      className='text-orange-500 underline underline-offset-1'>
                      {movie.director?.first_name} {movie.director?.second_name}</Link></span>
                    {isShownDirector && (<DirectorBox
                      id={movie.director.id}
                      firstName={movie.director.first_name}
                      secondName={movie.director.second_name}
                      dateOfBirth={movie.director.date_of_birth}
                      photo={movie.director.photo} />)}
                  </div>
                  <div className="text-left text-orange-500 text-sm font-medium mt-3">
                    <span className="font-semibold text-gray-50 pe-1">Cast:</span>{" "}
                    <span className="text-orange-500">{movie?.starring_actors?.length > 0 ? movie.starring_actors.map((actor, index) => (
                      <Link
                      key={actor?.id}
                      to={`/artists/${actor?.id}`}
                        onMouseEnter={() => ShowActorHandler(actor.id)}
                        onMouseLeave={() => ShowActorHandler(actor.id)}
                        className='text-orange-500 underline underline-offset-1'>
                        {actor?.first_name} {actor?.second_name}, </Link>
                    )) : <p>.</p>}</span>
                    {isShownActor?.length > 0 ? isShownActor.map(obj => {
                      if (obj.value) {
                        return <DirectorBox
                          id={obj.id}
                          firstName={obj.first_name}
                          secondName={obj.second_name}
                          dateOfBirth={obj.date_of_birth}
                          photo={obj.photo} />;
                      } else {
                        return (<p></p>);
                      }
                    }) : <p></p>}
                  </div>
                  <div className="flex items-stretch mt-5">
                    <img
                      loading="lazy"
                      src={isLiked ? like
                        : "https://cdn.builder.io/api/v1/image/assets/TEMP/a3e8338b88c719d03234f30e672633bf231a958264e5734c3cec62992fe563fc?"}
                      className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full me-2"
                      onClick={LikeHandler} />
                    <div className="text-white text-sm font-semibold my-auto me-2">
                      {isLiked ? movie.likes + 1 : movie.likes}
                    </div>
                    <img
                      loading="lazy"
                      src={isDisliked ? dislike :
                        "https://cdn.builder.io/api/v1/image/assets/TEMP/038682105ccaff18828d31b92ed447b2117b0a74bfdc0e10919d3f27444262d3?"}
                      className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full me-2"
                      onClick={DislikeHandler} />
                    <div className="text-white text-sm font-semibold self-center my-auto me-2">
                      {isDisliked ? movie.dislikes + 1 : movie.dislikes}
                    </div>
                  </div>
                  <div className="flex items-stretch justify-between gap-4 mt-5">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-left text-white text-2xl font-semibold self-stretch whitespace-nowrap mt-9">
            About the movie
          </div>
          <div className="text-left text-white text-sm leading-6 tracking-wide self-stretch mt-4 max-md:max-w-full">
            {movie.description}
          </div>
          <div className="flex gap-3 mt-14 items-start max-md:mt-10">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fefc3103646ff08da60b910363a0d07745df585caba8a648cd1c9b8600160a5f?"
              className="aspect-square object-contain object-center w-6 fill-red-600 overflow-hidden shrink-0 max-w-full mt-2" />
            <div className="text-white text-2xl font-medium leading-8 self-stretch grow whitespace-nowrap">
              Comments
            </div>
          </div>
          <div className="bg-zinc-900 self-stretch flex flex-col items-stretch mt-7 pl-12 pr-20 py-8 rounded-md max-md:max-w-full max-md:px-5">
            <div className="flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap max-md:mr-1">
              <div className="self-center flex grow basis-[0%] flex-col items-stretch my-auto max-md:max-w-full">
                <div className="text-white text-opacity-50 text-xs max-md:max-w-full">
                  <div className=" p-4 rounded-lg max-w-xl mx-auto">
                    <form>
                      <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2" for="name">
                          Name
                        </label>
                        <input
                          className="appearance-none border border-orange-900 bg-zinc-900 rounded w-full py-2 px-3  leading-tight focus:outline-none focus:border-orange-500"
                          id="name" type="text" placeholder="Enter your name" name='author' value={comment.author}
                          onChange={HandleCommentChange} />
                      </div>
                      <div className="mb-4">
                        <label className="block  font-medium mb-2" for="comment">
                          Comment
                        </label>
                        <textarea rows="4"
                          className="appearance-none border border-orange-900 bg-zinc-900 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:border-orange-500"
                          id="comment" placeholder="Express your opinion" onChange={HandleCommentChange} name='content' value={comment.content}></textarea>
                      </div>
                      <div className="flex justify-end">
                        <button
                          className="bg-orange-500 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                          type="button" onClick={handleSubmit}>Send</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col-reverse justify-between gap-5 mt-8 items-start max-md:max-w-full max-md:flex-wrap max-md:mr-1">
              {/* here we stopped */}
              {comments.length > 0 ? comments.map(comment => (
                <div className="self-stretch flex grow basis-[0%] flex-col mt-1.5 max-md:max-w-full">
                  <div className="flex justify-between">
                    <div className='flex gap-3 self-start items-start'>
                      <div className="justify-center text-white font-medium leading-8 grow whitespace-nowrap">
                        {comment.author}
                      </div>
                      <div className="text-orange-500 text-xs leading-8 self-stretch whitespace-nowrap">
                        {comment.publish_date} days ago
                      </div>
                    </div>
                    <div className="flex items-stretch mt-1">
                      <img
                        loading="lazy"
                        src={commentLikes[comment.id] ? like
                          : "https://cdn.builder.io/api/v1/image/assets/TEMP/a3e8338b88c719d03234f30e672633bf231a958264e5734c3cec62992fe563fc?"}
                        className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full me-2"
                        onClick={() => LikeCommentHandler(comment.id)} />
                      <div className="text-white text-sm font-semibold my-auto me-2">
                        {commentLikes[comment.id] ? comment.likes + 1 : comment.likes}
                      </div>
                      <img
                        loading="lazy"
                        src={commentDislikes[comment.id] ? dislike :
                          "https://cdn.builder.io/api/v1/image/assets/TEMP/038682105ccaff18828d31b92ed447b2117b0a74bfdc0e10919d3f27444262d3?"}
                        className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full me-2"
                        onClick={() => DislikeCommentHandler(comment.id)} />
                      <div className="text-white  text-sm font-semibold self-center my-auto me-2">
                        {commentDislikes[comment.id] ? comment.dislikes + 1 : comment.dislikes}
                      </div>
                    </div>
                  </div>
                  <div className="text-start text-orange-500 text-sm self-stretch mt-4 max-md:max-w-full">
                    {comment.content}{" "}
                  </div>
                </div>
              )) : <p></p>}
            </div>
          </div>
        </div>{" "}
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/69f63c6a40264333b18013a2376313d9abdfd5ac26df710f384ca11c9e02fa57?"
          className="aspect-[1440] object-contain object-center w-full stroke-[1px] stroke-stone-900 overflow-hidden mt-24 max-md:max-w-full max-md:mt-10" />{" "}
      </div>}</>
    
  )
}

export default MovieDetails