import { useEffect, useRef } from "react"
import "./gradient.css"
import bgSand from "@/assets/bgSand.jpg"

export default function HeroBG() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const sandTexCanvas = useRef<HTMLCanvasElement | null>(null)
  const sandTexCtx = useRef<CanvasRenderingContext2D | null>(null)

  // --- Noise utility ---
  function smoothNoise(width: number, height: number, scale = 40, seed = 0) {
    const arr = new Float32Array(width * height)
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const nx = (x + seed * 31) / scale
        const ny = (y + seed * 17) / scale
        let val =
          Math.sin(nx) * Math.cos(ny * 1.1) +
          Math.cos(nx * 0.71 + 8) * Math.sin(ny * 0.7 - 7) +
          Math.sin(nx * 0.19 + ny * 0.29)
        val = (val + 3) / 6
        arr[y * width + x] = val
      }
    }
    return arr
  }

  function addSandGrain(ctx: CanvasRenderingContext2D, width: number, height: number) {
    const img = ctx.getImageData(0, 0, width, height)
    for (let i = 0; i < img.data.length; i += 4) {
      const grain = (Math.random() - 0.5) * 10
      img.data[i] += grain
      img.data[i + 1] += grain * 0.8
      img.data[i + 2] += grain * 0.6
    }
    ctx.putImageData(img, 0, 0)
  }

  function createSandTexture(width: number, height: number) {
    if (!sandTexCanvas.current) {
      sandTexCanvas.current = document.createElement("canvas")
    }
    const canvas = sandTexCanvas.current!
    canvas.width = width * 2
    canvas.height = height * 2

    sandTexCtx.current = canvas.getContext("2d")
    const ctx = sandTexCtx.current
    if (!ctx) return

    ctx.fillStyle = "#fcf8ee"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    const data = ctx.getImageData(0, 0, canvas.width, canvas.height)
    const arr = smoothNoise(canvas.width, canvas.height, 42, Math.random() * 1000)
    for (let i = 0; i < arr.length; i++) {
      const grain = Math.floor(arr[i] * 18)
      data.data[i * 4 + 0] -= grain
      data.data[i * 4 + 1] -= grain
      data.data[i * 4 + 2] -= grain + 3
    }
    ctx.putImageData(data, 0, 0)

    for (let y = 0; y < canvas.height; y += 3) {
      ctx.beginPath()
      for (let x = 0; x <= canvas.width; x += 2) {
        const wobble =
          Math.sin(x * 0.012 + y * 0.012) * 8 +
          Math.cos((y + x) * 0.0032) * 2 +
          Math.sin(x * 0.019 + y * 0.015) * 1
        ctx.lineTo(x, y + wobble)
      }
      ctx.strokeStyle = "rgba(220,190,120,0.02)"
      ctx.lineWidth = 6.5 + Math.sin(y * 0.018) * 1.3
      ctx.shadowColor = "rgba(185,175,130,0.04)"
      ctx.shadowBlur = 3.2
      ctx.stroke()
      ctx.shadowBlur = 0
    }

    addSandGrain(ctx, canvas.width, canvas.height)
  }

  function drawSandRipple(
    ctx: CanvasRenderingContext2D,
    cx: number,
    cy: number,
    r: number,
    t: number,
    i: number
  ) {
    ctx.beginPath()
    for (let a = 0; a < Math.PI * 2; a += 0.02) {
      const wobble = Math.sin(a * 6 + t * 0.8 + i) * 6
      const grain = Math.sin(a * 3 + t * 1.17 + i * 0.07) * 0.8
      const x = cx + Math.cos(a) * (r + wobble + grain)
      const y = cy + Math.sin(a) * (r + wobble + grain)
      if (a === 0) ctx.moveTo(x, y)
      else ctx.lineTo(x, y)
    }
    ctx.closePath()

    ctx.strokeStyle = `rgba(150,130,90,${0.15 - i * 0.003})`
    ctx.lineWidth = 15
    ctx.shadowColor = "rgba(100,80,50,0.15)"
    ctx.shadowBlur = 15
    ctx.stroke()

    ctx.strokeStyle = `rgba(255,255,245,${0.28 - i * 0.02})`
    ctx.lineWidth = 10 + Math.sin(t + i) * 3
    ctx.shadowBlur = 0
    ctx.stroke()
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      createSandTexture(canvas.width, canvas.height)
    }

    resize()
    window.addEventListener("resize", resize)

    function drawRipples(time: number) {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const offsetX = (time * 0.03) % canvas.width
      const offsetY = (time * 0.02) % canvas.height
      if (sandTexCanvas.current) {
        ctx.drawImage(
          sandTexCanvas.current,
          offsetX,
          offsetY,
          canvas.width,
          canvas.height,
          0,
          0,
          canvas.width,
          canvas.height
        )
      }

      const cx = canvas.width
      const cy = canvas.height
      const maxR = Math.max(canvas.width, canvas.height) * 1.5
      const t = time * 0.002
      for (let i = 0; i < 40; i++) {
        const r = (i * 35 + t * 60) % maxR
        drawSandRipple(ctx, cx, cy, r, t, i)
      }
    }

    let animationFrame: number
    const animate = (time: number) => {
      drawRipples(time)
      animationFrame = requestAnimationFrame(animate)
    }
    animate(0)

    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <section className="flex relative w-full h-full overflow-hidden justify-center items-center">
      <div className="flex absolute top-0 left-0 w-full h-full inset-0 z-1">
        <div className="gradient absolute inset-0 z-2 opacity-80" />
        <div className="flex absolute top-0 left-0 w-full h-full inset-0 z-1 pointer-events-none">
           <img src={bgSand} alt="sand background" className="fixed z-0 opacity-70 inset-0 size-full object-cover" />
          <canvas ref={canvasRef} className="w-full h-full" />
        </div>
      </div>
    </section>
  )
}
