test('测试对象相等', () => {
    const a = { b: 1 }
    expect(a).toEqual({ b: 1 })
})

const throwError = () => {
    throw new Error('this is and new error')
}

test('toThrow', () => {
    expect(throwError).toThrow(/this is and new error/)
})
