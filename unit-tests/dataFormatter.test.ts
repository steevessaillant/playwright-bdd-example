// dataFormatter.test.ts
import { fullNameFormatter } from '../src/dataFormatter';
describe('fullNameFormatter', () => {
  
    //covered by BDD e2e as well
    it('should format a full name with capitalized first and last names', () => {
    const input = 'john doe';
    const output = fullNameFormatter(input);
    expect(output).toBe('John Doe');
  });

  it('should handle input with mixed case', () => {
    const input = 'jOhN dOe';
    const output = fullNameFormatter(input);
    expect(output).toBe('John Doe');
  });

  ///edge cases

  it('should throw an error when single-word input', () => {
    const input = 'john';
    expect(() => fullNameFormatter(input)).toThrow('Missing last name');
  });

  it('should handle input with more than two words', () => {
    const input = 'john middle doe';
    const output = fullNameFormatter(input);
    expect(output).toBe('John Middle Doe');
  });

  it('should throw an error when empty input', () => {
    const input = '';
    // Wrap the function call in a function to assert the error
    expect(() => fullNameFormatter(input)).toThrow('Empty input');
  });

  it('should handle input with extra spaces', () => {
    const input = '  john     doe  ';
    const output = fullNameFormatter(input);
    expect(output).toBe('John Doe');
  });

  
});
