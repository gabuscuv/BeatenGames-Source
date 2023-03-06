import logo from './logo.svg';
import './App.css';
import "react-widgets/styles.css";
import { Combobox } from 'react-widgets'; 
import React, { useState } from 'react';
import BeatenGameList from './Component/BeatenGameList';

// workaround meanwhile is fetching data
let keys = ["2023","2022","2021","2020"]
let rows = 4
/*
 It's not dynamic responsive but It does the work
 But It's a Hack, It should be change soon.
 */
if (visualViewport.width <= 500) {rows = 1;} // Mobile
if ( visualViewport.width > 500 && visualViewport.width <= 810) {rows = 2;} // Tablet-like


function initComboBox(keyslist)
{
  
  keys=(keyslist).reverse()
}

function App() {
  const [year, setYear] = useState(2023);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Combobox name="fieldyear"  defaultValue="2023" data={keys} onChange={(year) => (setYear(year))}></Combobox>
        <BeatenGameList yearToList={year} rows={rows} callback={initComboBox} />
      </header>
    </div>
  );
}

export default App;
