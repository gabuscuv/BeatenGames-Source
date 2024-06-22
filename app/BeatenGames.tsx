"use client";
import logo from "./logo.svg";
import "./App.css";
import "react-widgets/styles.css";
import {Combobox} from "react-widgets";
import {useEffect, useState} from "react";
import BeatenGameList from "./Component/BeatenGameList";
import {game} from "./game";
import {useSearchParams} from "next/navigation";

interface jsonsS {
  GaaS: Array<game>;
  GamesYearly: { [id: string]: Array<game> };
}

export default function BeatenGames() {
  const searchParams = useSearchParams();
  const [year, setYear] = useState(initYear());
  const [keys, setKeys] = useState([
    new Date(Date.now()).getFullYear().toString(),
  ]);
  const [games, setGames] = useState<jsonsS>();

  useEffect(() => {
    fetch(
      `${window.location.protocol}//${window.location.hostname}:${window.location.port}/misc/gamelist.json`,
      {method: "GET"}
    ).then((xhr) => {
      if (xhr.status === 200) {
        xhr.json().then((e) => {
          const gameList: jsonsS = e;
          setKeys(Object.keys(gameList.GamesYearly).reverse());
          setGames(gameList);
        });
      }
    });
  }, []);

  function ChangedYear(year: string) {
    //searchParams.set("year", year);
    setYear(year);
  //  setSearchParams(searchParams);
  }

  function initYear() : string {
    if (searchParams.has("year")) {
      return searchParams.get("year") || '';
    }
    return new Date().getFullYear().toString();
  }

  return (
    <div className="App">
      <header className="App-header">
        <Combobox
          className="Combobox"
          name="fieldyear"
          defaultValue={year?.toString()}
          data={keys}
          onChange={ChangedYear}
        ></Combobox>
        {games === undefined ? (
          <div>Loading</div>
        ) : (
          <BeatenGameList
            gameList={games.GamesYearly[year] || []}
            allowNSFW={searchParams.get("nsfw") === "1"}
          />
        )}
      </header>
    </div>
  );
}
