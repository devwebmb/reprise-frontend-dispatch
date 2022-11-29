import React from "react";
import logo from "../../public/icons/Logo_Dispatch.svg";
import Link from "next/link";
import Image from "next/image";
import AccountIcon from "../../public/icons/account-icon.svg";

export default function FreelanceProfilnavbar() {
  return (
    <div className="freelance-profil-navbar d-flex sticky-top">
      <div className=" col-3 col-sm-6 d-flex h-100 ">
        <div className="logo-container d-flex align-items-center justify-content-center  pe-3 ps-5  h-100">
          <Image src={logo} alt="logo dispatch" />
        </div>
        <div className="d-flex align-items-center h-100 pe-5  justify-content-center">
          <Link href="/">
            <span className="white roboto500 d-none d-sm-block">DISPATCH</span>
          </Link>
        </div>
      </div>
      <div className="d-flex col-9 col-sm-6 align-items-center h-100  justify-content-end pe-5 ">
        <Link href="/" className="d-flex ">
          <span className="white pe-2">Mon compte</span>
          <div>
            <Image src={AccountIcon} alt="Icone" />
          </div>
        </Link>
      </div>
    </div>
  );
}
