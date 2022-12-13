import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import PhotoBg from "../../public/images/loginsignup/freelance-bg.jpg";
import WhiteArrow from "../../public/icons/white-arrow.svg";
import logo from "../../public/icons/Logo_Dispatch.svg";
import inscriptionIcon from "../../public/icons/Icone-Inscription.svg";
import connexionIcon from "../../public/icons/Icone-connexion.svg";
import Eye from "../../public/icons/eye.svg";
import EyeSlash from "../../public/icons/eye-slash.svg";
import axios from "axios";

export default function FreelanceLogin() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post(`${process.env.url}/api/freelance/login`, {
        email: data.email,
        password: password,
      })
      .then((data) => {
        console.log(data);
      });
  };

  return (
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
            alt="photo de background"
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
        <div className="col-10 mx-auto  form-title">
          <h1 className="roboto500 white text-center mb-5">
            Transmettez votre passion <br className="d-none d-lg-block" /> et
            gagnez de l’argent
          </h1>
          <p className="white roboto300 fs-4">
            Avec Dispatch, nous avez le choix entre attendre un projet si votre
            profil est séléctionné, ou parcourir les offres. Fini les longues
            journées de recherche.
          </p>
          <button className="border-0 background-yellow raleway700 white fw-bold fs-6 py-1 px-3 rounded-pill home-header-btn">
            <span className="pe-2">En savoir plus</span>
            <Image src={WhiteArrow} width={20} alt="Une icone de flêche" />
          </button>
        </div>
        <form
          className="col-md-8 col-10 mx-auto row g-4 mt-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="">
            <label className="form-label white fs-5 roboto700">
              Adresse Email <span className="dark-red">*</span>
            </label>
            <br />
            <input
              type="email"
              className="from-control px-3 py-2 rounded border-0 w-100 is-invalid"
              placeholder="email@email.com"
              {...register("email", {
                required: "Vous devez entrer une adresse email",
              })}
            />
            {errors.email && (
              <span className="invalid-feedback">{errors.email.message}</span>
            )}
          </div>
          <div className="">
            <label className="form-label white fs-5 roboto700">
              Mot de passe <span className="dark-red">*</span>
            </label>
            <br />
            <div className="position-relative">
              <input
                type={passwordVisible ? "text" : "password"}
                className="from-control  px-3 py-2 rounded border-0 w-100"
                placeholder="Mot de passe"
                required
                onChange={(e) => {
                  setPassword(e.currentTarget.value);
                }}
              />{" "}
              <a
                className="position-absolute end-0 top-50 translate-middle"
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  setPasswordVisible((prevState) => !prevState);
                }}
              >
                {passwordVisible ? (
                  <Image
                    src={EyeSlash}
                    alt="Icone représentant un oeil barré"
                  ></Image>
                ) : (
                  <Image src={Eye} alt="Icone représentant un oeil"></Image>
                )}
              </a>{" "}
            </div>

            <a href="/" className="">
              <span className="white raleway600italic ">
                Mot de passe oublié?
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
