import React from 'react';
import { Link } from 'react-router-dom';

const MatchesBtn: React.FunctionComponent = () => (
  <Link data-testid="header__show_matches_btn" to="/matches">
    Partidas
  </Link>
);

export default MatchesBtn;
