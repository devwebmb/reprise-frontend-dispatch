import React, { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import Image from "next/image";
import WhiteArrow from "../../public/icons/white-arrow.svg";
import Eye from "../../public/icons/eye.svg";
import EyeSlash from "../../public/icons/eye-slash.svg";

export default function FreelanceSignupFirsPart(props) {
  const [freelanceData, setFreelanceData] = useState({
    lastname: "",
    firstname: "",
    email: "",
  });

  const [displayPart2, setDisplaypart2] = useState(null);

  const [domaine, setDomaine] = useState(null);

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");

  const {
    register,
    handleSubmit,
    formState,
    formState: { errors },
  } = useForm({ defaultValues: { validationCheck: false } });

  const nextform = (data) => {
    setFreelanceData({
      lastname: data.lastname,
      firstname: data.firstname,
      email: data.email,
    });
    setDisplaypart2(!displayPart2);
  };

  const onSubmit = (data) => {
    axios
      .post(`http://localhost:3060/api/freelance/signup`, {
        email: freelanceData.email,
        password: password,
        lastname: freelanceData.lastname,
        firstname: freelanceData.firstname,
        job: data.job,
        presentation: data.presentation,
        createdAt: new Date(),
      })
      .then((data) => {
        console.log(data);
      });
  };

  /*validation password*/
  const passwordHasValidLength = password.length >= 8 && password.length <= 50;
  const passwordHasLowercaseLetter = /[a-z]/.test(password);
  const passwordHasUppercaseLetter = /[A-Z]/.test(password);
  const passwordHasSpecialCharacter =
    /[!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?]/.test(password);
  const passwordHasNumber = /[0-9]/.test(password);

  return (
    <div>
      {" "}
      <div className="col-10 mx-auto  form-title">
        <h1 className="roboto500 white text-center mb-5">
          Transmettez votre passion <br className="d-none d-lg-block" /> et
          gagnez de l’argent
        </h1>
        {displayPart2 ? (
          <p className="white roboto300 fs-4">
            Pour valider votre inscription pouvez-vous nous en dire un peu plus
            sur vous.
          </p>
        ) : (
          <div>
            {" "}
            <p className="white roboto300 fs-4">
              Avec Dispatch, nous avez le choix entre attendre un projet si
              votre profil est séléctionné, ou parcourir les offres. Fini les
              longues journées de recherche.
            </p>
            <button className="border-0 background-yellow raleway700 white fw-bold fs-6 py-1 px-3 rounded-pill home-header-btn">
              <span className="pe-2">En savoir plus</span>
              <Image src={WhiteArrow} width={20} alt="Icone d'une flêche" />
            </button>
          </div>
        )}
      </div>
      {/*first-part */}
      {!displayPart2 && (
        <form
          className="col-md-8 col-10 mx-auto row g-4 mt-5"
          onSubmit={handleSubmit(nextform)}
        >
          <div className="col-xl-6">
            <label className="form-label white fs-5 roboto700">
              Nom <span className="dark-red">*</span>
            </label>
            <br />
            <input
              type="text"
              className=" px-3 py-2 rounded border-0 w-100 is-invalid"
              placeholder="Nom"
              {...register("lastname", {
                required: "Vous devez entrer votre nom",
                pattern: {
                  value: /^[^<>,.;:!{}()&$ù%/[\]]+$/i,
                  message:
                    "Le nom de famille ne doit pas comporter de caractères spéciaux",
                },
              })}
            />
            {errors.lastname && (
              <span className="invalid-feedback">
                {errors.lastname.message}
              </span>
            )}
          </div>
          <div className="col-xl-6">
            <label className="form-label white fs-5 roboto700">
              Prénom <span className="dark-red">*</span>
            </label>
            <br />
            <input
              type="text"
              className=" px-3 py-2 rounded border-0 w-100 is-invalid"
              placeholder="Prénom"
              {...register("firstname", {
                required: "Vous devez entrer votre prénom",
                pattern: {
                  value: /^[^<>,.;:!{}()&$ù%/[\]]+$/i,
                  message:
                    "Le prénom ne doit pas comporter de caractères spéciaux",
                },
              })}
            />
            {errors.firstname && (
              <span className="invalid-feedback">
                {errors.firstname.message}
              </span>
            )}
          </div>
          <div>
            <label className="form-label white fs-5 roboto700">
              Adresse Email <span className="dark-red">*</span>
            </label>
            <br />
            <input
              type="email"
              className=" px-3 py-2 rounded border-0 w-100 is-invalid"
              placeholder="email@email.com"
              {...register("email", {
                required: "Vous devez renseigner votre adresse email",
              })}
            />{" "}
            {errors.email && (
              <span className="invalid-feedback">{errors.email.message}</span>
            )}
          </div>
          <div className="">
            <label className="form-label white fs-5 roboto700">
              Mot de passe <span className="dark-red">*</span>
            </label>
            <br />
            <div className="position-relative">
              <input
                type={passwordVisible ? "text" : "password"}
                className="  px-3 py-2 rounded border-0 w-100 is-invalid"
                placeholder="Mot de passe"
                required
                onChange={(e) => {
                  setPassword(e.currentTarget.value);
                }}
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
            <div className="form-text">
              <ul>
                <li className={passwordHasUppercaseLetter ? "green" : "red"}>
                  Une majuscule
                </li>
                <li className={passwordHasLowercaseLetter ? "green" : "red"}>
                  Une minuscule
                </li>
                <li className={passwordHasNumber ? "green" : "red"}>
                  Un chiffre
                </li>
                <li className={passwordHasSpecialCharacter ? "green" : "red"}>
                  Un caractère spécial
                </li>
                <li className={passwordHasValidLength ? "green" : "red"}>
                  entre 8 et 50 caractères
                </li>
              </ul>
            </div>
          </div>
          <button
            className="border-0 background-yellow raleway700 white fw-bold fs-6 py-3 px-4 rounded-pill col-9 col-sm-6 mx-auto  mt-5"
            type="submit"
          >
            <span>Poursuivre l'inscription</span>
          </button>
        </form>
      )}
      {/*second/part*/}
      {displayPart2 && (
        <form
          className="col-md-8 col-10 mx-auto row g-4 mt-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/*domaine d'activité*/}
          <div>
            <label className="form-label white fs-5 roboto700">
              Votre domaine <span className="dark-red">*</span>
            </label>
            <select
              className="  px-3 py-2 rounded border-0 w-100 is-invalid "
              required
              onChange={(e) => {
                setDomaine(e.target.value);
              }}
            >
              {" "}
              <option value="">Choisissez votre domaine</option>
              <option value="son">Son</option>
              <option value="image">Image</option>
              <option value="developpement">Développement, informatique</option>
              <option value="technique">Métiers de l'audiovisuel</option>
            </select>
            {errors.domaine && (
              <span className="invalid-feedback">
                Vous devez choisir un domaine d'activité
              </span>
            )}
          </div>
          {/*métiers du son*/}
          {domaine === "son" && (
            <div>
              {" "}
              <label className="form-label white fs-5 roboto700">
                Votre métier <span className="dark-red">*</span>
              </label>
              <select
                className="  px-3 py-2 rounded border-0 w-100 is-invalid"
                {...register("job", {
                  required: "veuillez choisir votre métier",
                })}
              >
                {" "}
                <option value="">Choisissez votre métier</option>
                <option value="ingeson">Ingénieur/Ingénieure son</option>
                <option value="mixson">Mixeur/Mixeuse son</option>
              </select>
              {errors.job && (
                <span className="invalid-feedback">
                  Vous devez choisir votre métier
                </span>
              )}
            </div>
          )}
          {/*métiers de l'image*/}
          {domaine === "image" && (
            <div>
              {" "}
              <label className="form-label white fs-5 roboto700 is-invalid">
                Votre métier <span className="dark-red">*</span>
              </label>
              <select
                className="  px-3 py-2 rounded border-0 w-100 "
                placeholder="Entrer votre métier"
                {...register("job", {
                  required: "veuillez choisir votre métier",
                })}
              >
                <option value="">Choisissez votre métier</option>
                <option value="anim2d3d">Animateur/Animatrice 2D 3D</option>
                <option value="cadreur">Cadreur/Cadreuse</option>
                <option value="chefmonteur">Chef Monteur/Chef Monteuse</option>
                <option value="dirphoto">
                  Directeur/Directrice de la Photographie
                </option>
                <option value="model3d">Modéliste 3D</option>
                <option value="monteurvideo">Monteur Vidéo</option>
                <option value="motiondesign">Motion Design</option>
                <option value="photographe">Photographe</option>
                <option value="journalisteimage">
                  Journaliste/Reporter d'Images
                </option>
              </select>{" "}
              {errors.job && (
                <span className="invalid-feedback">
                  Vous devez choisir votre métier
                </span>
              )}
            </div>
          )}
          {/*métiers de l'informatique*/}
          {domaine === "developpement" && (
            <div>
              <label className="form-label white fs-5 roboto700 is-invalid">
                Votre métier <span className="dark-red">*</span>
              </label>
              <select
                className="  px-3 py-2 rounded border-0 w-100 "
                placeholder="Entrer votre métier"
                {...register("job", {
                  required: "veuillez choisir votre métier",
                })}
              >
                <option value="">Choisissez votre métier</option>{" "}
                <option value="chefprojetinf">Chef Projet Informatique</option>
                <option value="formateurinf">
                  Consultant Formateur en Informatique
                </option>
                <option value="devinf">Développeur Informatique</option>
                <option value="devmobile">Développeur Mobile</option>
                <option value="directeurinf">
                  Directeur/Directrice informatique
                </option>
                <option value="dirtechinf">
                  Directeur/Directrice technique en informatique
                </option>
                <option value="resproduitinf">
                  Responsable produit Informatique
                </option>
                <option value="techinf">
                  Tecnicien/Tecnicienne Informatique
                </option>
              </select>
              {errors.job && (
                <span className="invalid-feedback">
                  Vous devez choisir votre métier
                </span>
              )}
            </div>
          )}
          {/*métiers de l'audiovisuel*/}
          {domaine === "technique" && (
            <div>
              {" "}
              <label className="form-label white fs-5 roboto700 is-invalid">
                Votre métier <span className="dark-red">*</span>
              </label>
              <select
                className="  px-3 py-2 rounded border-0 w-100 "
                placeholder="Entrer votre métier"
                {...register("job", {
                  required: "veuillez choisir votre métier",
                })}
              >
                {" "}
                <option value="">Choisissez votre métier</option>
                <option value="animateurtv">
                  Animateur/Animatrice de Radio et de télévision
                </option>
                <option value="assistant">Assistant</option>
                <option value="assistantrealisateur">
                  Assistant/Assistante Réalisateur
                </option>
                <option value="chargeprod">Chargé/Chargée de Production</option>
                <option value="machiniste">
                  Machiniste Constructeur/Constructrice de plateau
                </option>
                <option value="regisseur">Regisseur/régisseuse Général</option>
                <option value="scenariste">Scénariste</option>
                <option value="script">Scripte</option>
              </select>
              {errors.job && (
                <span className="invalid-feedback">
                  Vous devez choisir votre métier
                </span>
              )}
            </div>
          )}
          {/*présentation*/}
          <div>
            <label className="form-label white fs-5 roboto700">
              Votre présentation <span className="dark-red">*</span>
            </label>
            <br />
            <textarea
              cols="30"
              rows="10"
              className="w-100 rounded border-0 px-3 py-2 is-invalid"
              placeholder="Dîtes nous en un peu plus sur vous. Une présentation explicite permettra aux clients de vous repérer."
              {...register("presentation", {
                required: "Vous devez entrer votre présentation",
              })}
            ></textarea>
            {errors.presentation && (
              <span className="invalid-feedback">
                {errors.presentation.message}
              </span>
            )}
          </div>{" "}
          {/*checkboxes*/}
          <div>
            <input
              type="checkbox"
              className="form-check-input is-invalid "
              {...register("validationCheck", {
                validate: (value) => value === true,
              })}
            />
            <label className="form-check-label roboto700 ps-3 white">
              J’accepte les&nbsp;
              <br className="d-sm-none" />
              <span className="text-decoration-underline blue-link">
                <a target="_blank" href="/">
                  termes et conditions générales
                </a>
              </span>
            </label>{" "}
            {errors.validationCheck && (
              <span className="invalid-feedback">
                Vous devez valider les termes et conditions générales
              </span>
            )}
          </div>
          <div className="mt-1">
            <input type="checkbox" className="form-check-input" />

            <label className="form-check-label roboto700 ps-3 white">
              Tenez moi au courrant <br className="d-md-none" /> des dernières
              offres et actualités
            </label>
          </div>
          <button className="border-0 background-yellow raleway700 white fw-bold fs-6 py-3 px-4 rounded-pill col-9 col-sm-6 mx-auto  mt-5">
            <span>S'inscrire</span>
          </button>
        </form>
      )}
    </div>
  );
}
