import Router from 'koa-router'
import Canvas from 'canvas'
import { log } from 'util';
const router = new Router({
  prefix: '/image'
})
function drawCanvas(type, query) {
  let {text} = query
  const canvas = new Canvas(200, 200)
  const ctx = canvas.getContext('2d')
  ctx.fillStyle = "blue"
  ctx.rotate(0.1)
  ctx.fillRect(20,20,100,100)
  ctx.font = '30px Impact'
  ctx.rotate(0.2)
  ctx.fillStyle = '#ffffff'
  ctx.fillText(text || '传说', 0, 100)
  const buffer = canvas.toBuffer()
  return buffer
}

router.get('/:type', async (ctx, next) => {
  const {query, params} = ctx
  console.log(params)
  ctx.set('content-type', 'image/png')
  ctx.body = drawCanvas(params.type, query)
})

export default router