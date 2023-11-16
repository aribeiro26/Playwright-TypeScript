"use strict";
var faker = require("faker-br");
var FakerCompleteName = function () { return faker.name.findName(); };
var FakerFirstName = function () { return faker.name.firstName(); };
var FakerLastName = function () { return faker.name.lastName(); };
var FakerPhone = function () { return faker.phone.phoneNumber(); };
var FakerCPF = function () { return faker.br.cpf(); };
var FakerEmail = function () { return faker.internet.email(); };
var FakerProductName = function () { return faker.commerce.product(); };
var FakerLorem = function () { return faker.lorem.paragraph(); };
module.exports = {
    FakerCompleteName: FakerCompleteName,
    FakerFirstName: FakerFirstName,
    FakerLastName: FakerLastName,
    FakerPhone: FakerPhone,
    FakerCPF: FakerCPF,
    FakerEmail: FakerEmail,
    FakerProductName: FakerProductName,
    FakerLorem: FakerLorem,
};
