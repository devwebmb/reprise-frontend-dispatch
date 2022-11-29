import React from "react";
import Navbar from "../../components/navbar/PrincipalNavbar";

export default function index() {
  return (
    <div className="qui-sommes-nous">
      <Navbar />
      <div className="content">
        <div className="col-9 mx-auto content">
          <h1 className="roboto700 white lh-base pb-5">
            Notre objectif : <br /> Donner aux freelances une opportunité
            enrichissante à la hauteur de ses attentes et aux clients une
            séléction adaptée selon ses besoins et critères.
          </h1>
          <ul className="white roboto500">
            <li className="pb-4">
              DISPATCH est une plateforme interactive mettant en avant la
              relation entre freelances et clients. Notre principale conviction
              est de ne pas reproduire l’erreur des autres plateformes pour les
              freelances et clients. Dispatch s’inspire des autres plateformes
              déjà crées et trouve une solution aux problèmes récurrents : Ne
              pas être noyé sous la demande
            </li>
            <li className="pb-4">
              DISPATCH trouvera le meilleur freelance pour le client et
              s’occupera aussi le plus possible de rassembler des projets via
              d’autres sites d’offres d’emploi pour les publier sur le site.
            </li>
            <li >
              DISPATCH regroupe tous les métiers de l’audiovisuel en premier
              lieu : réalisation, montage, cadrage, étalonnage, son etc. Et
              aussi tout le domaine du graphisme (création logo, charte
              graphique cahier des charges, motion design…) Ainsi des métiers
              liés au développement WEB.
            </li>
          </ul>
          <h2 className="fs-1 roboto700 white py-5">L’histoire de Dispatch</h2>
          <p className="roboto300 white">
            La plateforme a été mise en avant par l’idée d’une personne
            freelance qui n’arrivait pas à trouver de projets sur les autres
            plateformes. Face à la hausse constante de la demande par rapport à
            l’offre il a donc crée Dispatch pour remédier à ce problème et ne
            premier lieu inscrire tout son réseau pour permettre à son entourage
            professionnel d’accéder à des projets
          </p>
          <p className="fs-1 text-center white roboto700 pt-5">
            Dispatch est avant tout une plateforme interactive !
          </p>
        </div>
      </div>
    </div>
  );
}
