import GameLoop from './game_manager.ts'
import Particle from './_system/Particle.ts'
import GameSpriteEntity from './_system/entities/GameSpriteEntity.ts'
import { checkCollisionCircle } from './utilities/collisions.ts'
import { getRandomIdx } from './utilities/randoms.ts'

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
  const game = { w: canvas.width, h: canvas.height, fps: 1000 / 60, eps: 120 }
  const skeletons: GameSpriteEntity[] = Array.from(
    { length: game.eps },
    () =>
      new GameSpriteEntity({
        img: document.querySelector('#skeleton')!,
        infinite: true,
        free: true,
        x: 0,
        y: 0,
        w: 120,
        h: 120,
        sw: 128,
        sh: 128,
        fx: getRandomIdx(6),
        fy: 0,
        fm: 6,
        at: 0,
        ai: game.fps / 7,
        ad: 1,
      })
  )
  const explosions: GameSpriteEntity[] = Array.from(
    { length: game.eps },
    () =>
      new GameSpriteEntity({
        img: document.querySelector('#explosions')!,
        infinite: true,
        free: true,
        x: 0,
        y: 0,
        w: 160,
        h: 160,
        sw: 300,
        sh: 300,
        fx: 20,
        fy: getRandomIdx(3),
        fm: 20,
        at: 0,
        ai: game.fps / 21,
        ad: 1,
      })
  )
  const particles: Particle[] = Array.from(
    { length: game.eps },
    () =>
      new Particle({
        game: game,
        img: document.querySelector('#asteroid')!,
        free: true,
        x: Math.random() * -game.w,
        y: Math.random() * game.h,
        r: 40,
        a: Math.random() > 0.5 ? 1 : -1,
        v: Math.random() * 0.05 - 0.01,
        s: Math.random() + 1,
      })
  )
  const target = new Particle({
    game: game,
    img: document.querySelector('#asteroid')!,
    free: true,
    x: game.w / 2,
    y: game.h / 2,
    r: 80,
  })
  const player = new GameSpriteEntity({
    img: document.querySelector('#player')!,
    infinite: true,
    free: true,
    x: 0,
    y: 0,
    w: 160,
    h: 160,
    sw: 128,
    sh: 128,
    fx: 0,
    fy: 0,
    fm: 13,
    at: 0,
    ai: game.fps / 14,
    ad: 1,
  })

  const looper = new GameLoop()

  looper.update = () => {
    ctx.clearRect(0, 0, game.w, game.h)

    target.render(ctx)
    target.start()

    player.render(ctx, true)
    player.start(target.x, target.y, 1)
    player.update(looper.deltaTime)

    particles.map((particle, i) => {
      // particle.render(ctx)
      particle.start()
      particle.update()

      skeletons[i].start(particle.x, particle.y, 30)
      skeletons[i].render(ctx)
      skeletons[i].update(looper.deltaTime)

      if (checkCollisionCircle(target, particle)) {
        explosions.find((exp) => exp.free)?.start(particle.x, particle.y, 1 * particle.s)
        particle.reset()
        skeletons[i].reset()
      }
    })

    explosions
      .filter((exp) => !exp.free)
      .map((exp) => {
        exp.render(ctx)
        exp.update(looper.deltaTime)
      })
  }

  // events
  window.addEventListener('keydown', (e: KeyboardEvent) => {
    const tick = 12
    if (e.key === 'ArrowRight') target.x += tick
    if (e.key === 'ArrowLeft') target.x -= tick
    if (e.key === 'ArrowUp') target.y -= tick
    if (e.key === 'ArrowDown') target.y += tick
    if (e.key === ' ') looper.lastTime ? looper.pause() : looper.start()
  })
  window.addEventListener('mousemove', (e: MouseEvent) => {
    target.x = e.offsetX
    target.y = e.offsetY
  })

  // exec
  looper.start()
})
