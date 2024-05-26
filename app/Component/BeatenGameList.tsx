import '../App.css';
import '../index.css';
import React, { createElement } from 'react';
import imageData from './imageData.json';

interface imageData
{
  logos: { [id: string]: { type: string } }
}

class BeatenGameList extends React.Component {

  state = {
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
        const gameList : imageData = JSON.parse(xhr.response)
        this.props.callback(Object.keys(gameList))

        this.setState({
          gameList
        })
      }
    }
    xhr.send(null)
  }

  static getPlataformLogo = (plataform: string) : string => {
    return imageData.logos[plataform];
  }

  static getStatusCSSClass = (plataform: string) => {
    switch (plataform) {
      case "Completed": return "gold-text"; // ?
      case "Dropped": return "overlay-red";
      default: return "";
    }

  }

  static getPlataformCSSClass = (plataform: string) : string => {

    if(imageData.classes[plataform])
    {
      return imageData.classes[plataform];
    }
    return "overlay-notdefined"
  }

  static getDerivedStateFromProps(currProps, currState) {
    if (!currState.gameList[currProps.yearToList]) { return }
    currState.output = []
    let initialList = currState.gameList[currProps.yearToList].map((element) => {
      if (!(currProps.allowNSFW) && element["nsfw"] === 1) {
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
      if (!initialList[i]) { continue; }
      woktmp.push(initialList[i])
      f++
    }

    if (woktmp.length !== 0) {
      currState.output.push(createElement("tr", null, woktmp))
    }

  }

  render() {
    if (!this.state.gameList) { return (createElement("div", null, "Loading...")); }

    return (createElement("table", null, createElement("tbody", null, this.state.output)))
  }
}

export default BeatenGameList;
