import { PassionLevel } from '../../model/hobby';
import * as db from './../../../db';
import Server from './../../../server';
describe('Hobby controller', () => {
  beforeAll(async () => {
    await db.initDb();
    await Server.init();
  });

  afterAll(async () => {
    await db.stopDb();
    await Server.stop();
  });

  it('Should get all hobbies', async () => {
    const res = await Server.inject({
      method: 'get',
      url: '/api/hobbies',
    });
    return expect(res.statusCode).toEqual(200);
  });

  it('Should return error without passionLevel on create Hobby', async () => {
    const res = await Server.inject({
      method: 'post',
      url: '/api/hobbies',
      payload: JSON.stringify({ name: 'Ethan', year: 2000 }),
    });
    return expect(res.result['statusCode']).toEqual(400);
  });

  it('Should return error with incorrect year on Create', async () => {
    const res = await Server.inject({
      method: 'post',
      url: '/api/hobbies',
      payload: JSON.stringify({
        passionLevel: PassionLevel.HIGH,
        year: 3006,
        name: 'Clarise',
      }),
    });
    return expect(res.result['statusCode']).toEqual(400);
  });

  it('Should create a Hobby with a correct payload', async () => {
    const res = await Server.inject({
      method: 'post',
      url: '/api/hobbies',
      payload: JSON.stringify({
        passionLevel: PassionLevel.HIGH,
        year: 2006,
        name: 'Clarise',
      }),
    });
    return expect(res.result['errors'].length).toEqual(0);
  });
});
