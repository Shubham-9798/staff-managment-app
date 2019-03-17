const randomString = require('randomstring')
let date = require('date-and-time');

const helper =  {
    update : function attandence() {
        let now = new Date();
        let str = date.format(now, 'YYYY/MM/DD'); 
        let res = str.split("/");
        const s = {
            year: res[0],
            month: res[1],
            date: res[2]
        }
        return s;
    },

    randomString :  async () =>{
        const random =  await randomString.generate({
            length: 12,
            charset: 'alphanumeric'
          });
          return random;

    }
}

module.exports = helper;

          