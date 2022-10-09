import { NextFunction, Request, Response } from 'express';
import { IMatches } from '../../interfaces/IMatch';
import MatchModel from '../../model/matches/MatchModel';

export default async function validateTeams(req: Request, res: Response, next: NextFunction) {
  const model = new MatchModel();

  const team: IMatches = req.body;
  const { awayTeam, homeTeam } = team;

  const teamHome = await model.findOne(homeTeam);
  const teamAway = await model.findOne(awayTeam);

  if (!teamHome || !teamAway) {
    return res.status(401).json({ message: 'There is no team with such id!' });
  }

  if (Number(awayTeam) === Number(homeTeam)) {
    return res
      .status(401)
      .json({ message: 'It is not possible to create a match with two equal teams' });
  }

  next();
}
