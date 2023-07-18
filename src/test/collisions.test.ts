// import { CircleTargetBox } from './entities/objects/CircleTargetBox'
// import { RectTargetBox } from './entities/objects/RectTargetBox'
// import GameLoop from './game_manager'
// import { checkCollisionCircle, checkCollisionCircleRect, checkCollisionRect } from './utilities/collisions'
// import { calcAngle } from './utilities/math'

// window.addEventListener('load', function () {
//   // canvas
//   const canvas = document.querySelector<HTMLCanvasElement>('#canvas1')!
//   canvas.width = 1280
//   canvas.height = 720

//   // ctx
//   const ctx = canvas.getContext('2d')!
//   ctx.fillStyle = 'green'
//   ctx.strokeStyle = 'white'
//   ctx.lineWidth = 2

//   // game
//   const game = { w: canvas.width, h: canvas.height, fps: 1000 / 60, eps: 120 }
//   const cx = game.w * 0.5
//   const cy = game.h * 0.5
//   const loop = new GameLoop()

//   // objects
//   const ctb1 = new CircleTargetBox()
//   const ctb2 = new CircleTargetBox()
//   const rtb1 = new RectTargetBox()
//   const rtb2 = new RectTargetBox()

//   let xf = true
//   let yf = true
//   let fr = Math.random() * 10
//   // update
//   loop.update = () => {
//     ctx.clearRect(0, 0, game.w, game.h)
//     const c = checkCollisionCircleRect(rtb2, ctb1)
//     // const c = checkCollisionCircle(ctb1, ctb2)
//     // const c = checkCollisionRect(rtb1, rtb2)
//     ctx.strokeStyle = c ? 'gold' : 'white'
//     // rtb1.render(ctx)
//     rtb2.render(ctx)
//     ctb1.render(ctx)
//     // ctb2.render(ctx)

//     ctx.beginPath()
//     ctx.moveTo(ctb1.x, ctb1.y)
//     ctx.lineTo(rtb2.x, rtb2.y)
//     ctx.stroke()

//     if (!c) {
//       xf = ctb1.x < game.w - 100
//       yf = ctb1.y < game.h - 100
//     }
//     ctb1.update(ctb1.x + (xf ? fr : -fr), ctb1.y + (yf ? fr : -fr), 50)
//   }

//   // init
//   ctb1.update(cx, cy, 50)
//   // ctb2.update(cx, cy, 50)
//   rtb1.update(cx, cy, 100, 100)
//   rtb2.update(cx, cy, game.w - ctb1.r * 4, game.h - ctb1.r * 4)

//   window.addEventListener('mousemove', (e: MouseEvent) => {
//     // rtb2.x = e.offsetX
//     // rtb2.y = e.offsetY
//     ctb2.x = e.offsetX
//     ctb1.y = e.offsetY
//   })

//   // exec
//   loop.start()
// })
