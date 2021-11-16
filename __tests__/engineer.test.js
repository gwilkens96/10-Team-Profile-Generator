const Engineer = require('../lib/engineer');

test("Can add GitHub account to constructor object", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Rose", 1, "test@test.com", testValue);
    expect(e.github).toBe(testValue);
    });

    test("getRole() should return \"Engineer\"", () => {
        const testValue = "Engineer";
        const e = new Engineer("Lucy", 1, "test@test.com", "GitHubUser");
        expect(e.getRole()).toBe(testValue);
      });
      
      test("Can retrieve GitHub username from getGithub()", () => {
        const testValue = "GitHubUser";
        const e = new Engineer("Trudy", 1, "test@test.com", testValue);
        expect(e.getGithub()).toBe(testValue);
      });