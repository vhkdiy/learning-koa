module.exports = () => {
    function render(json) {
        this.set("Content-Type", "application/json")
        return JSON.stringify(json)
    }
    return async (ctx, next) => {
        ctx.send = render.bind(ctx)
        await next()
    }
}