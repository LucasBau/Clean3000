import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "./App.scss";
import Header from "./components/Header";
import OptionTech from "./components/OptionTech";

function App() {
  const navigate = useNavigate();
  const [techniciens, setTechniciens] = useState([]);
  const [avis, setAvis] = useState({
    AID: `${Date.now()}`,
    techName: "",
    dateInter: "",
    client: "",
    observ: "",
  });

  const getTechniciens = async () => {
    const json = await fetch("http://localhost:1337/api/techniciens").then(
      (res) => res.json()
    );
    setTechniciens(json.data);
  };

  useEffect(() => {
    getTechniciens();
  }, []);

  const handleChange = (key, value) => {
    setAvis({
      ...avis,
      [key]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/recapitulatif/${avis.AID}`);

    fetch("http://localhost:1337/api/avis", {
      method: "POST",
      body: JSON.stringify({
        data: avis,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const listTechniciens = techniciens.map((item) => {
    return <OptionTech key={item.id} name={item.attributes.name} />;
  });

  return (
    <div className="App">
      <Header isHome={true} />
      <h1>Avis de passage</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="input">
          <label htmlFor="techName">Nom du technicien : </label>
          <select
            id="techName"
            required
            onChange={(e) => handleChange("techName", e.target.value)}
          >
            <option default value=""></option>
            {listTechniciens}
          </select>
        </div>
        <div className="input">
          <label htmlFor="date">Date de l'intervention : </label>
          <input
            id="date"
            type="date"
            className="techNameInput"
            required
            value={avis.dateInter}
            onChange={(e) => handleChange("dateInter", e.target.value)}
          />
        </div>
        <div className="input">
          <label htmlFor="clientName">Nom du client ou entreprise : </label>
          <input
            id="clientName"
            type="text"
            className="techNameInput"
            value={avis.clientName}
            required
            onChange={(e) => handleChange("client", e.target.value)}
          />
        </div>
        <div className="input observ">
          <label htmlFor="observ">Observation : </label>
          <input
            type="text"
            id="observ"
            className="observInput"
            value={avis.observ}
            placeholder="*facultatif"
            onChange={(e) => handleChange("observ", e.target.value)}
          />
        </div>
        <div className="submit">
          <input id="submit" type="submit" value="Valider" />
        </div>
      </form>
    </div>
  );
}

export default App;
