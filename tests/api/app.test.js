import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import App from '../../src/server';

chai.use(chaiHttp);

describe('App tests', () => {
  let app;

  before(async () => {
    app = await App;
  });

  it('can get cat photos', async () => {
    const res = await chai.request(app).get('/api/photos?id=1');
    expect(res).to.have.status(200);
    expect(res.body.data).to.include('https://founded.media/hiring/photos/cats/14157413946_fea785b4d6_k.jpg');
  });

  it('can get shark photos', async () => {
    const res = await chai.request(app).get('/api/photos?id=2');
    expect(res).to.have.status(200);
    expect(res.body.data).to.include('https://founded.media/hiring/photos/sharks/11261840124_dc9ac72bbe_b.jpg');
  });

  
  it('can get mix photos', async () => {
    const res = await chai.request(app).get('/api/photos?id=3');
    expect(res).to.have.status(200);
    expect(res.body.data).to.include('https://founded.media/hiring/photos/cats/14157413946_fea785b4d6_k.jpg');
    expect(res.body.data).to.include('https://founded.media/hiring/photos/sharks/11261840124_dc9ac72bbe_b.jpg');
  });

  it('can get a bad data response', async () => {
    const res = await chai.request(app).get('/api/photos?id=4');
    expect(res).to.have.status(400);
    expect(res.body.code).to.include('error.bad-request.invalid-photos-id');
  });

  it('can get index html', async () => {
    const res = await chai.request(app).get('/');
    expect(res).to.have.status(200);
    expect(res.header['content-type']).to.include('text/html');
  });
});