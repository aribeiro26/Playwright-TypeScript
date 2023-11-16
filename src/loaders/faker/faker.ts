const faker = require("faker-br")
const FakerCompleteName = () => faker.name.findName()
const FakerFirstName = () => faker.name.firstName()
const FakerLastName = () => faker.name.lastName()
const FakerPhone = () => faker.phone.phoneNumber()
const FakerCPF = () => faker.br.cpf()
const FakerEmail = () => faker.internet.email()
const FakerProductName = () => faker.commerce.product()
const FakerLorem = () => faker.lorem.paragraph()
module.exports = {
    FakerCompleteName,
    FakerFirstName,
    FakerLastName,
    FakerPhone,
    FakerCPF,
    FakerEmail,
    FakerProductName,
    FakerLorem,
}
