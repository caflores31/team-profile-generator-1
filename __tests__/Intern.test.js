const Intern = require('../lib/Intern')
const { expectToBe, expectStr, expectNum } = require('../utils/expect');

test('creates an intern object', () => {
    const intern = new Intern('James', 1, 'UCF');

    expectToBe(intern.name, 'James');
    expectNum(intern.id);
    expectStr(intern.email, '@');
    expectToBe(intern.role, 'Intern');
    expectToBe(intern.school, 'UCF');
});

test('gets intern\'s name', () => {
    const intern = new Intern('James', 1, 'UCF');

    expectStr(intern.getName(), intern.name);
});

test('gets intern\'s ID', () => {
    const intern = new Intern('James', 1, 'UCF');

    expectStr(intern.getId(), `${intern.id}`);
});

test('gets intern\'s email', () => {
    const intern = new Intern('James', 1, 'UCF');
    
    expectStr(intern.getEmail(), intern.email);
});

test('gets intern\'s role', () => {
    const intern = new Intern('James', 1, 'UFC');

    expectStr(intern.getRole(), intern.role);
});

test('gets intern\'s school', () => {
    const intern = new Intern('James', 1, 'UCF');
    
    expectStr(intern.getSchool(), intern.school);
});