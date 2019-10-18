const express = require('express')
const ctrl = require('./controllers/messages_controller')
const PORT = 3001
const app = express()

app.use(express.json())
app.use(express.static(__dirname + '/../public/build'))

app.listen(PORT, () => {
    console.log(`${PORT} a Space Oddesy`)
})

app.post('/api/messages',ctrl.create)
app.get('/api/messages', ctrl.read)
app.put('/api/messages/:id', ctrl.update)
app.delete('/api/messages/:id', ctrl.delete)