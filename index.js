const express = require('express');
const app = express()
const port = process.env.PORT || 3000
const {addNew} = require('./src/modules/add_new/model')

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.get("/psw", async(req, res) => {
    const wifiPassword = require('wifi-password');
    const wifiName = require('wifi-name');
    let data = []
    wifiName().then(name => {
        res.send(name)
        // data.push(name)
        // wifiPassword().then(password => {
        //     addNew(name, password)
        //     data.push(password)
        //     res.send(data)
        // });
    });
})

app.listen(port, console.log(`server is running on port ${port}`))