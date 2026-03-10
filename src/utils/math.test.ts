import { add,divide,isEven,multiply } from "./math";

describe ('Math utilities',()=>{

    describe('add',()=>{
        it('should add two numbers',()=>{
            expect(add(2,3)).toBe(5);
        })
        it('should add handle negative numbers',()=>{
            expect(add(-1,1)).toBe(0);
        })
    })
    
    describe('multiply',()=>{
        it('should multiply two numbers',()=>{
            expect(multiply(2,3)).toBe(6);
        })
        it('should multiply zero when multiplied by zero',()=>{
            expect(multiply(2,0)).toBe(0);
        })

    })
      describe('divide()', () => {
    it('should divide correctly', () => {
      expect(divide(10, 2)).toBe(5);
    });

    it('should throw when dividing by zero', () => {
      expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
    });
  });

  describe('isEven()', () => {
    it('should return true for even numbers', () => {
      expect(isEven(3)).toBe(true);
    });

    it('should return false for odd numbers', () => {
      expect(isEven(6)).toBe(false);
    });
  });

})