
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Game = () => {
  const dispatch = useDispatch();
  const { count, number, message, initialState } = useSelector((state) => state.game);

  const Guess = () => {
    if (count === null) return;
    dispatch({ type: 'GUESS_NUMBER', payload: count });
  };

  const Restart = () => {
    dispatch({ type: 'RESTART', payload: { ...initialState, count: null } });
  };

  return (
    <div>
      <h1>Отгадайте число от 0 до 100</h1>
      <form onSubmit={Guess}>
        <input type="number" min="0" max="100" required />
        <button type="submit">Отгадать</button>
      </form>
      {message && <h2>{message}</h2>}
      {message && <button onClick={Restart}>Заново</button>}
    </div>
  );
};


export default Game;
