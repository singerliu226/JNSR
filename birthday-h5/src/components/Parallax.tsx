import type { PropsWithChildren } from 'react'
import { useEffect, useState } from 'react'

type Props = PropsWithChildren<{ strength?: number; className?: string }>

export default function Parallax({ strength = 12, className, children }: Props) {
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window
      const x = ((e.clientX / innerWidth) - 0.5) * strength
      const y = ((e.clientY / innerHeight) - 0.5) * strength
      setOffset({ x, y })
    }
    window.addEventListener('mousemove', handler)
    return () => window.removeEventListener('mousemove', handler)
  }, [strength])

  return (
    <div className={className} style={{ transform: `translate3d(${offset.x}px, ${offset.y}px, 0)` }}>
      {children}
    </div>
  )
}

