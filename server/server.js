const express = require('express')
const bodyParser = require('body-parser')
const ctrl = require('./Controllers/controller')

const app = express()
app.use(bodyParser.json())

app.get('/api/sillymons', ctrl.getSillymons);

app.post(`/api/sillymon`, ctrl.createSillymon);

app.delete(`/api/sillymon/:id`, ctrl.deleteSillymon);

app.put(`/api/sillymon/:id`, ctrl.editSillymon);


const PORT = 3001

app.listen(PORT, () => console.log(`The magic is happening on ${PORT}`))
