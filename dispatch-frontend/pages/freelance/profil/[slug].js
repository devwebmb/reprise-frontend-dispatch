import React from "react";
import Header from "../../../components/freelance/profil/HeaderFreelanceProfil";
import Content from "../../../components/freelance/profil/ContentFreelanceProfil";
import ProjetctsTracking from "../../../components/projets/ProjetctsTracking";
import Navbar from "../../../components/navbar/FreelanceProfilnavbar"

export default function slug() {
  return (
    <div>
      <Navbar />
      {/* <Header />
      <Content /> */}
      <ProjetctsTracking />
    </div>
  );
}
