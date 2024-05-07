const { spec,request } = require('pactum');
const { specificCrocodile } = require('../Data/response/expectedCrocodile');
const baseUrl='https://test-api.k6.io';
const crocodileSchema=require('../Data/response/crocodileschema.json')
describe('Get crocodiles', () => {
    before(async () => {
    request.setDefaultTimeout(10000);
});
it('Get all crocodiles', async () => {
    await spec()
    .get(`${baseUrl}/public/crocodiles/`)
    .expectStatus(200)
    .expectBodyContains(specificCrocodile)
})
it('Get certain crocodile by id', async () => {
  await spec()
    .get(`${baseUrl}/public/crocodiles/5/`)
    .expectStatus(200)
    .expectBody(specificCrocodile)
})
it ('Get all crocodiles schema validation', async () => {
  await spec()
    .get(`${baseUrl}/public/crocodiles/5/`)
    .expectStatus(200)
    .expectJsonSchema(crocodileSchema)
})
})
