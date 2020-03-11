const Service = require('egg').Service;

class StaffUserService extends Service {
  async find(user) {
    const { app } = this
    return await app.mysql.select('staff',{where:{user}});
  }

}

module.exports = StaffUserService;