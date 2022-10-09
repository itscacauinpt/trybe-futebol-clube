import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';

import UserModel from '../model/user/UserModel';
import { login, adm } from './mocks/userMock';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testing the Login Endpoint', () => {

  before(async () => sinon.stub(UserModel.prototype, 'findOne').resolves(adm));
  after(() => (UserModel.prototype.findOne as sinon.SinonStub).restore());

  it('Endpoint POST succeeded', async () => {
    const post = await chai.request(app).post('/login').send(login.admin);

    expect(post.status).to.equal(200);
    expect(post.body).to.have.property('token');
  });

  it('Endpoint POST failed, requests not filled', async () => {
    const post = await chai.request(app).post('/login').send();

    expect(post.status).to.equal(400);
    expect(post.body).to.deep.equal({ message: 'All fields must be filled' });
  });

  it('Endpoint POST failed, invalid email', async () => {
    const post = await chai.request(app).post('/login').send(login.errorEmail);

    expect(post.status).to.equal(400);
    expect(post.body).to.deep.equal({message: 'Incorrect email or password'});
  });

  it('Endpoint POST failed, invalid password', async () => {
    const post = await chai.request(app).post('/login').send(login.errorPassword);

    expect(post.status).to.equal(400);
    expect(post.body).to.deep.equal({message: 'Incorrect email or password'});
  });
});
