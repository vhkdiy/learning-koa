const Koa = require('koa')
const router = require('koa-router')()
const app = new Koa()

router.get('/', async (ctx, next) => {
    ctx.response.body = `<h1>index page</h1>`
})

router.get('/home', async (ctx, next) => {
    ctx.response.body = '<h1>home page</h1>'
})

router.get('/404', async (ctx, next) => {
    ctx.response.body = '<h1>404 Not Found</h1>'
})

router.get('/:category/:title', function (ctx, next) {
    ctx.response.body = `<h1>${ctx.params.category} - ${ctx.params.title}</h1>`
    console.log(ctx.params);
    // => { category: 'programming', title: 'how-to-node' } 
})

app.use(router.routes())

app.listen(3000, () => {
    console.log('server is running at http://localhost:3000')
})