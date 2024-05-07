// Login function is defined in utils/auth.js and we call it here
const { spec,request } = require('pactum');
const baseUrl='https://test-api.k6.io';
const {doLogin}=require('../utils/tokenAuthentification')
describe('Login with Token', () => {

    before(async () => {
    request.setDefaultTimeout(10000);
    tokenId=await doLogin("Betsy_Wisozk79", "pwd123");
});
it('Login k6 JWT', async () => {
    await spec()
    .get(`${baseUrl}/my/crocodiles/`)
    .withHeaders("Authorization", "Bearer " + tokenId)
    .expectStatus(200);
})
})