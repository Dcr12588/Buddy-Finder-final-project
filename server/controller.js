const buddyFinder = require('./db.json')
let buddyId = 5

//Get,Post,Put,Delete//

module.exports = {
    getBuddies: (req,res) => {
        res.status(200).send(buddyFinder)
    },

    addBuddy: (req, res) => {

        const {name, age, picture, breed, description, shelter} = req.body

        let newBuddyObject = {
            name: name,
            age: age,
            picture: picture,
            breed: breed,
            description: description,
            shelter: shelter,
            adoptionProbability: 0
        }

        buddyFinder.push(newBuddyObject)

        buddyId++

        res.status(200).send(buddyFinder)
    
    },

    deleteBuddy: (req, res) => {

        const index = buddyFinder.findIndex(el => el.id === +req.params.id)

        buddyFinder.splice(index, 1)

        res.status(200).send(buddyFinder)
    },

    updateadoptionProbability: (req, res) => {

        const index = buddyFinder.findIndex(el => el.id === +req.params.id)
        const {type} = req.body

        if(type === 'adoptionProbability') {
            buddyFinder[index].adoptionProbability++
        }else if(type === 'noadoptionProbability'){
            buddyFinder[index].adoptionProbability--
        }
        
        res.status(200).send(buddyFinder)
    }
}