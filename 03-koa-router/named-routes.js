const Koa = require('koa')
const router = require('koa-router')()
const app = new Koa()

router.get('user', '/users/:id', async (ctx, next) => {
  ctx.response.body = '<h1>user page</h1>'
})

const userUrl = router.url('user', 3)
console.log(userUrl)
// => 生成路由 "/users/3" 

const userUrl2 = router.url('user', 4)
console.log(userUrl2)
// => 生成路由 "/users/4" 

// 调用路由中间件
app.use(router.routes())

app.listen(3000, () => {
  console.log('server is running at http://localhost:3000')
})

