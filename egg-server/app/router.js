'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {

  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/login', controller.web.login.index);

  //首页旅行
  router.get('/travel/list', controller.web.travel.list);
  router.post('/travel/submit', controller.web.travel.submit);

  //产品
  router.get('/product/list', controller.web.product.list);
  router.post('/product/serach', controller.web.product.search);
  router.post('/product/detail',controller.web.product.detail);

  //游记
  router.get('/blog/list', controller.web.blog.list);
  router.post('/blog/search', controller.web.blog.search);


  //官网后台
  router.post('/crm/login', controller.crm.login.index);
  router.get('/crm/homemenu', controller.crm.home.menu);
  
};
