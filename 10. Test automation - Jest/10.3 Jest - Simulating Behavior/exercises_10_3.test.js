//1
let generateNumber = () => Math.floor(Math.random() * 101);

test ('Exercise 1 requirements', () => {
    generateNumber = jest.fn().mockReturnValue(10);

    expect(generateNumber()).toBe(10);
    expect(generateNumber).toHaveBeenCalled();
    expect(generateNumber).toHaveBeenCalledTimes(1);
});

//2
test ('Exercise 2 requirements', () => {
    generateNumber = jest.fn().mockImplementationOnce((num1, num2) => num1 / num2);

    expect(generateNumber(9, 3)).toBe(3);
    expect(generateNumber).toHaveBeenCalled();
    expect(generateNumber).toHaveBeenCalledTimes(1);
    expect(generateNumber).toHaveBeenCalledWith(9, 3);
});

//3
test ('Exercise 3 requirements', () => {
    generateNumber = jest.fn().mockImplementation((num1, num2, num3) => num1 * num2 * num3);

    expect(generateNumber(3, 5, 2)).toBe(30);
    expect(generateNumber).toHaveBeenCalled();
    expect(generateNumber).toHaveBeenCalledTimes(1);
    expect(generateNumber).toHaveBeenCalledWith(3, 5, 2);

    generateNumber.mockReset();
    expect(generateNumber).toHaveBeenCalledTimes(0);

    generateNumber = jest.fn().mockImplementation((num1) => num1 * 2);

    expect(generateNumber(3)).toBe(6);
    expect(generateNumber).toHaveBeenCalled();
    expect(generateNumber).toHaveBeenCalledTimes(1);
    expect(generateNumber).toHaveBeenCalledWith(3);
});
