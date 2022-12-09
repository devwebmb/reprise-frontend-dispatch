import React, { useState } from "react";

export default function FreelanceInfosSignup() {
  const [domaine, setDomaine] = useState(null);

  return (
    <div className="freelance-infos-signup">
      <div className="col-10 mx-auto form-title">
        <h1 className="roboto500 white text-center mb-5">
          Transmettez votre passion <br className="d-none d-lg-block" /> et
          gagnez de l’argent
        </h1>
        <p className="white roboto300 fs-4">
          Pour valider votre inscription pouvez-vous nous en dire un peu plus
          sur vous.
        </p>
      </div>
      <form className="col-md-8 col-10 mx-auto row g-4 mt-5">
        {/*domaine d'activité*/}
        <div>
          <label className="form-label white fs-5 roboto700">
            Votre domaine <span className="dark-red">*</span>
          </label>
          <select
            className="  px-3 py-2 rounded border-0 w-100 "
            placeholder="Entrer votre métier"
            onChange={(e) => {
              setDomaine(e.target.value);
            }}
          >
            {" "}
            <option ={null}>Choisissez votre domaine</option>
            <option value="son">Son</option>
            <option value="image">Image</option>
            <option value="developpement">Développement, informatique</option>
            <option value="technique">Métiers de l'audiovisuel</option>
          </select>
        </div>
        {/*métiers du son*/}
        {domaine === "son" && (
          <div>
            {" "}
            <label className="form-label white fs-5 roboto700">
              Votre métier <span className="dark-red">*</span>
            </label>
            <select
              className="  px-3 py-2 rounded border-0 w-100 "
              placeholder="Entrer votre métier"
              onChange={(e) => {
                setDomaine(e.target.value);
              }}
            >
              {" "}
              <option ={null}>Choisissez votre métier</option>
              <option value="ingeson">Ingénieur/Ingénieure son</option>
              <option value="mixson">Mixeur/Mixeuse son</option>
              <option value="developpement">Développement, informatique</option>
            </select>
          </div>
        )}
        {/*métiers de l'image*/}
        {domaine === "image" && (
          <div>
            {" "}
            <label className="form-label white fs-5 roboto700">
              Votre métier <span className="dark-red">*</span>
            </label>
            <select
              className="  px-3 py-2 rounded border-0 w-100 "
              placeholder="Entrer votre métier"
              onChange={(e) => {
                setDomaine(e.target.value);
              }}
            >
              <option ={null}>Choisissez votre métier</option>
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
            </select>
          </div>
        )}
        {/*métiers de l'informatique*/}
        {domaine === "developpement" && (
          <div>
            <label className="form-label white fs-5 roboto700">
              Votre métier <span className="dark-red">*</span>
            </label>
            <select
              className="  px-3 py-2 rounded border-0 w-100 "
              placeholder="Entrer votre métier"
              onChange={(e) => {
                setDomaine(e.target.value);
              }}
            >
              <option ={null}>Choisissez votre métier</option>{" "}
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
          </div>
        )}
        {/*métiers de l'audiovisuel*/}
        {domaine === "technique" && (
          <div>
            {" "}
            <label className="form-label white fs-5 roboto700">
              Votre métier <span className="dark-red">*</span>
            </label>
            <select
              className="  px-3 py-2 rounded border-0 w-100 "
              placeholder="Entrer votre métier"
              onChange={(e) => {
                setDomaine(e.target.value);
              }}
            >
              {" "}
              <option ={null}>Choisissez votre métier</option>
              <option value="animateurtv">Animateur/Animatrice de Radio et de télévision</option>
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
            className="w-100 rounded border-0 px-3 py-2"
            placeholder="Dîtes nous en un peu plus sur vous. Une présentation explicite permettra aux clients de vous repérer."
          ></textarea>
        </div>{" "}
        <div>
          <input type="checkbox" className="form-check-input" />
          <label className="form-check-label roboto700 ps-3 white">
            J’accepte les&nbsp;
            <br className="d-sm-none" />
            <span className="text-decoration-underline blue-link">
              <a target="_blank" href="/">
                termes et conditions générales
              </a>
            </span>
          </label>
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
    </div>
  );
}
