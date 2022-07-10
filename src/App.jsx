import Weather from "./components/Weather";
import Header from "./components/Header";
import { useSelector } from "react-redux";

function App() {
  const isApiGet = useSelector((state) => state.weather.isApiGet);

  return (
    <div className="bg-teal-300 flex items-center justify-center w-screen h-screen py-10">
      <div className="">
        {isApiGet ? (
          <Weather />
        ) : (
          <div className="flex h-[240px] p-4 rounded-3xl shadow-2xl m-auto bg-gray-200 bg-opacity-96">
            <Header />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
