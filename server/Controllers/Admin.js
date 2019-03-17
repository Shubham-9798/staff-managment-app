const {
     Staff, StaffAttandance
  } = require('../models')
  const config = require('../config/config')
  const {update, randomString} = require('../helper')

  const obj = {
      late: 'L',
      ontime: 'T',
      absent: 'A',
      halftime: 'H',
  }

  module.exports = {
 

      //get all teh record of staffs
      async getStaff(req, res) {
          try {
               const staffs = await Staff.findAll()
            //    console.log(staffs)
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

          },

          test(req, res) {
              res.send({
                  stat : "responding"
              })
          },

          async attendance(req, res) {
              try {
                  const id = req.params.id;
                  const {date,month, year} = update();
                  const sa = await StaffAttandance.findOne({
                      where: {
                          staffUnique: id,
                          month : month,
                          year: year
                      }
                  })
                  if(!sa) {
                      return res.status(404).send({
                          err: 'user not found'
                      })
                  }


              } catch(err) {
                  err : "error"
              }

          },
          async addStaff(req, res) {
              try {
                  const id = await randomString()

            const {name, phone_num, salary, address} = req.body;
            const {date, month, year} = update()
            const data = {
                unique: id,
                name: name,
                phone_num: phone_num,
                salary: salary,
                address: address
                
            }
            const data2 = {
                staffUnique: id,
                date: date,
                month: month,
                year: year,
                attandance:"0",
                update:"0"

            }
              const staff = await Staff.create(data);
              const staffattandance = await StaffAttandance.create(data2)

                res.send({
                   staff : staff.toJSON(),
                   staffattandance : staffattandance.toJSON(),
                   date: update()
                })

              }catch(err) {
                res.send({
                    stat: "Timeout Retry again",

                })
              }

        },



      
  }