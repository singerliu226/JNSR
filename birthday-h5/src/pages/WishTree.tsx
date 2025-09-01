import { useRef, useState } from 'react'
import html2canvas from 'html2canvas'
import Parallax from '../components/Parallax'

type Props = { onNext: () => void; onPrev: () => void }

export default function WishTree({ onPrev }: Props) {
  const [text, setText] = useState('愿你在森林里休息，在人群里发光。')
  const cardRef = useRef<HTMLDivElement>(null)

  const onExport = async () => {
    if (!cardRef.current) return
    const canvas = await html2canvas(cardRef.current, { backgroundColor: null, scale: 2 })
    const link = document.createElement('a')
    link.download = 'birthday-wish.png'
    link.href = canvas.toDataURL('image/png')
    link.click()
  }

  return (
    <main className="min-h-dvh flex items-center justify-center p-8 text-center">
      <div className="space-y-6 w-full max-w-md">
        <Parallax strength={5}>
          <h2 className="text-xl font-medium">愿一切努力被看见，愿一切热爱有回声。</h2>
        </Parallax>

        <div ref={cardRef} className="rounded-2xl bg-white/70 border border-black/5 p-6 text-[#1F4733]">
          <div className="text-2xl mb-2">🎂 生日快乐</div>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full resize-none bg-transparent outline-none text-base leading-relaxed"
            rows={4}
          />
          <div className="mt-3 text-xs opacity-70 text-right">来自：你</div>
        </div>

        <div className="flex gap-3 justify-center">
          <button onClick={onPrev} className="px-3 py-2 rounded bg-[#8AA3B0] text-white">返回</button>
          <button onClick={onExport} className="px-3 py-2 rounded bg-[#5BAE7D] text-white">保存海报</button>
        </div>
      </div>
    </main>
  )
}

