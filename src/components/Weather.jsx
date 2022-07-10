import React from "react";
import { useSelector } from "react-redux";
import Content from "./Content";
import Loading from "./Loading";

function Weather() {
  const items = useSelector((state) => state.weather.items);
  const status = useSelector((state) => state.weather.status);

  const list = items.list;

  const newList = [];

  for (let i = 0; i < list.length; i += 8) {
    newList.push(list.slice(i, i + 8));
  }

  return (
    <>
      <div className="flex m-0 mb-20 bg-orange-200 rounded-full p-2 text-center justify-center text-black uppercase font-bold">
        <h1>Weekly Weather Forecast</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-5 items-center mx-auto gap-12">
        {status === "loading" ? (
          <Loading />
        ) : (
          newList.map((weathers) => {
            const wt = weathers[0];
            return (
              <div key={wt.dt}>
                <Content wt={wt} />
              </div>
            );
          })
        )}
      </div>
    </>
  );
}

export default Weather;
