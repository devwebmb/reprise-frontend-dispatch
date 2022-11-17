import { React, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/icons/Logo_Dispatch.svg";
import phoneIcon from "../../public/icons/Icone-contact.svg";
import inscriptionIcon from "../../public/icons/Icone-Inscription.svg";
import connexionIcon from "../../public/icons/Icone-connexion.svg";

export default function PrincipalNavbar() {
  const [navActive, setNavActive] = useState(null);

  useEffect(() => {
    const nav = document.getElementById("nav");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        nav.classList.remove("background-transparent");
        nav.classList.add("background-violet");
      } else if (window.scrollY <= 100) {
        nav.classList.add("background-transparent");
        nav.classList.remove("background-violet");
      }
    });
    window.addEventListener("resize", () => {
      setNavActive(null);
    });
  }, []);

  return (
    <div
      className="principal-navbar roboto500 d-flex justify-content-between sticky-top background-transparent"
      id="nav"
    >
      <div className=" col-lg-6 col-9 d-flex h-100 ">
        <div className="logo-container d-flex align-items-center justify-content-center  pe-3 ps-5  h-100">
          <Image src={logo} alt="logo dispatch" />
        </div>
        <div className="d-flex align-items-center h-100 pe-5  justify-content-center">
          <Link href="/">
            <span className="white ">DISPATCH</span>
          </Link>
        </div>
        <div className=" align-items-center h-100   justify-content-center d-none d-lg-flex">
          <Link href="/" className="d-flex ">
            <span className="white pe-2">Contactez-nous</span>
            <div>
              <Image src={phoneIcon} width={20} height={20} alt="Icone" />
            </div>
          </Link>
        </div>
      </div>
      <div
        className={`${
          navActive ? "active" : " "
        } bars-solid  d-lg-none d-flex h-100 pe-5`}
        onClick={() => {
          setNavActive(!navActive);
        }}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className=" col-6  h-100 justify-content-end d-none d-lg-flex">
        <div className="d-flex align-items-center h-100 pe-5 justify-content-center">
          <Link href="/" className="d-flex ">
            <span className="white pe-2">Inscription</span>
            <div>
              <Image src={inscriptionIcon} alt="Icone" />
            </div>
          </Link>
        </div>
        <div className="d-flex align-items-center h-100 pe-5 justify-content-center">
          <Link href="/" className="d-flex ">
            <span className="white pe-2">Connexion</span>
            <div>
              <Image src={connexionIcon} alt="Icone" />
            </div>
          </Link>
        </div>
      </div>

      <div
        className={`${
          navActive ? "active" : ""
        } col-12 d-flex d-lg-none mobile-ul-style flex-column`}
      >
        <div className="pt-3 d-flex justify-content-center">
          <Link href="/" className="d-flex ">
            <span className="white pe-2">Contactez-nous</span>
            <div>
              <Image src={phoneIcon} width={20} height={20} alt="Icone" />
            </div>
          </Link>
        </div>
        <div className="pt-3 d-flex justify-content-center ">
          <Link href="/" className="d-flex ">
            <span className="white pe-2">Inscription</span>
            <div>
              <Image src={inscriptionIcon} alt="Icone" />
            </div>
          </Link>
        </div>
        <div className="pt-3 pb-3 d-flex justify-content-center">
          <Link href="/" className="d-flex ">
            <span className="white pe-2">Connexion</span>
            <div>
              <Image src={connexionIcon} alt="Icone" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
