const { spec,request } = require('pactum');
const { faker } = require('@faker-js/faker');
const validCredentials = require ('../Data/response/validAccount.json')
const randomFirstName=faker.person.firstName();
const randomLastName=faker.person.lastName();
const randomUn=`${randomFirstName}+${randomLastName}`
const randomEmail=faker.internet.email();
const baseUrl='https://test-api.k6.io';

describe('Registration', () => {
    before(async () => {
    request.setDefaultTimeout(10000);
});
it('Registration with valid credentials from file', async () => {
    await spec()
    .post(`${baseUrl}/user/register/`)
    .withBody(validCredentials)
    .expectStatus(201)
})
it('Registration with valid credentials - FakerJs', async () => {
    await spec()
    .post(`${baseUrl}/user/register/`)
    .withBody({
        "username": `${randomUn}`,
        "first_name": `${randomFirstName}`,
        "last_name": `${randomLastName}`,
        "email": `${randomEmail}`,
        "password": "pwd123"
    })
    .expectStatus(201)
})
})
