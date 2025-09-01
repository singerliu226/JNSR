import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import './index.css'
import Intro from './pages/Intro'
import Book from './pages/Book'
import Guitar from './pages/Guitar'
import Classroom from './pages/Classroom'
import WishTree from './pages/WishTree'
import AudioToggle from './components/AudioToggle'

type Scene = 'intro' | 'book' | 'guitar' | 'classroom' | 'wishtree'

const order: Scene[] = ['intro', 'book', 'guitar', 'classroom', 'wishtree']

type SceneProps = { onNext: () => void; onPrev: () => void }
const sceneMap: Record<Scene, (props: SceneProps) => React.ReactElement> = {
  intro: (p) => <Intro {...p} />,
  book: (p) => <Book {...p} />,
  guitar: (p) => <Guitar {...p} />,
  classroom: (p) => <Classroom {...p} />,
  wishtree: (p) => <WishTree {...p} />,
}

export default function App() {
  const [index, setIndex] = useState(0)

  const goNext = () => setIndex((i) => Math.min(i + 1, order.length - 1))
  const goPrev = () => setIndex((i) => Math.max(i - 1, 0))

  const Current = sceneMap[order[index]]

  return (
    <div className="min-h-dvh bg-[#F4EBDD] text-[#1F4733]">
      <div className="fixed right-4 top-4 z-10"><AudioToggle /></div>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          <Current onNext={goNext} onPrev={goPrev} />
        </motion.div>
      </AnimatePresence>
      <div className="fixed inset-x-0 bottom-0 flex items-center justify-between p-4 text-sm opacity-80">
        <button onClick={goPrev} className="px-3 py-1 rounded bg-[#8AA3B0] text-white disabled:opacity-40" disabled={index === 0}>
          上一幕
        </button>
        <div className="tracking-widest">{index + 1} / {order.length}</div>
        <button onClick={goNext} className="px-3 py-1 rounded bg-[#5BAE7D] text-white disabled:opacity-40" disabled={index === order.length - 1}>
          下一幕
        </button>
      </div>
    </div>
  )
}
