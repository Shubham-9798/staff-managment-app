const AuthenticationController = require('./controllers/AuthenticationController')
// const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const Admin = require('./Controllers/Admin')

module.exports = (app) => {
  app.post('/register',
    AuthenticationController.register)

  app.post('/login',
    AuthenticationController.login)

  app.post('/createStaff',
        Admin.addStaff
  )

  app.post('/admin/getstaff',
     Admin.getStaff
  )

  app.get('/test',
    Admin.test
  )

  app.post('/staff/attendance/:id',
       Admin.attendance
  )

  

  




    // staff related routes
}
