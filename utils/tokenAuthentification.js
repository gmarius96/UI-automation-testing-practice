const baseUrl='https://test-api.k6.io';
const { spec,request } = require('pactum');
async function doLogin(username, password)
{
    const loginResponse=await spec()
    .post(`${baseUrl}/auth/token/login/`)
    .withBody({
        "username": username,
        "password": password
        }) 
    .expectStatus(200);
    return loginResponse.body.access;
}
module.exports = {doLogin} //To be able to use the function in different tests