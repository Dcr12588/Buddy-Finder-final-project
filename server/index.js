const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const {getBuddies, addBuddy, deleteBuddy, updateadoptionProbability, getaddedBuddies} = require('./controller')

app.get('/getBuddies', getBuddies)
app.get('/getaddedBuddies', getaddedBuddies)
app.post('/addBuddy', addBuddy)
app.delete('/deleteBuddy/:id', deleteBuddy)
app.put('/updateadoptionProbability/:id', updateadoptionProbability)


app.listen(3000, () => console.log('listening on port 3000'))