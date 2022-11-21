import React from "react";
import Image from "next/image";
import BgImg from "../../../public/images/freelanceProfil/background-header-profil-freelance.png";
import LocalisationIcon from "../../../public/icons/icon-localisation.svg";
import GreyStar from "../../../public/icons/icon-grey-star.svg";
import RedStar from "../../../public/icons/icon-red-star.svg";
import TestPhotoProfil from "../../../public/images/freelanceProfil/bald-eagle-gfd45b1323_1920.jpg";
import FreelanceProfilnavbar from "../../navbar/FreelanceProfilnavbar";

export default function Header() {
  return (
    <div className="freelance-profil-header position-relative ">
      <div className="w-100 position-absolute zindex-1">
        <Image
          src={BgImg}
          layout="responsive"
                  alt="background du header profil freelance "
                  objectFit="cover"
        />
      </div>
      <FreelanceProfilnavbar />
      <div className="col-9 mx-auto header-content background-white d-flex py-4 ">
        <div className="col-3"></div>
        <div className="col-4 d-flex flex-column text-center py-5 px-3 ">
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
        <div className="col-3 py-3 px-3">
          <div className="col-10  mx-auto h-100 position-relative">
            <Image
              src={TestPhotoProfil}
              layout="fill"
              objectFit="cover"
              className="radius20 "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
