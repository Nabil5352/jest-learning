const functions = require('./functions');

beforeAll(()=>initTests());
afterAll(()=>closeTest());

const initTests = () => console.log('Test started');
const closeTest = () => console.log('Test closed');

// toBe
test('Adds 2 + 2 equal 4', () => {
	expect(functions.add(2,2)).toBe(4);
});

// not
test('Adds 2 + 2 not equal 5', () => {
	expect(functions.add(2,2)).not.toBe(5);
});

// toBeNull
test('Equals to null', () => {
	expect(functions.isNull()).toBeNull();
});

// toBeFalsy
test('To be falsy', () => {
	expect(functions.checkValue(0)).toBeFalsy();
});

// toEqual
test('User Should Be Object', () => {
	expect(functions.createUser()).toEqual({ firstName: 'Nabil', lastName: 'Ahmad' });
});

// toBeLessThan
test('Should be under 1000', () => {
	const load1 = 600;
	const load2 = 200;
	expect(load1+load2).toBeLessThan(1000);
});

// toBeLessThanOrEqual
test('Should be less than or euqal 1000', () => {
	const load1 = 800;
	const load2 = 200;
	expect(load1+load2).toBeLessThanOrEqual(1000);
});

// regex
test('There is no I in team', () => {
	expect('team').not.toMatch(/I/i);
});

// array
test('Admin shound be in usernames', () => {
	usernames = ['jhon','doe','admin','jane'];
	expect(usernames).toContain('admin');
});

// working with async data

// Promise
test('User fetched name should be Leanne Graham', () => {
	expect.assertions(1);
	return functions.fetchUser()
					.then(data => {
						expect(data.name).toEqual('Leanne Graham');
					})
});

// Async Await
test('User fetched name should be Leanne Graham (Aysnc Await)', async () => {
	expect.assertions(1);
	const data= await functions.fetchUser();
	expect(data.name).toEqual('Leanne Graham');
});