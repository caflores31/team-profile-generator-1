const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('James', 1, 'jamescodes');

    expect(engineer.name).toBe('James');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.stringContaining('@'));
    expect(engineer.role).toEqual('Engineer');
});

test('gets engineer\'s name', () => {
    const engineer = new Engineer('James', 1, 'jamescodes');

    expect(engineer.getName()).toEqual(expect.stringContaining(engineer.name));
});

test('gets engineer\'s ID', () => {
    const engineer = new Engineer('James', 1, 'jamescodes');

    expect(engineer.getId()).toEqual(expect.stringContaining(`${engineer.id}`));
});

test('gets engineer\'s email', () => {
    const engineer = new Engineer('James', 1, 'jamescodes');

    expect(engineer.getEmail()).toEqual(expect.stringContaining(engineer.email));
});

test('gets engineer\'s role', () => {
    const engineer = new Engineer('James', 1, 'jamescodes');

    expect(engineer.getRole()).toEqual(expect.stringContaining(engineer.role));
});

test('gets engineer\'s github', () => {
    const engineer = new Engineer('James', 1, 'jamescodes');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github));
});