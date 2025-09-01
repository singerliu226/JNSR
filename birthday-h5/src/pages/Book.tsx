import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Parallax from '../components/Parallax'

type Props = { onNext: () => void; onPrev: () => void }

export default function Book({ onNext, onPrev }: Props) {
  const pages = useMemo(
    () => [
      {
        title: '你用文字照亮日常，文字也在回望你。',
        lines: ['你把日子写成小诗，诗也把你轻轻抱住。'],
      },
      {
        title: '在每一页的缝隙里遇见更亮的自己',
        lines: ['有时候慢一点，也是在为自己蓄力。'],
      },
      {
        title: '愿你的自然与宁静常在',
        lines: ['当风吹过树梢，愿疲惫被温柔对待。'],
      },
    ],
    [],
  )

  const [idx, setIdx] = useState(0)

  const canPrev = idx > 0
  const canNext = idx < pages.length - 1

  return (
    <main className="min-h-dvh flex items-center justify-center p-8">
      <div className="w-full max-w-md">
        <div className="mb-6 text-center">
          <Parallax strength={8}>
            <h2 className="text-xl font-medium">像翻书一样，轻轻滑动或点按按钮</h2>
          </Parallax>
        </div>

        <div className="[perspective:1200px] mx-auto">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={idx}
              className="bg-[#F4EBDD] rounded-xl shadow-sm border border-black/5 p-6 text-center [transform-style:preserve-3d]"
              initial={{ rotateY: -90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: 90, opacity: 0 }}
              transition={{ duration: 0.45, ease: 'easeInOut' }}
            >
              <h3 className="text-lg font-semibold mb-3">{pages[idx].title}</h3>
              {pages[idx].lines.map((t, i) => (
                <p key={i} className="opacity-80 leading-relaxed">
                  {t}
                </p>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <button
            onClick={() => canPrev ? setIdx((v) => v - 1) : onPrev()}
            className="px-3 py-2 rounded bg-[#8AA3B0] text-white disabled:opacity-40"
            disabled={!canPrev}
          >
            上一页
          </button>
          <div className="text-sm opacity-70 tracking-widest">{idx + 1} / {pages.length}</div>
          <button
            onClick={() => {
              if (canNext) setIdx((v) => v + 1)
              else onNext()
            }}
            className="px-3 py-2 rounded bg-[#5BAE7D] text-white"
          >
            {canNext ? '下一页' : '继续'}
          </button>
        </div>
      </div>
    </main>
  )
}

