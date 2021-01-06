const functions = require("./exercises_10_3.test");

jest.mock("./exercises_10_3.test");

//4
test ('Exercise 4 requirements - 1st function', () => {
    functions.toUpperCase.mockImplementation(string => string.toLowerCase());

    expect(functions.toUpperCase("TESTE")).toBe("teste");
    expect(functions.toUpperCase).toHaveBeenCalled();
    expect(functions.toUpperCase).toHaveBeenCalledTimes(1);
    expect(functions.toUpperCase).toHaveBeenCalledWith("TESTE");
});

test ('Exercise 4 requirements - 2nd function', () => {
    functions.firstCharacter.mockImplementation(string => string.charAt(string.length - 1));

    expect(functions.firstCharacter("testing")).toBe("g");
    expect(functions.firstCharacter).toHaveBeenCalled();
    expect(functions.firstCharacter).toHaveBeenCalledTimes(1);
    expect(functions.firstCharacter).toHaveBeenCalledWith("testing");
});

test ('Exercise 4 requirements - 3rd function', () => {
    functions.concatString.mockImplementation((string1, string2, string3) => string1.concat(string2, string3));

    expect(functions.concatString("te", "s", "te")).toBe("teste");
    expect(functions.concatString).toHaveBeenCalled();
    expect(functions.concatString).toHaveBeenCalledTimes(1);
    expect(functions.concatString).toHaveBeenCalledWith("te", "s", "te");
});