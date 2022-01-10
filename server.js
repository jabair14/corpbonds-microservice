const express = require('express')
const app = express()
const port = 4000


app.use(express.urlencoded({extended: true}))
app.use(express.json());


//routers
const routers = require('./routes/bondRouter.js')
app.use('/bonds', routers)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
