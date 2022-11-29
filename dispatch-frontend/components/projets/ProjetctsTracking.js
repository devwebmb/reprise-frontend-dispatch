import React from "react";
import Image from "next/image";
import BgImg from "../../public/images/design/bg-vague-suivi-projets.png";

export default function ProjetctsTracking() {
  return (
    <div className="projets-tracking background-palepink zindex-2">
      <div className="position-relative  zindex5">
        <div className="w-100 h-100 position-absolute zindex-1">
          <Image
            src={BgImg}
            layout="responsive"
            alt="image de background"
            className="h-100"
          />
        </div>
        <div className="py-5 ">
          <div className="col-6 mx-auto pb-5 background-transparent ">
            <h1 className="roboto700 white text-center">Suivi de projets </h1>
            <div className="d-flex justify-content-evenly py-5">
              <button className=" roboto700 white px-4 py-3 rounded border-0 shadow background-pink ">
                Projet terminé : <span>1</span>
              </button>
              <button className="roboto700 white px-4 py-2 rounded border-0 shadow background-pink">
                Projet en cours : <span>1</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-8 mx-auto shadow radius25 p-4 background-white">
        <h4 className="roboto600 black mb-4">Projets en cours : </h4>
        <div className="d-flex">
          <div className="col-3 roboto500 black fs-4">Vidéo d’animation</div>
          <div className="col-6"></div>
        </div>
      </div>
    </div>
  );
}
