// Login function is defined in utils/auth.js and we call it here
const { spec,request } = require('pactum');
const baseUrl='https://test-api.k6.io';
const {doLogin}=require('../utils/tokenAuthentification')
describe('Create crocodile', () => {

    before(async () => {
    request.setDefaultTimeout(10000);
    tokenId=await doLogin("Betsy_Wisozk79", "pwd123");
});
it('Get my crocodiles', async () => {
    await spec()
    .get(`${baseUrl}/my/crocodiles/`)
    .withHeaders("Authorization", "Bearer " + tokenId)
    .expectStatus(200);
})
it('Create a new crocodiles', async () => {
    await spec()
    .post(`${baseUrl}/my/crocodiles/`)
    .withHeaders("Authorization", "Bearer " + tokenId)
    .withBody({
        "id": 13553944,
        "name": "Brian",
        "sex": "M",
        "date_of_birth": "1996-04-22",
        "age": 28
    })
    .expectStatus(201);
})
it('Update Crocodile name and sex', async () => {
    await spec()
    .put(`${baseUrl}/my/crocodiles/13553944/`)
    .withHeaders("Authorization", "Bearer " + tokenId)
    .withBody({
        "id": "200",
        "name": "MrCrocodilo",
        "sex": "M",
        "date_of_birth": "1888-12-30",
        "age": "132"
    })
    .expectStatus(200)
})
})
