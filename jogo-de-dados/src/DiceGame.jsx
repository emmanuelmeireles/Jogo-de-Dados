import React, { useState } from 'react';

const DiceGame = () => {
  const [dice1, setDice1] = useState(1);
  const [dice2, setDice2] = useState(1);
  const [message, setMessage] = useState('');
  const [wins, setWins] = useState(0);
  const [plays, setPlays] = useState(0);

  const rollDice = () => {
    const newDice1 = Math.floor(Math.random() * 6) + 1;
    const newDice2 = Math.floor(Math.random() * 6) + 1;
    setDice1(newDice1);
    setDice2(newDice2);

    const sum = newDice1 + newDice2;
    if (sum === 7 || sum === 11) {
      setMessage('Você ganhou!');
      setWins(wins + 1);
    } else {
      setMessage('Você perdeu!');
    }
    setPlays(plays + 1);
  };

  const winPercentage = plays === 0 ? 0 : ((wins / plays) * 100).toFixed(2);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Jogo de Dados</h1>
      <div>
        <img src={`https://www.random.org/dice/dice${dice1}.png`} alt={`Dado 1: ${dice1}`} />
        <img src={`https://www.random.org/dice/dice${dice2}.png`} alt={`Dado 2: ${dice2}`} />
      </div>
      <button onClick={rollDice} style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px' }}>
        Jogar
      </button>
      <h2>{message}</h2>
      <p>Vitórias: {wins}</p>
      <p>Total de Jogadas: {plays}</p>
      <p>Percentual de Vitórias: {winPercentage}%</p>
    </div>
  );
};

export default DiceGame;
