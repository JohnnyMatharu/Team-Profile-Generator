
const testFunc = (numberInput) => {
    return numberInput + 1
}

it("the function should add 1 to a number", ()=>{
    let example = testFunc(1)
    expect(example).toEqual(2)
})