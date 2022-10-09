import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import MatchModel from '../model/matches/MatchModel';
import { getMatches, saveM } from './mocks/matchesMock';

// import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testing the Match Endpoint', () => {

  describe('Endpoint GET/matches', () => {
    before(async () => sinon.stub(MatchModel.prototype, 'findAll').resolves(getMatches));
    after(() => (MatchModel.prototype.findAll as sinon.SinonStub).restore());

    it('GET/matches succeeded', async () => {
      const get = await chai.request(app).get('/matches');

      expect(get.status).to.equal(200);
      expect(get.body).to.be.an('array');
      expect(get.body).to.be.deep.equal(getMatches);
    });
  });

  // describe('Endpoint POST/matches', () => {
  //   before(async () => sinon.stub(MatchModel.prototype, 'saveMatch').resolves(saveM));
  //   after(() => (MatchModel.prototype.saveMatch as sinon.SinonStub).restore());

  //   it('POST/matches succeeded', async () => {
  //     const post = await chai.request(app).get('/matches').send({
  //       "homeTeam": 16,
  //       "awayTeam": 8,
  //       "homeTeamGoals": 2,
  //       "awayTeamGoals": 2,
  //       "inProgress": true
  //     });

  //     console.log(post.status);
  //     console.log(post.body);
  //   })
  // })

  // describe('Endpoint PATCH/matches/:id', () => {
  //   before(async () => sinon.stub(MatchModel.prototype, 'updateMatch').resolves(upMatch));
  //   after(() => (MatchModel.prototype.updateMatch as sinon.SinonStub).restore());
  // })
});
