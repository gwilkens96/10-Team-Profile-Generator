const Employee = require('../lib/employee');

test('Can build Employee object', () => {
    const e = new Employee();
    expect(typeof(e)).toBe('object');
});

test("Can add name to constructor object", () => {
    const name = "Jake";
    const e = new Employee(name);
    expect(e.name).toBe(name);
  });

  test("Can add id to constructor object", () => {
    const testValue = 100;
    const e = new Employee("Don", testValue);
    expect(e.id).toBe(testValue);
  });
  
  test("Can add email to constructor object", () => {
    const testValue = "test@test.com";
    const e = new Employee("Paul", 1, testValue);
    expect(e.email).toBe(testValue);
  });
  
  test("Can retrieve name with getName()", () => {
    const testValue = "Betty";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
  });
  
  test("Can retrieve id with getId()", () => {
    const testValue = 100;
    const e = new Employee("Mike", testValue);
    expect(e.getId()).toBe(testValue);
  });
  
  test("Can retrieve email with getEmail()", () => {
    const testValue = "test@test.com";
    const e = new Employee("Barb", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
  });
  
  test("getRole() should return \"Employee\"", () => {
    const testValue = "Employee";
    const e = new Employee("Horace", 1, "test@test.com");
    expect(e.getRole()).toBe(testValue);
  });
  