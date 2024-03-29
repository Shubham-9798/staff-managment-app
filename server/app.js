
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {
  sequelize
} = require('./models')

// const config = require('./config/config')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// require('./passport')

require('./routes')(app)

sequelize.sync({force:true})
  .then(() => {
    app.listen(5000)
    console.log(`Server started on port 5000`)
  })