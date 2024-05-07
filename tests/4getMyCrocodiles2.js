// TokenID is declared outside before hook so that it can be used in different tests
const { spec,request } = require('pactum');
const baseUrl='https://test-api.k6.io';
describe('Login with Token', () => {
let tokenId=""
    before(async () => {
    request.setDefaultTimeout(10000);
    const loginResponse=await spec()
    .post(`${baseUrl}/auth/token/login/`)
    .withBody({
        "username": "Betsy_Wisozk79",
        "password": "pwd123"
        }) 
    .expectStatus(200);
    tokenId=loginResponse.body.access;
});
it('Login k6 JWT', async () => {
    await spec()
    .get(`${baseUrl}/my/crocodiles/`)
    .withHeaders("Authorization", "Bearer " + tokenId)
    .expectStatus(200);
})
})