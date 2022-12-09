import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import PhotoBg from "../../public/images/loginsignup/freelance-bg.jpg";
import WhiteArrow from "../../public/icons/white-arrow.svg";
import logo from "../../public/icons/Logo_Dispatch.svg";
import inscriptionIcon from "../../public/icons/Icone-Inscription.svg";
import connexionIcon from "../../public/icons/Icone-connexion.svg";

import FreelanceSignupFirstPart from "./FreelanceSignupFirstPart";

export default function FreelanceSignup() {

  return (
    <div>
      <div className="connect-signup-login d-flex ">
        <div className="col-5 position-relative d-none d-lg-block">
          <div className=" d-flex connect-logo position-absolute">
            <div className=" d-flex align-items-center justify-content-center  pe-3 ps-5  h-100">
              <Image src={logo} alt="logo dispatch" />
            </div>
            <div className="d-flex align-items-center h-100 pe-5  justify-content-center">
              <Link href="/">
                <span className="white roboto500 ps-4">DISPATCH</span>
              </Link>
            </div>
          </div>
          <div className="w-100 h-100 position-relative">
            <Image
              src={PhotoBg}
              layout="fill"
              objectFit="cover"
              alt="Image de background"
            />
          </div>
        </div>
        <div className="col-lg-7 form-part ">
          <div className="col-lg-8 mx-auto connect-nav d-flex justify-content-evenly ">
            <div className="d-none d-sm-flex connect-logo d-lg-none">
              <div className=" d-flex align-items-center justify-content-center  pe-lg-3 ps-lg-5 ps-3  h-100">
                <Image src={logo} alt="logo dispatch" />
              </div>
              <div className="d-flex align-items-center h-100 pe-5  justify-content-center">
                <Link href="/">
                  <span className="white roboto500 ps-4">DISPATCH</span>
                </Link>
              </div>
            </div>
            <div className="d-flex align-items-center h-100  justify-content-center ">
              <Link href="/" className="d-flex ">
                <span className="white pe-2">Inscription</span>
                <div>
                  <Image src={inscriptionIcon} alt="Icone" />
                </div>
              </Link>
            </div>
            <div className="d-flex align-items-center h-100  justify-content-center ">
              <Link href="/" className="d-flex ">
                <span className="white pe-2">Connexion</span>
                <div>
                  <Image src={connexionIcon} alt="Icone" />
                </div>
              </Link>
            </div>
          </div>
          <div className="mx-auto col-8 d-flex justify-content-center d-lg-none pb-4">
            <Image
              src={PhotoBg}
              className="w-50 h-50 "
              alt="Image de background"
            />
          </div>

            <FreelanceSignupFirstPart />
   
        </div>
      </div>
    </div>
  );
}
