const express = require('express')
const app = express()
const port = process.env.PORT || 4000


app.use(express.urlencoded({extended: true}))
app.use(express.json());

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


//routers
const routers = require('./routes/bondRouter.js')
app.use('/bonds', routers)

const investmentrouter = require('./routes/investmentRouter.js')
app.use('/investments', investmentrouter)

const bondinvestmentrouter = require('./routes/bondInvestmentRouter')
app.use('/bondinvestments', bondinvestmentrouter)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
