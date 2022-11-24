import React from "react";

export default function FreelanceInfosSignup() {
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
        <div>
          <label className="form-label white fs-5 roboto700">
            Votre métier <span className="dark-red">*</span>
          </label>
          <input
            type="text"
            className="  px-3 py-2 rounded border-0 w-100"
            placeholder="Entrer votre métier"
          />
        </div>
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
