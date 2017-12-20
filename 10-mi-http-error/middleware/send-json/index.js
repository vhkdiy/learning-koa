module.exports = () => {
    function render(json) {
        this.set("Content-Type", "application/json")
        return JSON.stringify(json)
    }
    return async (ctx, next) => {
        ctx.send = render.bind(ctx)
        ctx.log.error('ikcamp')
        await next()
    }
}