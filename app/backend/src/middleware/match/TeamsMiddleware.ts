import { NextFunction, Request, Response } from 'express';
import { IMatches } from '../../interfaces/IMatch';
import MatchModel from '../../model/matches/MatchModel';

async function validateEqualTeams(req: Request, res: Response, next: NextFunction) {
  const team: IMatches = req.body;
  const { awayTeam, homeTeam } = team;

  if (awayTeam === homeTeam) {
    return res
      .status(401)
      .json({ message: 'It is not possible to create a match with two equal teams' });
  }

  next();
}

async function validateTeams(req: Request, res: Response, next: NextFunction) {
  const model = new MatchModel();
  const match: IMatches = req.body;

  const teamHome = await model.findOne(match.homeTeam);
  const teamAway = await model.findOne(match.awayTeam);

  if (!teamHome || !teamAway) {
    return res.status(404).json({ message: 'There is no team with such id!' });
  }

  next();
}

export { validateEqualTeams, validateTeams };
