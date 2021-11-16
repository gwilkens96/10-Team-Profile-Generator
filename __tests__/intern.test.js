const Intern = require('../lib/intern');

test("Can add school to constructor object", () => {
    const testValue = "GCSU";
    const e = new Intern("Cavan", 1, "test@test.com", testValue);
    expect(e.school).toBe(testValue);
  });
  
  test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("Evan", 1, "test@test.com", "GCSU");
    expect(e.getRole()).toBe(testValue);
  });
  
  test("Can retrieve school from getSchool()", () => {
    const testValue = "GT";
    const e = new Intern("Sean", 1, "test@test.com", testValue);
    expect(e.getSchool()).toBe(testValue);
  });
  