import Parallax from '../components/Parallax'

type Props = { onNext: () => void; onPrev: () => void }

export default function Classroom({ onNext, onPrev }: Props) {
  return (
    <main className="min-h-dvh flex items-center justify-center p-8 text-center">
      <div className="space-y-6 max-w-md">
        <Parallax strength={6}>
          <h2 className="text-xl font-medium">老师，是把光递给还不认识光的人。</h2>
        </Parallax>
        <p className="opacity-80">你在准备的每一刻，都在靠近那个更好的世界。</p>
        <div className="flex gap-3 justify-center">
          <button onClick={onPrev} className="px-3 py-2 rounded bg-[#8AA3B0] text-white">上一幕</button>
          <button onClick={onNext} className="px-3 py-2 rounded bg-[#5BAE7D] text-white">下一幕</button>
        </div>
      </div>
    </main>
  )
}

