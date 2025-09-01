import { useMemo, useRef, useState } from 'react'
import { Howl } from 'howler'
import Parallax from '../components/Parallax'

type Props = { onNext: () => void; onPrev: () => void }

export default function Guitar({ onNext, onPrev }: Props) {
  const notes = useMemo(() => [
    '当心事化作弦，愿音乐替你说话。',
    '不必很响，温柔也能抵达。',
    '每一次拨弦，疲惫都会被听见。',
  ], [])
  const [idx, setIdx] = useState(0)
  const [count, setCount] = useState(0)
  const soundsRef = useRef<Howl[]>([])

  const ensureSounds = () => {
    if (soundsRef.current.length) return
    // 占位：使用同一资源名，后续替换为真实音频
    const sources = ['/placeholder-g1.mp3', '/placeholder-g2.mp3', '/placeholder-g3.mp3']
    soundsRef.current = sources.map((src) => new Howl({ src: [src], volume: 0.7 }))
  }

  const onStrum = () => {
    ensureSounds()
    const i = Math.floor(Math.random() * soundsRef.current.length)
    try { soundsRef.current[i]?.play() } catch {}
    setIdx((v) => (v + 1) % notes.length)
    setCount((c) => {
      const next = c + 1
      if (next >= 3) onNext()
      return next
    })
  }

  return (
    <main className="min-h-dvh flex items-center justify-center p-8 text-center">
      <div className="space-y-6 max-w-md">
        <Parallax strength={6}>
          <h2 className="text-xl font-medium">{notes[idx]}</h2>
        </Parallax>
        <p className="opacity-80">轻触拨弦 3 次解锁下一幕</p>
        <button onClick={onStrum} className="px-4 py-2 rounded bg-[#5BAE7D] text-white">拨弦</button>
        <div className="text-sm opacity-70">已拨弦 {count} / 3</div>
        <div className="flex gap-3 justify-center">
          <button onClick={onPrev} className="px-3 py-2 rounded bg-[#8AA3B0] text-white">上一幕</button>
        </div>
      </div>
    </main>
  )
}

