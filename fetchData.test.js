import { fetchData } from './fetchData'

test('test axios', (done) => {
    fetchData((data) => {
        expect(data).toEqual({
            success: true
        })
        done()
    })
})