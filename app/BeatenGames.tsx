"use client";
import logo from "./logo.svg";
import "./App.css";
import "react-widgets/styles.css";
import {Combobox} from "react-widgets";
import {useEffect, useState} from "react";
import BeatenGameList from "./Component/BeatenGameList";
import {game} from "./game";
import {useSearchParams} from "next/navigation";
import {Dropdown} from "flowbite-react";

interface jsonsS {
  VNs: Array<game>;
  GaaS: Array<game>;
  GamesYearly: { [id: string]: Array<game> };
}

enum type {
  Games,
  GaaS,
 // VNs,
  
 }

export default function BeatenGames() {
  const searchParams = useSearchParams();
  const [mode, setMode] = useState<type>(type.Games);
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

  function getGameList(stuff: type): Array<game>
  {
    if (!games) { return []; }
    switch (stuff)
    {
      
      case type.Games: return games.GamesYearly[year];
      /// case type.VNs: return [];
      case type.GaaS: return games.GaaS;
      default: return [];
    }
  }

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
    <div className="App App-header">
      <header className="flex p-5 space-x-5 z-10">
    <Dropdown label={type[mode]} >
          {Object.keys(type).filter(e=> Number.isNaN(Number(e))).map((e, count) =>
            <Dropdown.Item key={"DropdownItem"+e} onClick={()=>setMode(count)}>{e}</Dropdown.Item>)}
        </Dropdown>
        
        {(type.Games === mode && <Combobox
          className="Combobox"
          name="fieldyear"
          defaultValue={year?.toString()}
          data={keys}
          onChange={ChangedYear}
        ></Combobox>)}
        

      </header>
      <main className="">
      {games === undefined ? (
          <div>Loading</div>
        ) : (
          <BeatenGameList
            gameList={getGameList(mode)}
            allowNSFW={searchParams.get("nsfw") === "1"}
          />
        )}
      </main>
    </div>
  );
}
