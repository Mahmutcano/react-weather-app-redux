import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { update, auth } from "../firebase";
import { fetchWeather } from "../redux/weatherSlice";
import Error from "./Error";

function Header() {
  // Redux and Firebase Entegrasyon
  const {user} = useSelector(state => state.auth)
  const [displayName, setDisplayName] = useState(user.displayName || '')

  const dispatch = useDispatch();

  // Redux State Managament
  const status = useSelector((state) => state.weather.status);
  const error = useSelector((state) => state.weather.error);

  // Cityname Submit && Firebase Update Method
  const handleSubmit = async (e) => {
    e.preventDefault();
    await update({
      displayName
    })
    dispatch(fetchWeather(displayName));
    setDisplayName("");
    console.log(auth.currentUser);
  };
  if (status === "failed") {
    return <Error message={error} />;
  }

  return (
    <div className="flex items-center justify-center mx-auto">
      <form className="w-full max-w-sm" onSubmit={handleSubmit}>
        <div className="flex items-center border-b border-teal-500 py-2">
          <input
            className="appearance-none text-teal-800 bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none placeholder-teal-600"
            type="text"
            placeholder="Search for a city"
            onChange={(e) => setDisplayName(e.target.value)}
            aria-label="Full name"
            value={displayName}
          />
          <button
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
          >
            Go
          </button>
        </div>
      </form>
    </div>
  );
}

export default Header;
