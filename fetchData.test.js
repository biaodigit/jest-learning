import { fetchData } from './fetchData'

// test('test axios', (done) => {
//     fetchData((data) => {
//         expect(data).toEqual({
//             success: true
//         })
//         done()
//     })
// })

test('test axios', () => {
    return expect(fetchData()).rejects.toThrow()
})