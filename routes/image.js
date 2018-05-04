import Router from 'koa-router'
import {drawCanvas} from '../modules/draw-canvas'
const router = new Router({
  prefix: '/image'
})

router.get('/:type', async (ctx, next) => {
  const {query, params} = ctx
  ctx.set('content-type', 'image/png')
  ctx.body = drawCanvas(params.type, query)
})

export default router