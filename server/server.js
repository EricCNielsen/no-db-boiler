const express = require('express')
const bodyParser = require('body-parser')
const ctrl = require('./Controllers/controller')

const app = express()
app.use(bodyParser.json())

app.get('/api/sillymons', ctrl.getSillymons);

app.post(`/api/sillymon`, ctrl.createSillymon);

app.delete(`/api/sillymon/:id`, ctrl.deleteSillymon);

// USE A DIFFERENT PORT IF YOU WANT
const PORT = 3001
// CHANGE THE CONSOLE LOG IF YOU WANT
app.listen(PORT, () => console.log(`The magic is happening on ${PORT}`))
