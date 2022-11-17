import React from "react";
import Image from "next/image";
import Link from "next/link";
import BlueArrow from "../../public/icons/blue-arrow.svg";
import WhiteArrow from "../../public/icons/white-arrow.svg";

export default function () {
  return (
    <div>
      <div className="home-header ">
        <div className="col-10 mx-auto">
          <h1 className="roboto700 white">
            Trouvez votre freelance idéal en un seul clic
          </h1>
        </div>
        <div className="col-10 mx-auto mb-5 ">
          <h5 className="white roboto300">
            Dispatch vous aide à réaliser vos projets grâce à un réseau d'expert
            de l'audiovisuel.
          </h5>
        </div>
        <div className="mt-5 d-flex flex-column flex-sm-row col-10 mx-auto pt-5 align-items-center">
          <Link
            href="/"
            className="col-6 col-md-4 col-lg-3 col-xl-2 mb-5 mb-sm-0"
          >
            <button className="border-0 background-white raleway700 blue fw-bold fs-6 py-3 px-4 rounded-pill home-header-btn ">
              <span className="pe-2"> J'ai un projet</span>
              <Image src={BlueArrow} width={20} alt="Icone d'une flèche" />
            </button>
          </Link>
          <Link href="/" className="col-6 col-md-4 col-lg-3 col-xl-2 ">
            <button className="border-0 background-violet raleway700 white fw-bold fs-6 py-3 px-4 rounded-pill home-header-btn">
              <span className="pe-2"> Je suis freelance</span>
              <Image src={WhiteArrow} width={20} alt="Icone d'une flèche" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
