import Parallax from '../components/Parallax'

type Props = { onNext: () => void; onPrev: () => void }

export default function Intro({ onNext }: Props) {
  return (
    <main className="min-h-dvh flex items-center justify-center p-8 text-center select-none">
      <div className="space-y-6 max-w-md">
        <Parallax strength={10}>
          <h1 className="text-2xl font-semibold">在渤海的风里，有一枚关于九月的祝福。</h1>
        </Parallax>
        <p className="text-base opacity-80">风从天津来，树叶正轻轻摆动。</p>
        <button onClick={onNext} className="px-4 py-2 rounded bg-[#5BAE7D] text-white">进入</button>
      </div>
    </main>
  )
}

