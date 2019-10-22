const StringFunction = require('./string');

// defined
test('reverse function defined', ()=>{
	expect(StringFunction).toBeDefined();
});

// match
test('nabil should be liban', ()=>{
	expect(StringFunction('nabil')).toBe('liban');
});