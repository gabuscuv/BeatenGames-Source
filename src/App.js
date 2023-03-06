import logo from './logo.svg';
import './App.css';
import "react-widgets/styles.css";
import { Combobox } from 'react-widgets'; 
import React, { createElement, useState } from 'react';

const fs = {
  "2023": [
    {
      "name": "13 Sentinels: Aegis Rim",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co2uls.jpg"
    },
    {
      "name": "Dimension Tripper Neptune: Top Nep",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co5gw7.jpg"
    }
  ],
  "2022": [
    {
      "name": "A Short Hike",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co4czp.jpg"
    },
    {
      "name": "Atelier Ryza 2",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co2hbf.jpg"
    },
    {
      "name": "Blue Reflection: Second Light",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co3ww1.jpg"
    },
    {
      "name": "Celeste",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co3byy.jpg"
    },
    {
      "name": "Doom Eternal",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co3p5n.jpg"
    },
    {
      "name": "Dweller's Empty Path",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co2u0q.jpg"
    },
    {
      "name": "Severed Steel",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co3p7f.jpg"
    },
    {
      "name": "Splatoon 2: Octo Expansion",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co21ji.jpg"
    },
    {
      "name": "The Adventure of Nayu",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co2omg.jpg"
    },
    {
      "name": "The Curious Tale of the Stolen Pets",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co1m5v.jpg"
    },
    {
      "name": "The Great Ace Attorney 2: Resolve",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co2ym3.jpg"
    }
  ],
  "2021": [
    {
      "name": "Beat Saber",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co20ux.jpg"
    },
    {
      "name": "Gris",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co1qv5.jpg"
    },
    {
      "name": "NieR Replicant ver.1.22474487139...",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co5h0n.jpg"
    },
    {
      "name": "Persona 5 Royal",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co1nic.jpg"
    },
    {
      "name": "Sea of Solitude",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co1m4m.jpg"
    },
    {
      "name": "The Great Ace Attorney: Adventures",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co2ym2.jpg"
    },
    {
      "name": "Undertale",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co2855.jpg"
    }
  ],
  "2020": [
    {
      "name": "Atelier Ayesha",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co4hml.jpg"
    },
    {
      "name": "Atelier Ryza",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co20uc.jpg"
    },
    {
      "name": "Borderlands 2",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co20tn.jpg"
    },
    {
      "name": "Bravely Second: End Layer",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co26hd.jpg"
    },
    {
      "name": "DOOM 3: BFG",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co3ovt.jpg"
    },
    {
      "name": "Drakengard 3",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co25oy.jpg"
    },
    {
      "name": "Gylt",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co2qad.jpg"
    },
    {
      "name": "Half-Life: Alyx",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co1tq3.jpg"
    },
    {
      "name": "Hellblade: Senua's Sacrifice",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co2l7l.jpg"
    },
    {
      "name": "Rabi-Ribi",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co4eck.jpg"
    },
    {
      "name": "River City Girls",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co2r5w.jpg"
    },
    {
      "name": "SuperHot VR",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co24uu.jpg"
    },
    {
      "name": "The Last Guardian",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co271e.jpg"
    },
    {
      "name": "The Last Of Us Remastered",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co5zks.jpg"
    },
    {
      "name": "The Wolf Among Us",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co1rcy.jpg"
    },
    {
      "name": "VA-11 Hall-A: Cyberpunk Bartender Action",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co2z8k.jpg"
    },
    {
      "name": "Zero Time Dilemma",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co260k.jpg"
    }
  ],
  "2019": [
    {
      "name": "Atelier Lulua: The Scion of Arland",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co2phb.jpg"
    },
    {
      "name": "Battle Chef Brigade",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co5fv9.jpg"
    },
    {
      "name": "Escaped Chasm",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co2igg.jpg"
    },
    {
      "name": "Gears of War: Ultimate Edition",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co246i.jpg"
    },
    {
      "name": "Metro Exodus",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co1iuj.jpg"
    },
    {
      "name": "Momodora III",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co21ct.jpg"
    },
    {
      "name": "Momodora: Reverie Under the Moonlight",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co2xu6.jpg"
    },
    {
      "name": "Moss",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co1i1j.jpg"
    },
    {
      "name": "Ori and the Blind Forest: Definitive Edition",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co2s0m.jpg"
    },
    {
      "name": "Pokémon Link",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co5stj.jpg"
    },
    {
      "name": "Splatoon 2",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co25zh.jpg"
    },
    {
      "name": "Touhou Kobuto V: Burst Battle",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co23gm.jpg"
    },
    {
      "name": "Travis Strikes Again: No More Heroes",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co3tnf.jpg"
    },
    {
      "name": "Valkyria Chronicles 4",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co20r6.jpg"
    },
    {
      "name": "Wolfenstein II",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co21c5.jpg"
    }
  ],
  "2018": [
    {
      "name": "Atelier Meruru",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co4hmv.jpg"
    },
    {
      "name": "Atelier Totori",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co2vw7.jpg"
    },
    {
      "name": "Bayonetta 2",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/qocwccspgmgamvhaplgp.jpg"
    },
    {
      "name": "Blue Reflection",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co4aux.jpg"
    },
    {
      "name": "Dragon's Crown Pro",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co2gal.jpg"
    },
    {
      "name": "Firewatch",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co1m35.jpg"
    },
    {
      "name": "Gravity Rush 2",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co2q9u.jpg"
    },
    {
      "name": "Odin Sphere: Leifthrasir",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co25ur.jpg"
    },
    {
      "name": "Rise of the Tomb Raider",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co1rqa.jpg"
    },
    {
      "name": "Senran Kagura: Peach Beach Splash",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co3maa.jpg"
    },
    {
      "name": "Shantae and the Pirate's Curse",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co4b1u.jpg"
    },
    {
      "name": "Shantae: Half-Genie Hero Ultimate Edition",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co3rka.jpg"
    },
    {
      "name": "Shantae: Risky's Revenge",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co49xa.jpg"
    },
    {
      "name": "Tetris with Cardcaptor Sakura: Eternal Heart",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co4otl.jpg"
    },
    {
      "name": "Valkyria Chronicles",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/bvmjjiorjpcclmdorauw.jpg"
    }
  ],
  "2017": [
    {
      "name": "AKIBA'S TRIP: Undead & Undressed",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co2pes.jpg"
    },
    {
      "name": "Atelier Rorona Plus",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co2vvz.jpg"
    },
    {
      "name": "Bravely Default",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co25nj.jpg"
    },
    {
      "name": "Cinderella Escape!",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co3n5p.jpg"
    },
    {
      "name": "Corpse Party",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co1s68.jpg"
    },
    {
      "name": "Doom",
      "img": ""
    },
    {
      "name": "Muramasa: The Demon Blade",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co1nc7.jpg"
    },
    {
      "name": "Out There Somewhere",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co2iqg.jpg"
    },
    {
      "name": "Senran Kagura 2: Deep Crimson",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co3s8j.jpg"
    },
    {
      "name": "Tomb Raider",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co1rbu.jpg"
    },
    {
      "name": "Wolfenstein: The Old Blood",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co21et.jpg"
    }
  ],
  "2016": [
    {
      "name": "999",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co2rmv.jpg"
    },
    {
      "name": "Batman: Arkham Knight",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co1nh1.jpg"
    },
    {
      "name": "D4: Dark Dreams Don't Die",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co4wg0.jpg"
    },
    {
      "name": "Fez",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co1rd9.jpg"
    },
    {
      "name": "Ghost Trick: Phantom Detective",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co2yj9.jpg"
    },
    {
      "name": "Gravity Rush",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co5tgy.jpg"
    },
    {
      "name": "Half-Life 2: Lost Coast",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co25r5.jpg"
    },
    {
      "name": "Hotline Miami 2: Wrong Number",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co3wf6.jpg"
    },
    {
      "name": "Life is Strange",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co1r8e.jpg"
    },
    {
      "name": "Metro: Last Light Redux",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co20bk.jpg"
    },
    {
      "name": "Phoenix Wright: Ace Attorney - Dual Destinies",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co5z8o.jpg"
    },
    {
      "name": "Phoenix Wright: Ace Attorney - Spirit of Justice",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co5z95.jpg"
    },
    {
      "name": "Professor Layton vs. Phoenix Wright: Ace Attorney",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co25vf.jpg"
    },
    {
      "name": "Remember Me",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co2h9u.jpg"
    },
    {
      "name": "Senran Kagura Burst",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co3rpt.jpg"
    },
    {
      "name": "Senran Kagura: Estival Versus",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co2r9p.jpg"
    },
    {
      "name": "Senran Kagura: Shinovi Versus ",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co2hgv.jpg"
    },
    {
      "name": "Shovel Knight",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co1p9i.jpg"
    },
    {
      "name": "Virtue's Last Reward",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co260l.jpg"
    }
  ],
  "2015": [
    {
      "name": "Batman: Arkham Origins",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co1nmd.jpg"
    },
    {
      "name": "Bioshock Infinite",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co2n12.jpg"
    },
    {
      "name": "Blade Kitten",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co2lav.jpg"
    },
    {
      "name": "Child of Light",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co21q2.jpg"
    },
    {
      "name": "Dengeki Bunko: Fighting Climax",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co60q0.jpg"
    },
    {
      "name": "Metro 2033 Redux",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co2e1s.jpg"
    },
    {
      "name": "Transistor",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co1pi1.jpg"
    },
    {
      "name": "Valiant Hearts: The Great War",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co25zo.jpg"
    }
  ],
  "2014": [
    {
      "name": "Bastion",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co1qlj.jpg"
    },
    {
      "name": "Batman: Arkham Asylum",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co1voj.jpg"
    },
    {
      "name": "Batman: Arkham City",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co1voh.jpg"
    },
    {
      "name": "Bayonetta",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co1p92.jpg"
    },
    {
      "name": "Bioshock",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co2mli.jpg"
    },
    {
      "name": "Bioshock 2",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co2mlj.jpg"
    },
    {
      "name": "Cave Story+",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co2380.jpg"
    },
    {
      "name": "Counter-Strike: Condition Zero - Deleted Scenes",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co1tx4.jpg"
    },
    {
      "name": "Fairy Bloom Freesia",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co2y5u.jpg"
    },
    {
      "name": "Hotline Miami",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co1vqp.jpg"
    },
    {
      "name": "Mirror's Edge",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co5gbw.jpg"
    },
    {
      "name": "No More Heroes: Heroes' Paradise",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co2xf7.jpg"
    },
    {
      "name": "Portal 2",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co1rs4.jpg"
    },
    {
      "name": "Red Dead Redemption",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co2lcv.jpg"
    },
    {
      "name": "SkullGirls",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co3j91.jpg"
    },
    {
      "name": "Spec Ops: The Line",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co2acb.jpg"
    },
    {
      "name": "To the Moon",
      "img": "http://images.igdb.com/igdb/image/upload/t_cover_big/co25yv.jpg"
    }
  ]
}

function getYearsAbleToList()
{
  return Object.keys(fs).reverse();
}

function RenderList({yearToList})
{ 
  if (! fs[yearToList]){return} 
  let initialList = fs[yearToList].map(element=> <td><img className="Image" src={element["img"]}></img><p>{element["name"]}</p></td>)
  //let f = (output.length / 3);
  if(initialList.length == 0) {return(createElement("table", null));}
  let output = [];
  let woktmp = [];
  let f = 0;

  for (var i=0; i < initialList.length;i++)
  {
    if(f == 4)
    {
      output.push(createElement("tr", null, woktmp))
      f=0
      woktmp = [];
    }
    woktmp.push(initialList[i])
    f++
  }

  if(woktmp.length != 0)
  {
    output.push(createElement("tr", null, woktmp))
  }

  return(createElement("table", null, createElement("tbody",null,output)))
}

function App() {
  const [year, setYear] = useState(2023);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Combobox name="fieldyear"  defaultValue="2023" data={getYearsAbleToList()} onChange={(year) => (setYear(year))}></Combobox>
        <RenderList yearToList={year} />
      </header>
    </div>
  );
}

export default App;
