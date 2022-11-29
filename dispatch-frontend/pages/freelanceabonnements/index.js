import React from "react";
import Navbar from "../../components/navbar/PrincipalNavbar";
import Image from "next/image";
import Link from "next/link";
import RightArrow from "../../public/icons/arrow-right.svg";

export default function index() {
  return (
    <div className="abonnements-freelance">
      <Navbar />
      <div className="content col-xl-9 col-10 mx-auto">
        <h1 className="roboto700 white pb-5">
          Obtenez Dispatch + et bénéficier d’une offre exclusive auprès des
          prestataires
        </h1>
        <h2 className="roboto700 white fs-1 pb-5">
          Choisissez votre abonnement{" "}
        </h2>
        <div className="col-lg-10 mx-auto d-flex justify-content-between py-5 flex-column flex-md-row">
          <div className="col-xl-4 col-md-5 col-10 mx-auto  background-yellow rounded shadow d-flex flex-column py-5 mb-5 mb-md-0">
            <span className="raleway400 black text-center pb-4">ANNUEL OR</span>
            <span className="raleway700 black text-center pb-4">
              200 euros par an
            </span>
            <button className="raleway400 col-9 py-1 background-grey mx-auto rounded-pill border-0 black shadow btn-abonnements">
              Démarrer l’abonnement&nbsp; <Image src={RightArrow} />
            </button>
          </div>
          <div className="col-xl-4 col-md-5 col-10 mx-auto background-grey rounded shadow d-flex flex-column py-5">
            <span className="raleway400 black text-center pb-4">
              MENSUEL ARGENT
            </span>
            <span className="raleway700 black text-center pb-4">
              20 euros par mois
            </span>
            <button className="raleway400 col-9 py-1 background-yellow mx-auto rounded-pill border-0 black shadow btn-abonnements">
              Démarrer l’abonnement&nbsp; <Image src={RightArrow} />
            </button>
          </div>
        </div>
        <div className="col-lg-10 mx-auto text-center white roboto500 py-5">
          ***L’abonnement se renouvelle automatiquement au début de chaque mois.
          Aucun engagement n’est requis. Vous pouvez d’onc l’annuler à tout
          moment. Les offres ne sont disponible qu’aux personnes disposant d’une
          compte sur Dispatch et ne peut être utilisé que pour un seul compte***{" "}
          <br />
          <span className="fw-bold">
            <Link href={"/"}>Voir les Conditions Générales</Link>{" "}
          </span>
        </div>
        <div className="col-lg-10 mx-auto background-white rounded shadow mt-5">
          <div className="px-5 py-4">
            <h3 className="black roboto700 pb-4">Foire aux Questions : </h3>
            <h4 className="roboto500 black pb-1 ">
              Quels sont les avantages de l’abonnement ?
            </h4>
            <p className="black roboto300 pb-2">
              Avec l’abonnement Dispatch +, votre profil est mis en avant les
              résultats de recherche mais vous bénéficiez surtout d’aucun frais
              de commission. Pratique pour une mission particulièrement
              bénéfique pour vous.{" "}
            </p>
            <h4 className="roboto500 black pb-1 ">
              Si je ne prends pas d’abonnement, ai-je accès à moins de projet ?
            </h4>
            <p className="black roboto300 pb-2">
              Non. La sélection du profil s’effectue en premier lieu par vos
              compétences et les recherches du client. Ce n’est que si deux
              profils sont identiques que l’utilisateur abonné sera choisi.
            </p>
            <h4 className="roboto500 black pb-1 ">
              Pourquoi choisir l’annuel plutôt que le mensuel ?
            </h4>
            <p className="black roboto300 ">
              Avec l’annuel, vous faites des économies. Puisque chaque mission
              sera gratuite au niveau des frais de commissions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
