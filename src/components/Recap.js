import Header from "./Header";
import React, { useEffect, useState } from "react";

const Recap = () => {
  const [avis, setAvis] = useState([]);

  const getAvis = async () => {
    const json = await fetch("http://localhost:1337/api/avis").then((res) =>
      res.json()
    );
    setAvis(json.data);
  };

  useEffect(() => {
    getAvis();
  }, []);

  return (
    <div className="App">
      <Header />
      <h1>Récapitulatif de l'avis de passage</h1>
      <div className="container">
        <h3 className="client">Nom du client ou entreprise : </h3>
        <h3 className="nameTech">Notre technicien : </h3>
        <h3 className="dateint">Est intervenu chez vous le : </h3>
        <h3 className="obs">Observation : </h3>
      </div>
      <p className="merci">Merci pour votre confiance.</p>
    </div>
  );
};

export default Recap;
