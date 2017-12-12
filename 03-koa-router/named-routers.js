const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const forums = new Router()
const posts = new Router()

posts.get('/', async (ctx, next) => {
  ctx.response.body = '<h1>response to /forums/123/posts</h1>'
})

posts.get('/:pid', async (ctx, next) => {
  ctx.response.body = '<h1>response to /forums/123/posts/123</h1>'
})

forums.use('/forums/:pid/posts', posts.routes(), posts.allowedMethods())

app.use(forums.routes())

app.listen(3000, () => {
  console.log('server is running at http://localhost:3000')
})