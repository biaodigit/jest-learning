const generateConfig = () => {
    return {
        server: 'http://localhost',
        host: '8000',
        domain: 'localhost',
        time: '111223'
    }
}

test('generate config', () => {
    expect(generateConfig()).toMatchSnapshot()
})