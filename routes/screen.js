import Router from 'koa-router'
import {drawScreen} from '../modules/draw-screen'
import fs from 'fs-extra'
import path from 'path'
const router = new Router({
  prefix: '/screen'
})
router.get('/', async (ctx, next) => {
  console.time('screenshot')
  await drawScreen()
  const data = await fs.readFile(path.resolve(__dirname, '..', 'ex.png'))
  ctx.set('content-type', 'image/png')
  ctx.body = data
  console.timeEnd('screenshot')
})

export default router