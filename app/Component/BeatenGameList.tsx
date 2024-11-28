import "../App.css";
import imageData from "./imageData.json";
import { game } from "../game";
import Image from "next/image";

interface ImageData {
  logos: { [id: string]: string };
  classes: { [id: string]: string };
}

const _ImageData: ImageData = imageData;

function getStatusCSSClass(plataform: string): string {
  switch (plataform) {
    case "Completed":
      return "gold-text"; // ?
    case "Dropped":
      return "overlay-red";
    default:
      return "";
  }
}

function getPlataformLogo(plataform: string): string {
  return _ImageData.logos[plataform];
}

function getPlataformCSSClass(plataform: string): string {
  if (_ImageData.classes[plataform]) {
    return _ImageData.classes[plataform];
  }
  return "overlay-notdefined";
}

export function BeatenGameList(props: {
  gameList: Array<game>;
  allowNSFW: boolean;
}) {
  if (!props.gameList === undefined || props.gameList.length === 0) {
    return;
  }
  return (
    <div className="m-2 gap-4 grid grid-cols-1 lg:grid-cols-4">
      {props.gameList
        .filter((e) => e.nsfw == false || (e.nsfw && props.allowNSFW))
        .map((element) => (
          <div
            key={element.name}
            className={"items-center flex flex-col  py-5" + getPlataformCSSClass(element["status"])}
          >
            <div className=" flex flex-col relative">
              <div className="flex space-x-2 overlay">
                {element["plataform"].split(',').map((e, index, array) =>
                  <Image
                    key={element.name+"plataform"+e+"icon"}
                className={
                  " " + getPlataformCSSClass(e)
                }
                height={200/array.length}
                width={200/array.length}
                src={getPlataformLogo(e)}
                alt={e + " logo"}
              />)}
                </div>
              
              <Image
                className="Image object-scale-down"
                height={400}
                width={200}
                alt=""
                src={element["img"]}
              />
            </div>
            <p className="items-center text-center">{element["name"]}</p>
          </div>
        ))}
    </div>
  );
}

export default BeatenGameList;
