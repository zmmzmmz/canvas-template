import Router from 'koa-router'

const router = new Router({
  prefix: '/api'
})

router.post('/', async (ctx, next) => {
   ctx.body = {}
})

export default router