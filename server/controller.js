const buddyFinder = require('./db.json')

//Get,Post,Put,Delete//

module.exports = {
    getBuddies: (req,res) => {
    res.status(200).send(buddyFinder)
    }
}