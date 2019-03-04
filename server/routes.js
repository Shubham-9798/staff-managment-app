const AuthenticationController = require('./controllers/AuthenticationController')
// const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const Admin = require('./Controllers/Admin')

module.exports = (app) => {
  app.post('/register',
    AuthenticationController.register)

  app.post('/login',
    AuthenticationController.login)

  app.post('/admin/createStaff',
        Admin.createStaff
  )

  app.post('/admin/getstaff',
     Admin.getStaff
  )

  

  




    // staff related routes
}
