import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigations.js";
import bandeau2 from "../media/bandeau3.jpg";
import partage from "../media/partage.jpg";
import outils6 from "../media/outils6.jpg";
import cheveux from "../media/seche-cheveux.png";
import cuiseur from "../media/cuiseur-de-riz.png";
import fer from "../media/le-fer.png";
import aspirateur from "../media/aspirateur.png";
import tele from "../media/tele.png";
import machine from "../media/machine-a-laver.png";
import vaisselle from "../media/lave-vaisselle.png";
import four from "../media/four.png";
import entretien from "../media/entretien.jpg";
import Footer from "../components/Footer.js";
import axios from "axios";
import thermo from "../media/thermometre.png";
import ScrollingText from "../components/scrollingText.js";
const Homepage = () => {
  const [weatherData, setWeatherData] = useState(null);
  const apiKey =
    "d9189c97f2c0f9925e1370024e3b46c10f00f5cdd6d87fb2c01125b5bc57aa21";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.meteo-concept.com/api/forecast/daily?token=${apiKey}&insee=59156`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données météorologiques :",
          error
        );
      }
    };

    fetchData();
  }, [apiKey]);

  const getDayLabel = (dayIndex) => {
    const daysOfWeek = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];
    const today = new Date().getDay();
    const forecastDay = (today + dayIndex) % 7;

    return daysOfWeek[forecastDay];
  };

  const getTemperatureColor = (temperature) => {
    if (temperature < 1) {
      return "red";
    } else if (temperature < 10) {
      return "white";
    } else {
      return "green";
    }
  };

  return (
    <div className="containerAlpha">
      <Navigation />
      <div className="container-weath">
        <div id="weatherData">
          {weatherData ? (
            <div className="weath-data">
              <img src={thermo} alt="thermomètre graduel en degrés" />
              <p className="ville">Ville: {weatherData.city.name}</p>

              <h2>Prévisions:</h2>
              <div className="data">
                {weatherData.forecast.slice(0, 3).map((forecastDay, index) => {
                  const forecastDate = new Date();
                  forecastDate.setDate(forecastDate.getDate() + index);
                  let day = "";
                  switch (getDayLabel(index)) {
                    case "Lun":
                      day = "Lundi";
                      break;
                    case "Mar":
                      day = "Mardi";
                      break;
                    case "Mer":
                      day = "Mercredi";
                      break;
                    case "Jeu":
                      day = "Jeudi";
                      break;
                    case "Ven":
                      day = "Vendredi";
                      break;
                    case "Sam":
                      day = "Samedi";
                      break;
                    case "Dim":
                      day = "Dimanche";
                      break;

                    default:
                      day = "";
                      break;
                  }
                  const temperatureColor = getTemperatureColor(
                    forecastDay.tmin
                  );

                  return (
                    <div key={index} className="jour">
                      {/*  <p>{getDayLabel(index)}</p> */}
                      <p className="day">{day}</p>

                      <div id="data">
                        <p
                          className="minimale"
                          style={{ color: temperatureColor }}
                        >
                          Min: {forecastDay.tmin} °C
                        </p>
                        <p
                          className="maximale"
                          style={{ color: temperatureColor }}
                        >
                          Max: {forecastDay.tmax} °C
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <p>Chargement des données météorologiques...</p>
          )}
        </div>
      </div>

      <div id="bandeau">
        <img className="bandeau" src={bandeau2} alt="un reparateur" />
      </div>
      <ScrollingText text="Les activités de REPAIR CAFE reprendront le dernier Mardi de Janvier 2024." />
      <div className="cquoi">
        <h1>
          REPAIR CAFE <span className="spam1"> c'est quoi ?</span>
        </h1>
        <div className="presentation">
          <img
            className="partage"
            src={partage}
            alt="homme et enfant travail"
          />
          <div className="element-avec-curseur-personnalise">
            <p className="clear-left">
              Un "Repair Café" est un concept qui désigne un événement ou un
              lieu où des bénévoles compétents offrent gratuitement leurs
              services pour réparer des objets domestiques cassés ou endommagés.
              <br />
              L'objectif principal d'un Repair Café est de promouvoir la
              réparation, la réutilisation et la réduction des déchets en
              encourageant les gens à prolonger la durée de vie de leurs biens
              plutôt que de les jeter et d'en acheter de nouveaux.
              <br /> Voici quelques caractéristiques courantes d'un Repair Café
              :
              <br />
              <br />
              Bénévoles compétents : Les Repair Cafés sont généralement animés
              par des bénévoles qui ont des compétences en réparation dans
              divers domaines, tels que l'électronique, la couture, la
              menuiserie, la mécanique, etc.
              <br />. Objets réparables : Les participants apportent
              généralement des objets domestiques cassés ou en panne, tels que
              des appareils électroménagers, des vêtements, des jouets, des
              vélos, des ordinateurs, des smartphones, etc.
              <br />. Ateliers et outils : Les Repair Cafés sont équipés
              d'outils et de matériaux de base nécessaires à la réparation. Les
              participants peuvent travailler aux côtés des bénévoles pour
              réparer leurs objets ou simplement observer et apprendre.
              <br />. Éducation et sensibilisation : En plus de la réparation,
              les Repair Cafés ont souvent pour mission d'éduquer les gens sur
              l'importance de la réparation, de la réutilisation et de la
              réduction des déchets.
              <br />. Aspect communautaire : Les Repair Cafés sont souvent
              organisés au niveau local et favorisent un sentiment de communauté
              en rassemblant les gens pour résoudre des problèmes ensemble.
              <br />. Les Repair Cafés sont devenus populaires dans le monde
              entier comme une réponse à la société de consommation et au
              problème croissant des déchets électroniques et autres déchets
              jetés.
              <br />. Ils encouragent la durabilité, la préservation des
              ressources et l'autonomie des consommateurs en leur permettant de
              réparer et de maintenir leurs propres biens.
            </p>
          </div>
        </div>
      </div>

      <article className="wrapper">
        <div className="marquee">
          <div className="marquee__group">
            <div>
              <img src={cheveux} alt="seche-cheveux" />
            </div>
            <div>
              <img src={cuiseur} alt="cuiseur à riz" />
            </div>
            <div>
              <img src={fer} alt="fer à repasser" />
            </div>
            <div>
              <img src={aspirateur} alt="aspirateur" />
            </div>
            <div>
              <img src={four} alt="four micro-onde" />
            </div>
            <div>
              <img src={tele} alt="tele" />
            </div>
            <div>
              <img src={machine} alt="machine à laver" />
            </div>
            <div>
              <img src={vaisselle} alt="lave-vaisselle" />
            </div>
          </div>
        </div>
        <div className="marquee marquee--reverse">
          <div className="marquee__group">
            <div>
              <img src={vaisselle} alt="lave-vaisselle" />
            </div>
            <div>
              <img src={machine} alt="machine à laver" />
            </div>{" "}
            <div>
              <img src={tele} alt="tele" />
            </div>
            <div>
              <img src={four} alt="four micro-onde" />
            </div>
            <div>
              <img src={aspirateur} alt="aspirateur" />
            </div>
            <div>
              <img src={fer} alt="fer à repasser" />
            </div>
            <div>
              <img src={cuiseur} alt="cuiseur à riz" />
            </div>{" "}
            <div>
              <img src={cheveux} alt="seche-cheveux" />
            </div>
          </div>
        </div>
      </article>
      <div className="benevole">
        <h1>
          <span className="spam3">Rejoindre</span> Repair Café
        </h1>
        <img
          className="img-benevole"
          src={entretien}
          alt="homme qui répare un appareil ménager"
        />
        <div className="content-benevole">
          <p>
            Actuellement, nous sommes à la recherche de professionnels de la
            réparation de petits appareils d'électroménagers qui seraient
            intéressés à partager leurs connaissances et leur passion au sein de
            notre association Repair Café.
            <br />
            <br />
            Le Repair Café est un espace communautaire où les gens se réunissent
            pour réparer ensemble des objets du quotidien, tels que des petits
            appareils électroménagers, des appareils électroniques, des
            vêtements, et bien plus encore. Notre objectif est de promouvoir la
            réparation plutôt que le remplacement, contribuant ainsi à réduire
            la quantité de déchets envoyés aux sites d'enfouissement.
            <br />
            <br />
            Nous sommes convaincus que votre expertise en réparation serait un
            atout précieux pour notre communauté. En partageant vos compétences
            avec d'autres, vous contribuerez à autonomiser les individus en leur
            permettant de réparer eux-mêmes leurs appareils défectueux, évitant
            ainsi de les jeter prématurément et de contribuer à l'impact
            environnemental.
            <br />
            <br />
            Si vous êtes passionné(e) par la réparation, la durabilité et l'idée
            de redonner à la communauté, nous vous invitons chaleureusement à
            rejoindre notre équipe de bénévoles. En tant que professionnel de la
            réparation, vous aurez l'occasion de mettre en valeur votre
            savoir-faire, de rencontrer d'autres passionnés, et de contribuer
            positivement à l'environnement local.
            <br />
            <br />
            Si cette opportunité vous intéresse, n'hésitez pas à nous contacter
            à [votre adresse e-mail ou numéro de téléphone] pour discuter
            davantage de votre participation potentielle au Repair Café. Nous
            serions ravis de discuter avec vous des différentes façons dont vous
            pourriez apporter votre contribution.
            <br />
          </p>
        </div>
      </div>
      <div className="ou">
        <h1>
          REPAIR CAFE <span className="spam2">c'est où ?</span>
        </h1>
        <div className="lieu">
          <img id="lieu" src={outils6} alt="perceuse jaune" />
          <p>
            Nous nous retrouvons le dernier mardi de chaque mois entre 17h00 et
            19h00 dans la salle Emilie Herin de Courchelettes.
          </p>
          <iframe
            title="UniqueTitle"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d40709.84509992994!2d3.0909547426513573!3d50.378388099657606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sfr!4v1695883811798!5m2!1sfr!2sfr"
            width="300"
            height="200"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
