const buddyFinder = require('./db.json')

module.exports = {
    name: (req,res) => {
    res.status(200).send(buddyFinder)
    }
}