const data = {
    name: 'Kat',
    age: 20
}
Object.keys(data).forEach(key => {
    let value = data[key]
    Object.defineProperty(data, key, {
        get() {
            console.log('get value', value)
            return value
        },
        set(newValue) {
            console.log('set value', newValue)
            value = newValue
        }
    })
})

const a = data.name
data.name = 'Bob'