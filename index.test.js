import { add } from './index.js'

test('test add', () => {
    expect(add(1, 1)).toEqual(2)
})

test('测试对象相等', () => {
    const a = { b: 1 }
    expect(a).toEqual({ b: 1 })
})

const throwError = () => {
    throw new Error('this is a new error')
}

test('toThrow1', () => {
    expect(throwError).toThrow(/this is a new error/)
})

