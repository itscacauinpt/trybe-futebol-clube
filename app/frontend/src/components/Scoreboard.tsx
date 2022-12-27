import React from 'react';
import PropTypes from 'prop-types';
import { ScoreProps } from '../interfaces/IProps';

const Scoreboard = ({ homeTeam, score, setScore, qtyGoal, testId }: ScoreProps) => (
  <label htmlFor={ (homeTeam) ? 'home-team-scoreboard' : 'away-team-scoreboard' }>
    <p>Gols</p>
    <input
      data-testid={ testId }
      type="number"
      min="0"
      value={ score }
      onChange={ ({ target: { value } }) => {
        if (value < qtyGoal) {
          setScore(qtyGoal);
        } else {
          setScore(value);
        }
      } }
    />
  </label>
);

Scoreboard.propTypes = {
  homeTeam: PropTypes.bool.isRequired,
  score: PropTypes.number,
  setScore: PropTypes.func.isRequired,
  qtyGoal: PropTypes.string,
  testId: PropTypes.string.isRequired,
};

Scoreboard.defaultProps = {
  score: undefined,
  qtyGoal: undefined,
};

export default Scoreboard;
