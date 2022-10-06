import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';

// import User from '../database/models/User';
import UserModel from '../model/user/UserModel';
import { login, adm } from './mocks/userMock';

// import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testing the Login Endpoint', () => {

  before(async () => sinon.stub(UserModel.prototype, 'findOne').resolves(adm));
  after(() => (UserModel.prototype.findOne as sinon.SinonStub).restore());

  it('Endpoint POST, login com sucesso', async () => {
    const post = await chai.request(app).post('/login').send(login.admin);

    console.log(post.status)

    expect(post.status).to.equal(200);
    // expect(post.body).to.deep.equal(adm);
  });
});
