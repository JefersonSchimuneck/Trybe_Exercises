const functions = require("./exercises_10_3.test");

//5
test ('Exercise 5 requirements', () => {
    let spyToUpperCase = jest.spyOn(functions, 'toUpperCase')
    .mockImplementation(string => string.toLowerCase());

    expect(spyToUpperCase("TESTE")).toBe("teste");
    expect(spyToUpperCase).toHaveBeenCalled();
    expect(spyToUpperCase).toHaveBeenCalledTimes(1);
    expect(spyToUpperCase).toHaveBeenCalledWith("TESTE");

    spyToUpperCase.mockRestore();
    spyToUpperCase = jest.spyOn(functions, 'toUpperCase')
    expect(spyToUpperCase).toHaveBeenCalledTimes(0);

    expect(spyToUpperCase("teste")).toBe("TESTE");  
});
