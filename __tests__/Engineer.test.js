const Engineer = require('../lib/Engineer');
const { expectToBe, expectStr, expectNum } = require('../utils/expect');

test('creates an engineer object', () => {
    const engineer = new Engineer('James', 1, 'jamescodes');

    expectToBe(engineer.name, 'James');
    expectNum(engineer.id);
    expectStr(engineer.email, '@');
    expectToBe(engineer.role, 'Engineer');
});

test('gets engineer\'s name', () => {
    const engineer = new Engineer('James', 1, 'jamescodes');

    expectStr(engineer.getName(), engineer.name);
});

test('gets engineer\'s ID', () => {
    const engineer = new Engineer('James', 1, 'jamescodes');

    expectStr(engineer.getId(), `${engineer.id}`);
});

test('gets engineer\'s email', () => {
    const engineer = new Engineer('James', 1, 'jamescodes');

    expectStr(engineer.getEmail(), engineer.email);
});

test('gets engineer\'s role', () => {
    const engineer = new Engineer('James', 1, 'jamescodes');

    expectStr(engineer.getRole(), engineer.role);
});

test('gets engineer\'s github', () => {
    const engineer = new Engineer('James', 1, 'jamescodes');

    expectStr(engineer.getGithub(), engineer.github);
});