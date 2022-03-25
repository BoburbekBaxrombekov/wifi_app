const { fetch, fetchAll } = require('../../lib/postgres')

const ADD = `
    INSERT INTO wifi_list (wifi_name, wifi_password) VALUES ($1, $2) 
`


const addNew = (name, password) => fetchAll(ADD, name, password)

module.exports = {
    addNew
}