import React from "react";
import Image from "next/image";
import GreyPaleCircle from "../../../public/icons/icon-circle-palegrey.svg";
import GreyDarkCircle from "../../../public/icons/icon-circle-darkgrey.svg";
import Modifypen from "../../../public/icons/icon-pen-modify.svg";
import ProfilImg from "../../../public/images/freelanceProfil/bald-eagle-gfd45b1323_1920.jpg";

export default function Content() {
  return (
    <div className="freelance-profil-content background-palepink">
      <div className=" col-xl-10 mx-auto  row justify-content-xl-between justify-content-evenly py-md-5 pt-5">
        <div className="col-xl-4 col-md-5 col-11 px-0 shadow radius25 mb-5 mb-md-0">
          <div className="text-center  background-button-green raleway700 white py-3 radius25-top fs-5">
            Présentation
          </div>
          <div className="black  background-white radius25-bottom">
            <p className="roboto500 p-4 pb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Provident, corrupti similique nisi rerum recusandae architecto,
              accusantium voluptate tempore numquam, illum quis commodi
              delectus! Tenetur aspernatur facere ab, libero fugiat quis a
              accusamus molestiae nesciunt dolorem ipsa, dolorum cum placeat
              error ipsum reprehenderit esse ut. Quae nesciunt quis consectetur
              non quaerat.
            </p>
            <div className="d-flex justify-content-end  px-4 pb-4">
              <button className="rounded-pill  background-button-green border-0 px-3">
                <Image src={Modifypen} />
                <span className="ps-2 white raleway700">Modifier</span>
              </button>
            </div>
          </div>
        </div>
        <div className="col-11 col-md-5 col-xl-6 px-0 shadow radius25 background-white position-relative">
          <div className="text-center background-paleviolet raleway700 white py-3 radius25-top fs-5">
            Compétences
          </div>
          <div className="d-flex background-white radius25-bottom flex-column pt-4">
            <div className="d-flex px-4 pb-3">
              <div className="col-7 black roboto500  ">
                Nom de la compétence
              </div>
              <div className="col-5">
                <Image src={GreyDarkCircle} className="me-2" />
                <Image src={GreyDarkCircle} className="me-2" />
                <Image src={GreyDarkCircle} className="me-2" />
                <Image src={GreyPaleCircle} className="me-2" />
                <Image src={GreyPaleCircle} className="me-2" />
              </div>
            </div>
            <hr className="p-0 m-0" />
            <div className="d-flex px-4 pb-3">
              <div className="col-7 black roboto500">Nom de la compétence</div>
              <div className="col-5">
                <Image src={GreyDarkCircle} className="me-2" />
                <Image src={GreyDarkCircle} className="me-2" />
                <Image src={GreyDarkCircle} className="me-2" />
                <Image src={GreyPaleCircle} className="me-2" />
                <Image src={GreyPaleCircle} className="me-2" />
              </div>
            </div>
            <hr className="p-0 m-0" />
          </div>
          <div className="d-flex justify-content-end  px-4  pb-4">
            <button className="rounded-pill background-paleviolet  border-0 px-3 ">
              <span className="ps-2 white raleway700">+ Ajouter</span>
            </button>
          </div>
        </div>
      </div>

      <div className="col-xl-10 mx-auto  row justify-content-xl-between justify-content-evenly py-md-5 pt-5">
        <div className="col-11 col-md-5 col-xl-6 px-0  shadow radius25 background-white position-relative mb-5 mb-md-0">
          <div className="text-center background-blue raleway700 white py-3 radius25-top fs-5">
            Mes statistiques
          </div>
          <div className="d-flex background-white radius25-bottom flex-column pt-4">
            <div className="d-flex px-4 pb-3">
              <div className="col black roboto500  ">Tarif journalier</div>
              <div className="col black roboto500 text-end">
                <span>750</span>&nbsp; €
              </div>
            </div>
            <hr className="p-0 m-0" />
          </div>
          <div className="d-flex background-white radius25-bottom flex-column ">
            <div className="d-flex px-4 pb-3">
              <div className="col black roboto500  ">Projets validés</div>
              <div className="col black roboto500 text-end">
                <span>20</span>
              </div>
            </div>
            <hr className="p-0 m-0" />
          </div>
          <div className="d-flex background-white radius25-bottom flex-column ">
            <div className="d-flex px-4 pb-3">
              <div className="col black roboto500  ">Membre depuis</div>
              <div className="col black roboto500 text-end">
                <span>5</span>&nbsp;mois
              </div>
            </div>
            <hr className="p-0 m-0" />
          </div>
          <div className="d-flex background-white radius25-bottom flex-column ">
            <div className="d-flex px-4 pb-3">
              <div className="col black roboto500  ">Vues du profil</div>
              <div className="col black roboto500 text-end">
                <span>70</span>
              </div>
            </div>
            <hr className="p-0 m-0" />
          </div>
        </div>
        <div className="col-xl-4 col-md-5 col-11 px-0 shadow radius25  position-relative">
          <div className="text-center  background-yellow raleway700 white py-3 radius25-top fs-5">
            Portfolio
          </div>

          <div className="  background-white radius25-bottom ">
            <div className="background-white col-10 mx-auto p-4">
              <Image src={ProfilImg} layout="responsive" />
            </div>
            <div className="d-flex justify-content-end  px-4  pb-4 ">
              <button className="rounded-pill  background-yellow border-0 px-3">
                <Image src={Modifypen} />
                <span className="ps-2 white raleway700">Modifier</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className=" py-5">
        <div className="shadow col-xl-10 col-11 mx-auto radius25  background-white">
          <div className="text-center  background-paleviolet raleway700 white py-3 radius25-top fs-5">
            Mes expériences
          </div>{" "}
          <div className="background-white radius25-bottom ">
            <div className="d-flex">
              <div className="col-6">
                <div className="p-4">
                  <h5 className="black roboto500">Entreprise</h5>
                  <h6 className="roboto500 black">Poste</h6>
                  <p className="roboto400 black mb-0">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Illum non illo nam dolor odit iste dolorem aut, numquam
                    perspiciatis nostrum, ducimus earum amet reprehenderit
                    itaque.
                  </p>
                </div>
              </div>
              <div className="col-6 d-flex justify-content-end align-items-center p-4 black roboto500 fs-5">
                De date à date
              </div>
            </div>
            <hr className="m-0 p-0" />
          </div>
          <div className="d-flex justify-content-end  px-4  pb-4">
            <button className="rounded-pill background-paleviolet  border-0 px-3 ">
              <span className="ps-2 white raleway700">+ Ajouter</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
