const { spec,request } = require('pactum');
const baseUrl='https://test-api.k6.io';
describe('Login with Token', () => {
before(async () => {
    request.setDefaultTimeout(10000);
});
it('Login k6 JWT', async () => {
    const loginResponse=await spec()
    .post(`${baseUrl}/auth/token/login/`)
    .withBody({
        "username": "Betsy_Wisozk79",
        "password": "pwd123"
        }) 
    .expectStatus(200);
    const tokenId=loginResponse.body.access;
    await spec()
    .get(`${baseUrl}/my/crocodiles/`)
    .withHeaders("Authorization", "Bearer " + tokenId)
    .expectStatus(200);
})
})