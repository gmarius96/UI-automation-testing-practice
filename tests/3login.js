const { spec,request } = require('pactum');
const baseUrl='https://test-api.k6.io';
const incorrectCredentials={"non_field_errors": [
    "Incorrect username or password."
]}
describe('LogingIn', () => {
    before(async () => {
    request.setDefaultTimeout(10000);
});
it('Login with correct credentials', async () => {
    await spec()
    .post(`${baseUrl}/auth/basic/login/`)
    .withBody({
        "username": "gmgm09",
        "password": "pwd123"
    })
    .expectStatus(200)
})
it('Login with incorrect credentials', async () => {
    await spec()
    .post(`${baseUrl}/auth/basic/login/`)
    .withBody({
        "username": "gmgm091",
        "password": "pwd1231"
    })
    .expectStatus(400)
    .expectBody(incorrectCredentials)
})
})
