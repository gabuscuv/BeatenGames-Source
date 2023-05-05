import logo from './logo.svg';
import './App.css';
import "react-widgets/styles.css";
import { Combobox } from 'react-widgets';
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom'
import BeatenGameList from './Component/BeatenGameList';


const BeatenGames = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [year, setYear] = useState(initYear());
  const [rows, setRows] = useState(4);
  const [keys, setKeys] = useState(["2023"]);


  var timer;
  function updateRows() {
    if (rows !== 1 && visualViewport.width <= 500) { setRows(1); return } // Mobile
    if (rows !== 2 && visualViewport.width > 500 && visualViewport.width <= 810) { setRows(2); return } // Tablet-like
    if (rows !== 3 && visualViewport.width > 810 && visualViewport.width <= 1000) { setRows(3); return } // Tablet-like
    if (rows !== 4 && visualViewport.width > 1000) { setRows(4); return } // Tablet-like
  }

  window.addEventListener('resize', function (event) {
    if (timer) { clearTimeout(timer) }
    timer = setTimeout(updateRows, 500)
  })

  function initComboBox(keyslist) {

    setKeys((keyslist).reverse())
    updateRows()
  }

  function ChangedYear(year) {
    searchParams.set("year", year);
    setYear(year);
    setSearchParams(searchParams);
  }

  function initYear() {
    if (searchParams.get("year")) {
      return searchParams.get("year");
    }
    return new Date().getFullYear();
  }


  updateRows()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Combobox className='Combobox' name="fieldyear" defaultValue={initYear} data={keys} onChange={ChangedYear}></Combobox>
        <BeatenGameList yearToList={year} rows={rows} allowNSFW={searchParams.get("nsfw") === '1'} callback={initComboBox} />
      </header>
    </div>
  );
}

export default BeatenGames;
