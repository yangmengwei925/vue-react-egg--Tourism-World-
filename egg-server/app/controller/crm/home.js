'use strict';

const Controller = require('egg').Controller;

class CrmHomeController extends Controller {
  async menu() {
    const { ctx,app} = this;

    
    ctx.body = app.sendMes(0,'请求成功',app.config.Menu)
  }
}

module.exports = CrmHomeController;
