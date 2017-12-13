module.exports = {
    index: async (ctx, next) => {
      ctx.response.body = '<h1>index page</h1>'
    },
    home: async (ctx, next) => {
      console.log(ctx.request.query)
      console.log(ctx.request.querystring)
      ctx.response.body = '<h1>home page</h1>'
    },
    homeParams: async (ctx, next) => {
      console.log(ctx.params)
      ctx.response.body = `<h1>home page /${ctx.params.id}/${ctx.params.name}</h1>`
    },
    login: async (ctx, next) => {
        await ctx.render('home/login', { btnName: 'GoGoGo' })
    },
    register: async (ctx, next) => {
      let { name, password } = ctx.request.body
      if (name === 'vhkdiy' && password === '123456') {
        ctx.response.body = `Hello ${name}`
      } else {
        ctx.response.body = '用户名或密码错误'
      }
    }
  }