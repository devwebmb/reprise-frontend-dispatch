import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/icons/Logo_Dispatch.svg";
import PhotoBg from "../../public/images/loginsignup/client-bg.jpg";
import inscriptionIcon from "../../public/icons/Icone-Inscription.svg";
import connexionIcon from "../../public/icons/Icone-connexion.svg";
import WhiteArrow from "../../public/icons/white-arrow.svg";

export default function ClientLogin() {
  return (
    <div className="connect-signup-login d-flex ">
      <div className="col-xl-7 col-6 position-relative d-none d-lg-block">
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
          <Image src={PhotoBg} layout="fill" objectFit="cover" />
        </div>
      </div>
      <div className="col-xl-5 col-lg-6 form-part ">
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
          <Image src={PhotoBg} className="w-50 h-50 " />
        </div>
        <div className="col-10 mx-auto  form-title">
          <h1 className="roboto500 white text-center mb-5">
            D??finissez vos crit??res, on s???occupe du reste
          </h1>
          <p className="white roboto300 fs-4">
            Donnez l???opportunit?? ?? des professionnels de vous satisfaire. Ne
            soyez plus noy??s sour les r??ponses. Avec Dispatch, vous pouvez
            choisir comment les r??ponses pour votre projet viennent ?? vous.
          </p>
          <button className="border-0 background-yellow raleway700 white fw-bold fs-6 py-1 px-3 rounded-pill home-header-btn">
            <span className="pe-2">En savoir plus</span>
            <Image src={WhiteArrow} width={20} />
          </button>
        </div>
        <form className="col-md-8 col-10 mx-auto row g-4 mt-5">
          <div className="">
            <label className="form-label white fs-5 roboto700">
              Adresse Email <span className="dark-red">*</span>
            </label>
            <br />
            <input
              type="email"
              className="from-control px-3 py-2 rounded border-0 w-100"
              placeholder="email@email.com"
            />
          </div>
          <div className="">
            <label className="form-label white fs-5 roboto700">
              Mot de passe <span className="dark-red">*</span>
            </label>
            <br />
            <input
              type="password"
              className="from-control  px-3 py-2 rounded border-0 w-100 mb-2"
              placeholder="Mot de passe"
            />
            <br />
            <a href="/" className="">
              <span className="white raleway600italic ">
                Mot de passe oubli???
              </span>
            </a>
          </div>
          <button className="border-0 background-yellow raleway700 white fw-bold fs-6 py-3 px-4 rounded-pill col-4 mx-auto  mt-5">
            <span>Se connecter</span>
          </button>
        </form>
      
      </div>
    </div>
  );
}
