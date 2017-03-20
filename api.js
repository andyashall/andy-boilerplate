const randomID = require('random-id')
const bcrypt = require('bcryptjs')
const saltRounds = 10

module.exports = (app, url) => {

    app.post('/api/hello', (req, res) => {
        console.log(req.body)
        res.send("hello " + randomID(20))
    })

}