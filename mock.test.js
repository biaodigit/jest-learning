// import { getData } from './fetchData'
import axios from 'axios'
jest.mock('axios')

const func = (cb) => {
    cb('123')
}

const getData = () => {
    return axios.get('/api')
}


test('test mock', () => {
    const cb = jest.fn()
    cb.mockReturnValue('1')
    func(cb)
    // expect(cb).toHaveBeenCalledWith('123')c
    console.log(cb.mock)
})

test.only('test mock axios', async () => {
    axios.get.mockReturnValue({ data: '111' })
    const { data } = await getData()
    expect(data).toBe('111')
})