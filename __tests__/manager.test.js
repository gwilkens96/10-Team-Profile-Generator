const Manager = require('../lib/manager');

test("Can add office number to constructor object", () => {
    const testValue = 2;
    const e = new Manager("Bart", 1, "test@test.com", testValue);
    expect(e.number).toBe(testValue);
  });
  
  test("getRole() should return \"Manager\"", () => {
    const testValue = "Manager";
    const e = new Manager("Mac", 1, "test@test.com", 2);
    expect(e.getRole()).toBe(testValue);
  });
  
  test("Can retrieve office number from getOffice()", () => {
    const testValue = 2;
    const e = new Manager("Wendy", 1, "test@test.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
  });
  