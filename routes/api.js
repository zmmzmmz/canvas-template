import Router from 'koa-router'

const router = new Router({
  prefix: '/api'
})

router.get('/', async (ctx, next) => {
  ctx.body = {}
})

router.post('/template', async (ctx, next) => {
  console.log(ctx.request.body)
  ctx.body =  {}
})

export default router