import Canvas from 'canvas'
export const drawCanvas = (type, query) => {
  let {text} = query
  const canvas = new Canvas(400, 400)
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