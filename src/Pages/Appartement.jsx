import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage";
import appartementsData from "../Data/appartements.json"; // Importez votre fichier JSON
import SlideShow from "../Components/SlideShow";
import Dropdown from "../Components/Dropdown";
import StarRating from "../Components/StarRating";

const Appartement = () => {
  const { id } = useParams();
  const [appartement, setAppartement] = useState(null);

  useEffect(() => {
    // Convertir l'ID en nombre entier
    const appartementId = id;
    console.log(appartementId);

    // Trouver l'appartement correspondant dans les données JSON
    const foundAppartement = appartementsData.find(
      (appart) => appart.id === appartementId
    );

    if (foundAppartement) {
      setAppartement(foundAppartement);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className="appartement-page">
      {appartement ? (
        <div>
          <SlideShow images={appartement.pictures} />
          <div className="header-description">
            <div>
              <h1 className="title">{appartement.title}</h1>
              <p className="location">{appartement.location}</p>
              <div className="tagsContainer">
                {appartement.tags
                  ? appartement.tags.map((tag) => (
                      <p key={tag} className="tag">
                        {tag}
                      </p>
                    ))
                  : null}
              </div>
            </div>
            <div className="host-and-rating">
              <div className="hostContainer">
                <p className="hostName">{appartement.host.name}</p>
                <img
                  src={appartement.host.picture}
                  alt="Hôte"
                  className="hostPic"
                />
              </div>
              <div>
                <StarRating ratings={appartement.rating} />
              </div>
            </div>
          </div>

          <div className="dropdown-container">
            <Dropdown label={"Description"} data={appartement.description} />
            <Dropdown
              label={"Equipements"}
              data={
                <ul>
                  {appartement.equipments.map((equipment, index) => (
                    <li key={equipment}>{equipment}</li>
                  ))}
                </ul>
              }
            />
          </div>
        </div>
      ) : (
        <ErrorPage />
      )}
    </div>
  );
};

export default Appartement;
