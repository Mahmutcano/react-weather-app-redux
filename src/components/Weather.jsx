import React from "react";
import { useSelector } from "react-redux";
import Content from "./Content";
import Loading from "./Loading";

function Weather() {
  // Redux State Managament
  const items = useSelector((state) => state.weather.items);
  const status = useSelector((state) => state.weather.status);

  // İnitialState Redux && Fetch Api Array Operations
  const list = items.list;

  const newList = [];

  for (let i = 0; i < list.length; i += 8) {
    newList.push(list.slice(i, i + 8));
  }

  return (
    <>
      <div className="rounded-full text-center items-center justify-center text-black uppercase font-bold">
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-5 items-center mx-auto gap-12 pt-20">
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
