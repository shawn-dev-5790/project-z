import GameLoop from './system/GameLoop.ts'
import { checkCollisionCircle } from './system/collisions.ts'
import Particle from './system/Particle.ts'
import ParticleFactory from './system/ParticleFactory.ts'

window.addEventListener('load', function () {
  // canvas
  const canvas = document.querySelector<HTMLCanvasElement>('#canvas1')!
  canvas.width = 1280
  canvas.height = 720

  // ctx
  const ctx = canvas.getContext('2d')!
  ctx.strokeStyle = 'white'
  ctx.lineWidth = 2

  // game
  const game = { w: canvas.width, h: canvas.height }
  const ptcFac = new ParticleFactory(game)
  const particles = ptcFac.create('asteroid', 100)
  const target = new Particle({
    game: game,
    img: document.querySelector('#asteroid')!,
    free: true,
    x: game.w / 2,
    y: game.h / 2,
    r: 80,
  })

  const looper = new GameLoop()
  looper.update = () => {
    ctx.clearRect(0, 0, game.w, game.h)
    // game.update(loop.deltaTime)
    particles.map((particle) => {
      const c = checkCollisionCircle(target, particle)
      particle.update()
      particle.render(ctx, c)
    })
    target.render(ctx, false)
  }

  // events
  this.window.addEventListener('keydown', (e: KeyboardEvent) => {
    const tick = 12
    if (e.key === 'ArrowRight') target.x += tick
    if (e.key === 'ArrowLeft') target.x -= tick
    if (e.key === 'ArrowUp') target.y -= tick
    if (e.key === 'ArrowDown') target.y += tick
    if (e.key === ' ') looper.pause()
  })

  // exec
  looper.start()
})
