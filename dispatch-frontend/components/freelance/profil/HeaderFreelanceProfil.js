import React from "react";
import Image from "next/image";
import BgImg from "../../../public/images/freelanceProfil/background-header-profil-freelance.png";
import LocalisationIcon from "../../../public/icons/icon-localisation.svg";
import GreyStar from "../../../public/icons/icon-grey-star.svg";
import RedStar from "../../../public/icons/icon-red-star.svg";
import TestPhotoProfil from "../../../public/images/freelanceProfil/bald-eagle-gfd45b1323_1920.jpg";
import DownloadArrow from "../../../public/icons/telecharger-arrow.png";

export default function Header() {
  return (
    <div className="freelance-profil-header position-relative ">
      <div className="w-100 h-100 bg-img  position-absolute zindex-1">
        <Image
          src={BgImg}
          layout="responsive"
          alt="background du header profil freelance "
          className="h-100 "
        />
      </div>
      <div className="py-5">
        <div className="col-10 col-xl-9 mx-auto header-content radius25 background-white d-flex py-4 justify-content-evenly flex-column flex-sm-row">
          <div className="  p-3 d-none d-xl-block ">
            <button className="background-palegreen rounded-pill p-2 px-3  d-flex align-items-center border-0">
              <div className="disponibility-circle background-button-green rounded-circle "></div>
              <span className="ps-2 roboto500 black">
                disponible à temps plein
              </span>
            </button>
          </div>
          <div className="  d-flex flex-column text-center py-xl-5 py-3 px-3 ">
            <div className="  pb-3 d-flex d-xl-none justify-content-center">
              <button className="background-palegreen rounded-pill p-2 px-3  d-flex align-items-center border-0">
                <div className="disponibility-circle background-button-green rounded-circle "></div>
                <span className="ps-2 roboto500 black">
                  disponible à temps plein
                </span>
              </button>
            </div>
            <h1 className="roboto700 black">PRENOM NOM</h1>
            <span className="roboto500 black fs-4 mb-2">Métier - métier</span>
            <div className="d-flex justify-content-center">
              <Image src={LocalisationIcon} />{" "}
              <span className="yellow ps-2 roboto500 mb-2">Ville</span>
            </div>
            <div className="d-flex justify-content-center">
              <div className="d-flex">
                <Image src={RedStar} />
                <Image src={RedStar} />
                <Image src={GreyStar} />
                <Image src={GreyStar} />
                <Image src={GreyStar} />
              </div>
              <div className="d-flex red roboto500 ps-2">
                <span>10</span>&nbsp;avis
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-5  py-3 px-xl-3 ">
            <div className="col-10 profil-img-container mx-auto h-100 position-relative d-none d-sm-block border radius20  p-2">
              <button className="rounded-pill background-paleviolet col-10  border-0 px-3 position-absolute top-50 start-50 translate-middle">
                <span className=" white raleway700">
                  + Ajouter une photo <br />
                  &nbsp;de profil
                </span>
              </button>
              {/* <Image
              src={TestPhotoProfil}
              layout="fill"
              objectFit="cover"
              className="radius20 "
            /> */}
            </div>
          </div>
          <div className="d-block d-sm-none col-7 mx-auto">
            {" "}
            <button className="rounded-pill background-paleviolet col-12 mx-auto border-0 px-3 ">
              <span className=" white raleway700">
                + Ajouter une photo <br />
                &nbsp;de profil
              </span>
            </button>
            {/* <Image
            src={TestPhotoProfil}
            layout="responsive"
            className="radius20 "
          /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
