module.export = {
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || (process.env.NODE_ENV == "production" ? 8080 : 3000),
  apiHOST: process.env.APIHOST || 'localhost',
  apiPOST: process.env.APIPOST || 3030,
  app: {
    title: '经销商门户',
    description: "react 实现经销商门户",
    head: {
      titleTemplate: "经销商门户: %s",
      meta: [
      {
        name: 'description',
        content: '经销商门户'
      },
      {charset: 'utf-8'}
      ]
    }
  }
};
