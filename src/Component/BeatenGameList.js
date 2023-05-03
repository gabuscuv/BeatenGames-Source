import '../App.css';
import '../index.css';
import React, { createElement } from 'react';


class BeatenGameList extends React.Component {

  state = {
    allowNSFW: false,
    gameList: {},
    output: []
  }

  componentDidMount() {
    this.requestData()
  }

  requestData = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `${window.location.protocol}//${window.location.hostname}:${window.location.port}/misc/gamelist.json`, true)
    xhr.onload = () => {
      if (xhr.status === 200) {
        const gameList = JSON.parse(xhr.response)
        this.props.callback(Object.keys(gameList))

        this.setState({
          gameList
        })
      }
    }
    xhr.send(null)
  }

  static getPlataformLogo = (plataform) => {
    switch (plataform) {
      case "PC": return "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Steam_logo.svg/320px-Steam_logo.svg.png";
      case "PC (VR)": return "https://cdn.cloudflare.steamstatic.com/steam/apps/250820/header.jpg?t=1574723957";
      case "PC (Oculus)": return "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Logo_Oculus_horizontal.svg/320px-Logo_Oculus_horizontal.svg.png";
      case "PC (XGP)": return "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/PC_Game_Pass_logo.svg/320px-PC_Game_Pass_logo.svg.png";
      case "PC (itch.io)": return "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Itch.io_logo.svg/320px-Itch.io_logo.svg.png";
      case "PC (Origin)": return "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Origin.svg/320px-Origin.svg.png";
      case "PC (EGS)": return "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Epic_games_store_logo.svg/157px-Epic_games_store_logo.svg.png";
      case "AArcade": return "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Apple-arcade-logo.svg/320px-Apple-arcade-logo.svg.png";
      case "NSW": return "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Nintendo_switch_logo.png/240px-Nintendo_switch_logo.png";
      case "3DS": return "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Nintendo_3ds_logo.svg/320px-Nintendo_3ds_logo.svg.png";
      case "NDS": return "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Nintendo_DS_Logo.svg/320px-Nintendo_DS_Logo.svg.png"
      case "PS4": return "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PlayStation_4_logo_and_wordmark.svg/320px-PlayStation_4_logo_and_wordmark.svg.png";
      case "PS3": return "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/PlayStation_3_logo_%282009%29.svg/320px-PlayStation_3_logo_%282009%29.svg.png";
      case "PSV": return "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/PlayStation_Vita_logo.svg/320px-PlayStation_Vita_logo.svg.png";
      case "PSP": return "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/PSP_Logo.svg/320px-PSP_Logo.svg.png";
      case "PSX": return "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/PSone_logo.svg/320px-PSone_logo.svg.png";
      case "Wii": return "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Wii.svg/320px-Wii.svg.png";
      case "Stadia": return "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Stadia_logo.svg/320px-Stadia_logo.svg.png";

      default: return "";
    }
  }

  static getStatusCSSClass = (plataform) => {
    switch (plataform) {
      case "Completed": return "gold-text"; // ?
      case "Dropped": return "overlay-red";
      default: return "";
    }

  }

  static getPlataformCSSClass = (plataform) => {
    switch (plataform) {
      case "PC": return "overlay-steam";
      case "PC (EGS)": return "overlay-egs";
      case "PC (VR)": return "overlay-steamvr";
      case "PC (Oculus)": return "overlay-white";
      case "PC (XGP)": return "overlay-PCXGP";
      case "PC (itch.io)": return "overlay-white";
      case "Stadia": return "overlay-stadia";
      case "AArcade": return "overlay-white";
      case "PS4": return "overlay-ps4";
      case "PS3": return "overlay-ps3";
      case "NSW": return "overlay-switch";
      case "PSV": return "overlay-white";
      case "PSP": return "overlay-white";
      case "Wii": return "overlay-wii";
      case "PSX": return "overlay-white";
      case "3DS": return "overlay-white";
      case "NDS": return "overlay-white";
      default: return "overlay-notdefined";
    }

  }

  static getDerivedStateFromProps(currProps, currState) {
    if (!currState.gameList[currProps.yearToList]) { return }
    currState.output = []
    let initialList = currState.gameList[currProps.yearToList].map((element) => {
      if ( ! (currProps.allowNSFW) && element["nsfw"] === 1 ){
        return null;
      }
      return ( 
        <td className={'container ' + (BeatenGameList.getPlataformCSSClass(element["status"]))}>
        <img className={"overlay " + BeatenGameList.getPlataformCSSClass(element["plataform"])} src={BeatenGameList.getPlataformLogo(element["plataform"])} alt={element["plataform"] + " logo"} />
        <img className="Image" alt="" src={element["img"]} />
        <p>{element["name"]}</p>
      </td>
    )
    }
    );

    //currState.output.push(createElement("tr", null, initialList))

    //let f = (output.length / 3);
    if (initialList.length === 0) { return (createElement("tr", null)); }

    let woktmp = [];
    let f = 0;

    for (var i = 0; i < initialList.length; i++) {
      if (f === currProps.rows) {
        currState.output.push(createElement("tr", null, woktmp))
        f = 0
        woktmp = [];
      }
      if(! initialList[i]){continue;}
      woktmp.push(initialList[i])
      f++
    }

    if (woktmp.length !== 0) {
      currState.output.push(createElement("tr", null, woktmp))
    }

    // Temporal fix
    //currProps.callback(Object.keys(currState.gameList))

  }

  render() {
    if (!this.state.gameList) { return (createElement("div", null, "Loading...")); }

    return (createElement("table", null, createElement("tbody", null, this.state.output)))
  }
}

export default BeatenGameList;
