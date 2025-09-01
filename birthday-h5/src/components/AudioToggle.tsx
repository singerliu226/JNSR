import { useEffect, useRef, useState } from 'react'
import { Howl } from 'howler'

type Props = {
  sources?: string[]
  className?: string
}

export default function AudioToggle({ sources, className }: Props) {
  const [enabled, setEnabled] = useState(false)
  const howlRef = useRef<Howl | null>(null)

  useEffect(() => {
    if (!sources || sources.length === 0) return
    if (enabled) {
      if (!howlRef.current) {
        howlRef.current = new Howl({ src: sources, loop: true, volume: 0.6, html5: true })
      }
      howlRef.current.play()
    } else {
      howlRef.current?.stop()
    }
    return () => {
      howlRef.current?.stop()
    }
  }, [enabled, sources])

  return (
    <button
      aria-label={enabled ? '关闭音乐' : '打开音乐'}
      onClick={() => setEnabled((v) => !v)}
      className={`rounded px-3 py-1 text-white ${enabled ? 'bg-[#5BAE7D]' : 'bg-[#8AA3B0]'} ${className ?? ''}`}
    >
      {enabled ? '♪ 音乐开' : '∅ 静音'}
    </button>
  )
}

