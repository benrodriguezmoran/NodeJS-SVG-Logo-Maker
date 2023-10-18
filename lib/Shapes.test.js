// Constructor Arithmetic is imported.
const {Circle, Square, Triangle} = require('../lib/Shapes');

// A testing suite for Arithmetic is created.
describe('Shapes', () => {
  // A test is created to check that sum does in fact return the two numbers added together.
  describe('Triangle', () => {
    it('should return a triangle with background color of blue', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
  });
});


