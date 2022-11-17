import React, { useEffect, useState } from "react";
import Image from "next/image";
import Background from "../../public/images/home/BG_Présentation-Thibault-svg.svg";
import PortraitPhoto from "../../public/images/home/photo-Thibault.jpg";

export default function ThibaultPresentation() {
  useEffect(() => {
    const backgroundHeight = document.getElementById("backgroundHeight");
    const contentHeight = document.getElementById("contentHeight");

    if (backgroundHeight.offsetHeight !== 0) {
      contentHeight.setAttribute(
        "style",
        `height : ${backgroundHeight.offsetHeight}px`
      );
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        contentHeight.setAttribute(
          "style",
          `height : ${backgroundHeight.offsetHeight}px`
        );
      } else if (window.innerWidth <= 768) {
        contentHeight.removeAttribute("style");
      }
    });
  }, []);

  return (
    <div className=" thibault-presentation">
      <div
        className="col-12 d-flex flex-column flex-md-row position-relative "
        id="globalHeight"
      >
        <div
          className="w-100 d-none d-md-block position-absolute"
          id="backgroundHeight"
        >
          <Image
            src={Background}
            layout="responsive"
            width={1920}
            height={1090}
            alt="Background de la section"
          />
        </div>
        <div
          className="col-10 mx-auto d-flex flex-column flex-md-row "
          id="contentHeight"
        >
          <div className="presentation-photo w-50 mx-auto d-md-none">
            <Image
              src={PortraitPhoto}
              layout="responsive"
              width={750}
              height={969}
              alt="Photo de thibault"
            />
          </div>
          <div className="col-md-8 ">
            <p className="roboto400 black presentation-paragraph col-md-10 mx-auto">
              Je suis moi-même freelance et client. <br /> J’ai connu les deux
              phases et leurs problèmes. <br /> Dispatch cherche à concilier ces
              deux partis pour donner au freelance des opportunités
              professionnelles enrichissantes et au prestataire un travail à la
              hauteur de ses attentes.
            </p>
          </div>
          <div className="col-md-4  presentation-photo w-25 d-none d-md-block">
            <Image
              src={PortraitPhoto}
              layout="responsive"
              width={750}
              height={969}
              alt="Photo de thibault"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
