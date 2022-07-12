import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../firebase";
import { logout as logoutHandle } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Weather from "../components/Weather";
import toast from "react-hot-toast";

const Home = () => {
  // UseNavigate React Router
  const navigate = useNavigate();
  // React Redux
  const dispatch = useDispatch();

  // Redux User İnfo
  const { user } = useSelector((state) => state.auth);

  // Logout Function
  const handleLogout = async () => {
    await logout();
    dispatch(logoutHandle());
    navigate("/login", {
      replace: true,
    });
    toast.success("Checked Out");
  };

  const isApiGet = useSelector((state) => state.weather.isApiGet);
  // Rendering Page Components
  if (user) {
    return (
      <>
        <div className="flex items-center justify-center mx-auto">
          <div className="flex items-center mx-10 h-full">
            {isApiGet ? <Weather /> : <Header />}
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="absolute text-center top-2 right-2 bg-teal-700 hover:bg-teal-900 border-teal-700 hover:border-teal-900 text-sm border-4 text-white py-1 px-2 rounded"
          type="submit"
        >
          Logout
        </button>
      </>
    );
  }
  return (
    <div>
      <div className="grid items-center justify-center text-center mx-auto gap-4">
        <Link
          to="/register"
          className="flex-shrink-0 disabled:opacity-50 bg-teal-700 hover:bg-teal-900 border-teal-700 hover:border-teal-900 text-sm border-4 text-white py-1 px-2 rounded"
        >
          Register
        </Link>
        <Link
          to="/login"
          className="flex-shrink-0 disabled:opacity-50 bg-teal-700 hover:bg-teal-900 border-teal-700 hover:border-teal-900 text-sm border-4 text-white py-1 px-2 rounded"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Home;
