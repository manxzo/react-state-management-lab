// src/App.jsx
import { useState } from "react";
import ZombieFighters from "./components/zombieFighters/zombieFighters";
import "./App.css";

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState([
    {
      id: 1,
      name: "Survivor",
      price: 12,
      strength: 6,
      agility: 4,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png",
    },
    {
      id: 2,
      name: "Scavenger",
      price: 10,
      strength: 5,
      agility: 5,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png",
    },
    {
      id: 3,
      name: "Shadow",
      price: 18,
      strength: 7,
      agility: 8,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png",
    },
    {
      id: 4,
      name: "Tracker",
      price: 14,
      strength: 7,
      agility: 6,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png",
    },
    {
      id: 5,
      name: "Sharpshooter",
      price: 20,
      strength: 6,
      agility: 8,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png",
    },
    {
      id: 6,
      name: "Medic",
      price: 15,
      strength: 5,
      agility: 7,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png",
    },
    {
      id: 7,
      name: "Engineer",
      price: 16,
      strength: 6,
      agility: 5,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png",
    },
    {
      id: 8,
      name: "Brawler",
      price: 11,
      strength: 8,
      agility: 3,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png",
    },
    {
      id: 9,
      name: "Infiltrator",
      price: 17,
      strength: 5,
      agility: 9,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png",
    },
    {
      id: 10,
      name: "Leader",
      price: 22,
      strength: 7,
      agility: 6,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png",
    },
  ]);
  const totalStrength = team.reduce((total, zombie) => {
    return zombie.strength + total;
  }, 0);
  const totalAgility = team.reduce((total, zombie) => {
    return zombie.agility + total;
  }, 0);
  const handleAddFighter = (newZombie) => {
    const newTeam = [...team, newZombie];
    const newFighters = zombieFighters.filter(
      (zombie) => zombie.id !== newZombie.id
    );
    const newMoney = money - newZombie.price;
    setZombieFighters(newFighters);
    setTeam(newTeam);
    setMoney(newMoney);
  };
  const handleRemoveFighter = (remZombie) => {
    const newTeam = team.filter((zombie) => zombie.id !== remZombie.id);
    const newFighters = [...zombieFighters, remZombie];
    const newMoney = money + remZombie.price;
    setZombieFighters(newFighters);
    setTeam(newTeam);
    setMoney(newMoney);
  };
  return (
    <section>
      <div>
        <h1>
          Zombie Fighters
          <br />
        </h1>
      </div>
      <div>
        <h2>
          Money:{money}
          <br />
          Team Strength:{totalStrength}
          <br />
          Team Agility:{totalAgility}
        </h2>
      </div>
      <div>
        <h1>Team Zombies</h1>
        <ul>
          {team.length>0 ? team.map((zombieFighter) => (
            <li key={zombieFighter.id}>
              <ZombieFighters zombieInfo={zombieFighter} />
              <button onClick={() => handleRemoveFighter(zombieFighter)}>
                Remove
              </button>
            </li>
          )):<h2>Select Zombies</h2>}
        </ul>
      </div>
      <div>
        <h1>Available Zombies</h1>
        <ul>
          {zombieFighters.map((zombieFighter) => (
            <li key={zombieFighter.id}>
              <ZombieFighters zombieInfo={zombieFighter} />
              <button onClick={() =>money>=zombieFighter.price? handleAddFighter(zombieFighter):console.log("not enough money!")}>
                Add
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default App;
