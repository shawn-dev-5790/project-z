import { Mob } from './objects/Mob'
import { TargetBoxCircle } from './entities/TargetBox'
import GameLoop from './game_manager'
import { ObjectPool } from './objects/ObjectPool'
import { SpriteAnimator } from './utilities/SpriteAnimator'

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
  const cx = game.w * 0.5
  const cy = game.h * 0.5
  const img_exp: HTMLImageElement = document.querySelector('#explosions')!

  const loop = new GameLoop()

  // objects
  const player = new TargetBoxCircle(cx, cy, 40, 'gold')
  const mobPool = new ObjectPool<Mob>(() => new Mob(), 1000)
  const expPool = Array.from({ length: 1000 }, () => new SpriteAnimator(img_exp, '21x3', '150x150', 300))

  Array.from({ length: 100 }, () => mobPool.get()?.spawn(game.w, game.h))

  // update
  loop.update = () => {
    ctx.clearRect(0, 0, game.w, game.h)
    // mobs
    mobPool.pool
      .filter((obj) => !obj.free)
      .map((mob) => {
        mob.render(ctx)
        mob.traceTo(player)
        mob.update()
        mob.onCollision(() => {
          const exp = expPool.find((exp) => !exp.isPlaying)
          if (exp) {
            exp.updatePos(mob.x, mob.y)
            exp.updateSize(mob.r * 5, mob.r * 5)
            exp.updateExplosionType()
            exp.updateDuration(mob.r * 10)
            exp.start()
          }
          mob.spawn(game.w, game.h)
        })
      })
    expPool
      .filter((exp) => exp.isPlaying)
      .map((exp) => {
        exp.render(ctx)
        exp.update(loop.deltaTime)
      })

    // player
    player.render(ctx)
  }

  window.addEventListener('keypress', (e: KeyboardEvent) => {
    if (e.key === ' ') loop.lastTime ? loop.pause() : loop.start()
  })
  window.addEventListener('mousemove', (e: MouseEvent) => {
    player.x = e.offsetX
    player.y = e.offsetY
  })

  // exec
  loop.start()
})
