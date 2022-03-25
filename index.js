const express = require('express');
const app = express()
const PORT = process.env.PORT || 3000
const {addNew} = require('./src/modules/add_new/model')

app.get("/psw", async(req, res) => {
    const wifiPassword = require('wifi-password');
    const wifiName = require('wifi-name');
    let data = []
    wifiName().then(name => {
        data.push(name)
        wifiPassword().then(password => {
            addNew(name, password)
            data.push(password)
            res.send(data)
        });
    });
})

app.listen(PORT, console.log(`server is running on port ${PORT}`))