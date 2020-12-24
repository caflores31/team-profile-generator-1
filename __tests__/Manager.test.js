const Manager = require ('../lib/Manager');
const { expectToBe, expectStr, expectNum } = require('../utils/expect');

test('creates a manager object', () => {
    const manager = new Manager('James', 1, 5555555555);

    expectToBe(manager.name,'James');
    expectNum(manager.id);
    expectStr(manager.email, '@');
    expectToBe(manager.role, 'Manager');
    expectNum(manager.officeNumber);
});

test('gets manager\'s name', () => {
    const manager = new Manager('James', 1, 5555555555);

    expectStr(manager.getName(), manager.name);
});

test('gets manager\'s ID', () => {
    const manager = new Manager('James', 1, 5555555555);

    expectStr(manager.getId(), `${manager.id}`);
});

test('gets manager\'s email', () => {
    const manager = new Manager('James', 1, 5555555555);

    expectStr(manager.getEmail(), manager.email);
});

test('gets manager\'s role', () => {
    const manager = new Manager('James', 1, 5555555555);

    expectStr(manager.getRole(), manager.role);
});

test('gets manager\'s office number', () => {
    const manager = new Manager('James', 1, 5555555555);

    expectStr(manager.getOfficeNumber(), `${manager.officeNumber}`);
});