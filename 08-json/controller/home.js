module.exports = {
    index: async (ctx, next) => {
      await ctx.render('home/index', { title: 'iKcamp欢迎您' })
    },
    home: async (ctx, next) => {
      ctx.response.body = ctx.send({
        id: 1,
        msg: '请求成功',
        path: '/home'
      })
    },
    homeParams: async (ctx, next) => {
      console.log(ctx.params)
      ctx.response.body = `<h1>home page /${ctx.params.id}/${ctx.params.name}</h1>`
    },
    login: async (ctx, next) => {
        await ctx.render('home/login', { btnName: 'GoGoGo' })
    },
    register: async (ctx, next) => {
      let data
      let { name, password } = ctx.request.body
      if (name === 'vhkdiy' && password === '123456') {
        await ctx.render('home/success', {
          title: '个人中心',
          content: '欢迎进入个人中心'
        })
      } else {
        ctx.state.title = '个人中心'
        await ctx.render('home/login', {
          title: '登录失败',
          content: '请输入正确的账号信息'
        })
      }
    }
  }