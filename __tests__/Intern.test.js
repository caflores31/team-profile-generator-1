const Intern = require('../lib/Intern')

test('creates an intern object', () => {
    const intern = new Intern('James', 1, 'UCF');

    expect(intern.name).toBe('James');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.stringContaining('@'));
    expect(intern.role).toEqual('Intern');
    expect(intern.school).toEqual('UCF');
});

test('gets intern\'s name', () => {
    const intern = new Intern('James', 1, 'UCF');

    expect(intern.getName()).toEqual(expect.stringContaining(intern.name));
});

test('gets intern\'s ID', () => {
    const intern = new Intern('James', 1, 'UCF');

    expect(intern.getId()).toEqual(expect.stringContaining(`${intern.id}`));
});

test('gets intern\'s email', () => {
    const intern = new Intern('James', 1, 'UCF');
    
    expect(intern.getEmail()).toEqual(expect.stringContaining(intern.email));
});

test('gets intern\'s role', () => {
    const intern = new Intern('James', 1, 'UFC');

    expect(intern.getRole()).toEqual(expect.stringContaining(intern.role));
});

test('gets intern\'s school', () => {
    const intern = new Intern('James', 1, 'UCF');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school));
});