// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("", () => {});

    })    
})


describe("Iteration 2", () => {
  describe("Function divide", () => {

    it("should be defined", () => {
      expect(divide).toBeDefined();
    });

    it("should take two arguments", () => {
      expect(divide.length).toBe(2);
    });

    it("should return the division of two numbers", () => {
      expect(divide(10, 2)).toEqual(5);
      expect(divide(20, 4)).toEqual(5);
      expect(divide(9, 3)).toEqual(3);
    });

    it("should return undefined if any argument is not provided", () => {
      expect(divide(10)).toEqual(undefined);
      expect(divide()).toEqual(undefined);
      expect(divide(undefined, 2)).toEqual(undefined);
    });

  });
});


describe("Iteration 3", () => {
  describe("Function calculateArea", () => {

    it("should be defined", () => {
      expect(calculateArea).toBeDefined();
    });

    it("should take two arguments", () => {
      expect(calculateArea.length).toBe(2);
    });

    it("should return the area of a rectangle", () => {
      expect(calculateArea(5, 3)).toEqual(15);
      expect(calculateArea(10, 4)).toEqual(40);
      expect(calculateArea(7, 7)).toEqual(49);
    });

    it("should return undefined if any argument is not provided", () => {
      expect(calculateArea(5)).toEqual(undefined);
      expect(calculateArea()).toEqual(undefined);
      expect(calculateArea(undefined, 3)).toEqual(undefined);
    });

  });
});
