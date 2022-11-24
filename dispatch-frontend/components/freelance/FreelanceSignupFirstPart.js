import React, { useState, useEffect } from "react";
import Image from "next/image";
import WhiteArrow from "../../public/icons/white-arrow.svg";
import Eye from "../../public/icons/eye.svg";
import EyeSlash from "../../public/icons/eye-slash.svg";

export default function FreelanceSignupFirsPart(props) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div>
      <div className="col-10 mx-auto  form-title">
        <h1 className="roboto500 white text-center mb-5">
          Transmettez votre passion <br className="d-none d-lg-block" /> et
          gagnez de l’argent
        </h1>
        <p className="white roboto300 fs-4">
          Avec Dispatch, nous avez le choix entre attendre un projet si votre
          profil est séléctionné, ou parcourir les offres. Fini les longues
          journées de recherche.
        </p>
        <button className="border-0 background-yellow raleway700 white fw-bold fs-6 py-1 px-3 rounded-pill home-header-btn">
          <span className="pe-2">En savoir plus</span>
          <Image src={WhiteArrow} width={20} alt="Icone d'une flêche" />
        </button>
      </div>
      <form className="col-md-8 col-10 mx-auto row g-4 mt-5">
        <div className="col-xl-6">
          <label className="form-label white fs-5 roboto700">
            Nom <span className="dark-red">*</span>
          </label>
          <br />
          <input
            type="text"
            className=" px-3 py-2 rounded border-0 w-100"
            placeholder="Nom"
          />
        </div>
        <div className="col-xl-6">
          <label className="form-label white fs-5 roboto700">
            Prénom <span className="dark-red">*</span>
          </label>
          <br />
          <input
            type="text"
            className=" px-3 py-2 rounded border-0 w-100"
            placeholder="Prénom"
          />
        </div>
        <div>
          <label className="form-label white fs-5 roboto700">
            Adresse Email <span className="dark-red">*</span>
          </label>
          <br />
          <input
            type="email"
            className=" px-3 py-2 rounded border-0 w-100"
            placeholder="email@email.com"
          />
        </div>
        <div className="">
          <label className="form-label white fs-5 roboto700">
            Mot de passe <span className="dark-red">*</span>
          </label>
          <br />
          <div className="position-relative">
            <input
              type={passwordVisible ? "text" : "password"}
              className="  px-3 py-2 rounded border-0 w-100"
              placeholder="Mot de passe"
            />
            <a
              className="position-absolute end-0 top-50 translate-middle"
              href=""
              onClick={(e) => {
                e.preventDefault();
                setPasswordVisible((prevState) => !prevState);
              }}
            >
              {passwordVisible ? (
                <Image
                  src={EyeSlash}
                  alt="Icone représentant un oeil barré"
                ></Image>
              ) : (
                <Image src={Eye} alt="Icone représentant un oeil"></Image>
              )}
            </a>
          </div>
        </div>
        <button
          className="border-0 background-yellow raleway700 white fw-bold fs-6 py-3 px-4 rounded-pill col-9 col-sm-6 mx-auto  mt-5"
          onClick={props.function}
        >
          <span>Poursuivre l'inscription</span>
        </button>
      </form>
    </div>
  );
}
