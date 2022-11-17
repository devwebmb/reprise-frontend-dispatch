import React from "react";
import Link from "next/link";
import Image from "next/image";
import TempsIcon from "../../public/icons/Icon-temps.svg";
import DevisIcon from "../../public/icons/Devis-Vectors.svg";
import PaiementIcon from "../../public/icons/Paiement-icon.svg";
import AssistanceIcon from "../../public/icons/Assistance-icon.svg";
import RedArrow from "../../public/icons/red-arrow.svg";

export default function AlgosSection() {
  return (
    <div className="algos-section-home background-paleblue py-5">
      <h2 className="black roboto700 col-10 mx-auto fw-bold pb-5">
        Notre algorithme vous sélectionne les freelances <br />
        les plus adaptés à vos projets
      </h2>
      <div className="col-8 mx-auto">
        <div className="col-12 d-flex flex-column flex-lg-row">
          <div className=" col-lg-6">
            <Image src={TempsIcon} alt="Icone" />
            <h5 className="black roboto500 fw-bold pb-2 pt-3">
              Gagnez du temps facilement
            </h5>
            <p className="black roboto400  col-lg-10 pb-3">
              Disatch offre une séléction minutieuse de profils adaptés à votre
              projets en un instant. Définissez vos conditions et nous nous
              occupons du reste.
            </p>
          </div>
          <div className=" col-lg-6">
            <Image src={DevisIcon} alt="Icone" />
            <h5 className="black roboto500 fw-bold pb-2 pt-3">
              Un devis rapide
            </h5>
            <p className="black roboto400 col-lg-10 pb-3">
              Une fois votre freelance trouvé, vous obtenez votre contact et
              votre devis en quelques instant pour commencer votre projet dans
              les plus brefs délais.
            </p>
          </div>
        </div>
      </div>
      <div className="col-8 mx-auto">
        <div className="col-12 d-flex flex-column flex-lg-row">
          <div className="col-lg-6">
            <Image src={PaiementIcon} alt="Icone" />
            <h5 className="black roboto500 fw-bold pb-2 pt-3">
              Des paiements sûrs et sécurisés
            </h5>
            <p className="black roboto400   col-lg-10 pb-3">
              Vous ne payez que ce que vous avez estimé, rien de plus. Votre
              paiement s’effectue via une plateforme sécurisée et ne se débloque
              pas avant votre validation et votre satisfaction
            </p>
          </div>
          <div className="col-lg-6">
            <Image src={AssistanceIcon} alt="Icone" />
            <h5 className="black roboto500 fw-bold pb-2 pt-3">
              Une assistante 24h/24
            </h5>
            <p className="black roboto400  col-lg-10 pb-3">
              Vous avez besoin d’aide ou de renseignements ? Notre équipe est
              disponible pour vous.
            </p>
          </div>
          <div className="col-6"></div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <Link href="/">
          <button className="border-0 background-white raleway700 white fw-bold fs-6 py-3 px-4 rounded-pill shadow">
            <Image src={RedArrow} alt="Icone" />
            <span className="pe-2 red"> En savoir plus</span>
          </button>
        </Link>
      </div>
    </div>
  );
}
