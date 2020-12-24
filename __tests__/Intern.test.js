const Intern = require('../lib/Intern')
const { expectToBe, expectStr, expectNum } = require('../utils/expect');

const intern = new Intern('James', 1, 'UCF');

test('creates an intern object', () => {
    expectToBe(intern.name, 'James');
    expectNum(intern.id);
    expectStr(intern.email, '@');
    expectToBe(intern.role, 'Intern');
    expectToBe(intern.school, 'UCF');
});

test('gets intern\'s name', () => {
    expectStr(intern.getName(), intern.name);
});

test('gets intern\'s ID', () => {
    expectStr(intern.getId(), `${intern.id}`);
});

test('gets intern\'s email', () => {
    expectStr(intern.getEmail(), intern.email);
});

test('gets intern\'s role', () => {
    expectStr(intern.getRole(), intern.role);
});

test('gets intern\'s school', () => {
    expectStr(intern.getSchool(), intern.school);
});