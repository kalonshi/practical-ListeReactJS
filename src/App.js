import { useState } from "react";

function App() {
  //State ( état, données dynamique)

  const [fruits, setFruits] = useState([
    { id: 1, nom: "Ananas" },
    { id: 2, nom: "Banane" },
    { id: 3, nom: "Mangue" },
    { id: 4, nom: "Papaye" },
    { id: 5, nom: "Orange" }
  ]);

  const [nouveauFruit, setNouveauFruit] = useState(" apple");

  // Comportements
  const handleDeleteFruit = (id) => {
    console.log("handleDeleteFruit   =" + id);
    //1.copy du state
    const fruitCopy = [...fruits]; //Spread operator pour créer une copie d'un tableau

    // 2.manipuler le state
    const fruitCopyUpdated = fruitCopy.filter((fruit) => fruit.id !== id); // methode filter() des tableau JS créer un deuxieme tableau a partir du premier selon des conditions

    //3. modifier mon state avec le setter
    setFruits(fruitCopyUpdated); // Mis à jour des données
    setNouveauFruit("");
  };

  const handleSubmitFruit = (event) => {
    event.preventDefault();
    //alert("addFruit : ");
    //  console.log(inputRef.current.value);

    //1. copie du state
    const fruitsCopy = [...fruits]; //Spread operator pour créer une copie d'un tableau

    //2. manipulation sur la copie du state

    const id = new Date().getTime();
    const nom = nouveauFruit;
    const fruitAAjouter = { id, nom };
    fruitsCopy.push(fruitAAjouter);

    //3. modifier le state avec le setter
    setFruits(fruitsCopy); // Ajouter un nouveau fruit
    setNouveauFruit(" "); //Pour rafraichir l'input
  };
  const handleChange = (event) => {
    console.log(event.target.value);
    setNouveauFruit(event.target.value);
  };

  // Render ( affichage) Les accolades permettent de récupérer un state
  return (
    <div>
      <h1> Liste de Fruits Exotiques </h1>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id}>
            {fruit.nom}{" "}
            <button onClick={() => handleDeleteFruit(fruit.id)}>X</button>
          </li>
        ))}
      </ul>
      <form action="submit" onSubmit={handleSubmitFruit}>
        <input
          value={nouveauFruit}
          type="text"
          placeholder="ajouter un fruit"
          onChange={handleChange}
        />
        <button>ajouter</button>
      </form>
    </div>
  );
}
export default App;

//Gestion du formulaire:

//1. Creation du formulaire
//2. Soumission  du formulaire
//3. Collecte des données du formulaire
//3a. méthode 1:documentGetElementById "React" avec useRef
//3b. méthode 2: sync decendante / ascendante (onChange / handleChange)
