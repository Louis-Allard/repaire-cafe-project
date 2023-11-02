import React from "react";
import "../scss/apropos.scss";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

const Apropos = () => {
  return (
    <div className="container-apropos">
      <Navigation />
      <div className="container-content">
        <h1> À Propos de Repair Café Courchelettes</h1>
        <p>
          Bienvenue chez Repair Café Courchelettes, votre destination locale
          pour la réparation collaborative et durable. <br />
          <br />
          <h2>Notre Histoire</h2>
          <br />
          Fondé en 2023, Repair Café Courchelettes est le fruit de la passion
          partagée pour la réparation et la durabilité. Inspiré par le mouvement
          mondial du Repair Café, notre initiative a pour mission de réduire les
          déchets, de promouvoir la durabilité et de créer une communauté axée
          sur le partage des compétences.
          <br />
          <br />
          <h2>
            Le Concept du Repair Café
            <br />
          </h2>
          <br />
          Le concept du Repair Café a pris racine à Amsterdam en 2009 grâce à
          l'initiative visionnaire de Martine Postma. Depuis, il a essaimé dans
          le monde entier, rassemblant des communautés autour de l'idée simple
          mais puissante : réparer ensemble. Le 18 octobre 2009, le tout premier
          Repair Café a ouvert ses portes à Amsterdam, et depuis lors, des
          milliers de Repair Cafés ont vu le jour dans le monde entier.
          <br />
          <h2>Notre Mission</h2>
          <br />
          Chez Repair Café Courchelette, nous croyons fermement que la
          réparation est un acte puissant. Notre mission est de créer un espace
          où la communauté peut se rassembler pour réparer les objets du
          quotidien, encourager le partage de compétences et réduire notre
          empreinte environnementale. Nous nous efforçons de promouvoir une
          culture de la réparation plutôt que du remplacement, contribuant ainsi
          à un mode de vie plus durable.
          <br />
          <h2>Comment Ça Marche </h2>
          <br />
          Le Repair Café est plus qu'un lieu de réparation. C'est un espace
          d'échange, de partage de connaissances et de création de liens au sein
          de la communauté. Nos bénévoles compétents sont là pour vous aider à
          réparer vos objets, que ce soit un grille-pain, un vélo ou un
          vêtement. Tout cela est fait gratuitement, car nous croyons que la
          réparation ne devrait pas être un luxe.
          <br />
          <br />
          <h2>Rejoignez-nous !</h2>
          <br />
          Que vous soyez un bricoleur expérimenté ou que vous souhaitiez
          simplement apprendre à réparer, nous vous invitons à nous rejoindre
          chez Repair Café Courchelette. Ensemble, faisons de la durabilité une
          réalité au quotidien. Adresse : 15 Rés Emilie Hérin, 59552
          Courchelettes. Heures d'ouverture : 17 h - 19 h le dernier mardi du
          mois. Contact : Insérez les coordonnées de contact.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Apropos;
