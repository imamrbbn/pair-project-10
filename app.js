const express = require('express')
const router = require ("./routes/index.js")
const session = require('express-session')

const app = express()
const port = process.env.PORT || 3000

app.set ("view engine", "ejs")
app.use (express.urlencoded ({extended : true}))
app.use(session({
    secret: 'hacktiv8-pi-046',
    resave: false,
    saveUninitialized: true,
  }))


app.use ("/", router)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})