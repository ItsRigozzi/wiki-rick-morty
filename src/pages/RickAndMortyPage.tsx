import { useState } from "react";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonPage,
  IonSpinner,
  IonText,
  IonTitle,
  IonToolbar
} from "@ionic/react";

import "./RickAndMortyPage.css";


interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
}

const RickAndMortyPage: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState("");

  const cargarPersonajes = () => {
    setCargando(true);
    setError("");

    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((datos) => {
        setCharacters(datos.results); //sin .results no se generan los datos
      })
      .catch((error) => {
        console.error(error);
        setError("Ocurrió un error al cargar los personajes.");
      })
      .finally(() => {
        setCargando(false);
      });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="tertiary">
          <IonTitle>Wiki Rick and Morty</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <div className="intro">
          <h1>Personajes de la Serie</h1>
          <p>Presiona el botón para descubrir los personajes del multiverso.</p>

          <IonButton expand="block" onClick={cargarPersonajes} disabled={cargando}>
            Cargar Personajes
          </IonButton>
        </div>

        {cargando && (
          <div className="estado">
            <IonSpinner name="crescent" />
            <p>Abriendo portales...</p>
          </div>
        )}

        {error && (
          <IonText color="danger">
            <p className="error-text">{error}</p>
          </IonText>
        )}

        <div className="characters-container">
          {characters.map((character) => (
            <IonCard key={character.id} className="character-card">
              <img src={character.image} alt={character.name} />
              
              <IonCardHeader>
                <IonCardTitle>{character.name}</IonCardTitle>
                <IonCardSubtitle>
                  {character.species} - {character.status}
                </IonCardSubtitle>
              </IonCardHeader>

              <IonCardContent>
                ID en la base de datos intergaláctica: {character.id}
              </IonCardContent>
            </IonCard>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default RickAndMortyPage;