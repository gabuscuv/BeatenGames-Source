import logo from './logo.svg';
import './App.css';
import "react-widgets/styles.css";
import { Combobox } from 'react-widgets'; 
import React, { useState } from 'react';
import BeatenGameList from './Component/BeatenGameList';

// workaround meanwhile is fetching data
let keys = ["2023","2022","2021","2020"]

function App() {
  const [year, setYear] = useState(2023);
  const [rows, setRows] = useState(4);
  var timer;
  function updateRows(){
    if ( rows !== 1 && visualViewport.width <= 500 ) {setRows(1);return} // Mobile
    if ( rows !== 2 && visualViewport.width > 500 && visualViewport.width <= 810) {setRows(2);return} // Tablet-like
    if ( rows !== 3 && visualViewport.width > 810 && visualViewport.width <= 1000) {setRows(3);return} // Tablet-like
    if ( rows !== 4 && visualViewport.width > 1000 ) {setRows(4);return} // Tablet-like
  }

  window.addEventListener('resize',function(event){
    if (timer){clearTimeout(timer)}
    timer = setTimeout(updateRows,500)
  })

  function initComboBox(keyslist)
{
  
  keys=(keyslist).reverse()
  setRows(4)

}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Combobox className='Combobox' name="fieldyear"  defaultValue="2023" data={keys} onChange={(year) => (setYear(year))}></Combobox>
        <BeatenGameList yearToList={year} rows={rows} callback={initComboBox} />
      </header>
    </div>
  );
}

export default App;
