import React from "react";

export default function WorksCategories() {
  return (
    <div className="works-categories py-5">
      <h2 className="black roboto700 col-10 mx-auto fw-bold pb-5">
        Les catégories de métiers
      </h2>
      <div className="col-sm-8  mx-auto col-6 d-flex flex-column flex-sm-row  flex-wrap justify-content-center">
        <button className="border-0  background-palegrey raleway500 violet fw-bold fs-6 py-3 px-4 rounded-pill shadow-sm me-sm-5 mb-4">
          Monteur
        </button>
        <button className="border-0  background-palegrey raleway500 violet fw-bold fs-6 py-3 px-4 rounded-pill shadow-sm me-sm-5 mb-4">
          Cadreur
        </button>
        <button className="border-0  background-palegrey raleway500 violet fw-bold fs-6 py-3 px-4 rounded-pill shadow-sm me-sm-5 mb-4">
          Photographe
        </button>
        <button className="border-0  background-palegrey raleway500 violet fw-bold fs-6 py-3 px-4 rounded-pill shadow-sm me-sm-5 mb-4">
          Motion Design
        </button>
        <button className="border-0  background-palegrey raleway500 violet fw-bold fs-6 py-3 px-4 rounded-pill shadow-sm me-sm-5 mb-4">
          Graphiste
        </button>
        <button className="border-0  background-palegrey raleway500 violet fw-bold fs-6 py-3 px-4 rounded-pill shadow-sm me-sm-5 mb-4">
          Ingénieur son
        </button>
        <button className="border-0  background-palegrey raleway500 violet fw-bold fs-6 py-3 px-4 rounded-pill shadow-sm me-sm-5 mb-4">
          Weddesigner
        </button>
      </div>
    </div>
  );
}
