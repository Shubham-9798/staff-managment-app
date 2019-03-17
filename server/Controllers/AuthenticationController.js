const {
    Admin
  } = require('../models')
  const jwt = require('jsonwebtoken')
  const config = require('../config/config')
  
  function jwtSignUser(user) {
    const ONE_WEEK = 60 * 60 * 24 * 7
    return jwt.sign(user, config.authentication.jwtSecret, {
      expiresIn: ONE_WEEK
    })
  }
  
  module.exports = {
    async register(req, res) {
      try {
        const user = await Admin.create(req.body)
        const userJson = user.toJSON()
        res.send({
          status : true,
          msg : "User Registered"
          // token: jwtSignUser(userJson)
        })
      } catch (err) {
        res.status(400).send({
          error: 'This email account is already in use.'
        })
      }
    },
    async login(req, res) {
      try {
        const {
          email,
          password
        } = req.body
        console.log(email, password)
        const user = await Admin.findOne({
          where: {
            email: email
          }
        })
  
        if (!user) {
          return res.status(403).send({
            error: 'The login information was incorrect'
          })
        }
  
        const isPasswordValid = password === user.password
  
        if (!isPasswordValid) {
          return res.status(403).send({
            error: 'The login information was incorrect',
          })
        }
  
        const userJson = user.toJSON()
        res.send({
          status : true,
          user : user,
          // token: jwtSignUser(user)
        })
      } catch (err) {
        res.status(500).send({
          error: 'An error has occured trying to log in'
        })
      }
    }
  }