const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const {getBuddies, addBuddy, deleteBuddy, updateadoptionProbability} = require('./controller')

app.get('/getBuddies', getBuddies)
app.post('/addBuddy', addBuddy)
app.delete('/deleteBuddy/:id', deleteBuddy)
app.put('/updateadoptionProbability/:id', updateadoptionProbability)

app.listen(3000, () => console.log('listening on port 3000'))