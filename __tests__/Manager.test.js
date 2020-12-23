const Manager = require ('../lib/Manager');
 
test('creates a manager object', () => {
    const manager = new Manager('James', 1, 5555555555);

    expect(manager.name).toBe('James');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.stringContaining('@'));
    expect(manager.role).toEqual('Manager');
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets manager\'s name', () => {
    const manager = new Manager('James', 1, 5555555555);

    expect(manager.getName()).toEqual(expect.stringContaining(manager.name));
});

test('gets manager\'s ID', () => {
    const manager = new Manager('James', 1, 5555555555);

    expect(manager.getId()).toEqual(expect.stringContaining(`${manager.id}`));
});

test('gets manager\'s email', () => {
    const manager = new Manager('James', 1, 5555555555);

    expect(manager.getEmail()).toEqual(expect.stringContaining(manager.email));
});

test('gets manager\'s role', () => {
    const manager = new Manager('James', 1, 5555555555);

    expect(manager.getRole()).toEqual(expect.stringContaining(manager.role));
});

test('gets manager\'s office number', () => {
    const manager = new Manager('James', 1, 5555555555);

    expect(manager.getOfficeNumber()).toEqual(expect.stringContaining(`${manager.officeNumber}`));
});