const {
    Admin, Staff
  } = require('../models')
  
  const config = require('../config/config')

  module.exports = {
      async createStaff(req, res) {
          try {
            const staff = await Staff.create(req.body)
            const staffJson = staff.toJSON()
            res.send({
              user: staffJson,
            })
          }
          catch(err) {
              res.status().send({
                  err : "err in request"
              })
          }
      },

      async getStaff(req, res) {
          try {
               const staffs = await Staff.findAll()
               console.log(staffs)
            //   if(!staffs) {
            //       res.status(404).send({
            //           err: "Record Not Found"
            //       })
            //   }

            //   const staffJson = staffs.toJSON()
            //   res.send({
            //     user: staffJson,
            //   })
            res.send({
                 staffs: staffs,
            })
            }          
            catch(err) {
                res.status(400).status({
                    err: "This is bad request"
                })
             }

          }

      
  }