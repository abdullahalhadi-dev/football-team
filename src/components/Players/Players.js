import React, { useEffect, useState } from "react";
import playersData from "../../FakaData/playersData.json";
import Player from "../Player/Player";
import "./Players.style.css";
import PlayersCart from "./PlayersCart/PlayersCart";

const Players = () => {
  const [players, setPlayers] = useState([]);
  const [addPlayer, setAddPlayer] = useState([]);

  useEffect(() => {
    setPlayers(playersData);
  }, []);

  const handleAddPlayer = (player)=>{
    const newPlayer = [...addPlayer, player];
    setAddPlayer(newPlayer);
  }

  console.log(addPlayer)

  return (
    <div style={{ display: "flex" }}>
      <div>
        <h2 className="title">Our Team</h2>
        <div className="player-container">
          {players.map((player) => (
            <Player player={player} key={player.id} handleAddPlayer={handleAddPlayer} />
          ))}
        </div>
      </div>

      <div>
        <PlayersCart playerCart={addPlayer}/>
      </div>
    </div>
  );
};

export default Players;
