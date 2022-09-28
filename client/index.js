const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

appendFile.listen(3000, () => console.log('listening on port 3000'));