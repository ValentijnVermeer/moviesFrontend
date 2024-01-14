import React, { useEffect, useState } from "react";
import axios from "axios";

const NewMovieDirector = ({
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
  handleNext,
}) => {

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

  const handlePrevious = () => {
    console.log("handleAgeRatingChange");
  };

  return (
    <div className="bg-zinc-950 flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap max-md:mr-1">
      <div className="self-center flex grow basis-[0%] flex-col items-stretch my-auto max-md:max-w-full">
        <div className="text-white text-opacity-50 text-xs max-md:max-w-full">
          <div className=" p-4 rounded-lg max-w-xl mx-auto">
            <p
              id="top_rated"
              className="text-xl font-bold tracking-tight text-white mb-4"
            >
              Please provide information about the{" "}
              <span className="text-orange-500">director</span>
            </p>
            <form>
              <div className="mb-4">
                <label className="block text-white font-medium mb-2" for="name">
                  Director First Name
                </label>
                <input
                  className="appearance-none border border-orange-500 bg-zinc-900 rounded w-full py-2 px-3   focus:outline-none focus:border-orange-500"
                  id="name"
                  type="text"
                  placeholder="Enter movie title"
                  name="title"
                  value={directorFirstName}
                  onChange={(e) => setDirectorFirstName(e.target.value)}
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-white font-medium mb-2" for="name">
                  Director Last Name
                </label>
                <input
                  className="appearance-none border border-orange-500 bg-zinc-900 rounded w-full py-2 px-3   focus:outline-none focus:border-orange-500"
                  id="name"
                  type="text"
                  placeholder="Enter movie title"
                  name="title"
                  value={directorLastName}
                  onChange={(e) => setDirectorLastName(e.target.value)}
                  required
                />
              </div>

              <div>
                <div className="mb-2 block">
                  <label
                    htmlFor=""
                    className="block text-white font-medium mb-2"
                  >
                    Director Date of Birth (DD/MM/YYYY)
                  </label>
                </div>
                <div className="flex flex-row mb-4">
                  <select
                    className="appearance-none border border-orange-500 bg-zinc-900 rounded w-full py-2 px-3  focus:outline-none focus:border-orange-500"
                    id="grid-state"
                    value={directorDay}
                    onChange={(e) => setDirectorDay(e.target.value)}
                  >
                    <option>Select day</option>
                    <option>01</option>
                    <option>02</option>
                    <option>03</option>
                    <option>04</option>
                    <option>05</option>
                    <option>06</option>
                    <option>07</option>
                    <option>08</option>
                    <option>09</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19</option>
                    <option>20</option>
                    <option>21</option>
                    <option>22</option>
                    <option>23</option>
                    <option>24</option>
                    <option>25</option>
                    <option>26</option>
                    <option>27</option>
                    <option>28</option>
                    <option>29</option>
                    <option>30</option>
                    <option>31</option>
                  </select>
                  <select
                    className="appearance-none border border-orange-500 bg-zinc-900 rounded w-full py-2 px-3  focus:outline-none focus:border-orange-500"
                    id="grid-state"
                    value={directorMonth}
                    onChange={(e) => setDirectorMonth(e.target.value)}
                  >
                    <option>Select month</option>
                    <option>01</option>
                    <option>02</option>
                    <option>03</option>
                    <option>04</option>
                    <option>05</option>
                    <option>06</option>
                    <option>07</option>
                    <option>08</option>
                    <option>09</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                  </select>
                  <select
                    className="appearance-none border border-orange-500 bg-zinc-900 rounded w-full py-2 px-3  focus:outline-none focus:border-orange-500"
                    id="grid-state"
                    value={directorYear}
                    onChange={(e) => setDirectorYear(e.target.value)}
                  >
                    <option>Select year</option>
                    <option>1990</option>
                    <option>1991</option>
                    <option>1992</option>
                  </select>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-white font-medium mb-2" for="name">
                  Director Photo (URL)
                </label>
                <input
                  className="appearance-none border border-orange-500 bg-zinc-900 rounded w-full py-2 px-3   focus:outline-none focus:border-orange-500"
                  id="name"
                  type="text"
                  placeholder="Enter movie title"
                  name="title"
                  value={directorPhoto}
                  onChange={(e) => setDirectorPhoto(e.target.value)}
                  required
                />
              </div>
              <div className="flex justify-between justify-end">
                <button
                  className="bg-orange-500 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={handleBack}
                >
                  Previous
                </button>
                <button
                  className="bg-orange-500 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={handleNext}
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewMovieDirector;
