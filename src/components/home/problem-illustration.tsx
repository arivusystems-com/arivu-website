'use client'

import Image from 'next/image'
import { problemDiagram } from './data'

export function ProblemIllustration() {
  return (
    <div className="w-full">
      <Image
        src={`${problemDiagram.src}?v=${problemDiagram.version}`}
        alt={problemDiagram.alt}
        width={problemDiagram.width}
        height={problemDiagram.height}
        sizes="(min-width: 1024px) 1080px, 100vw"
        className="h-auto w-full"
        unoptimized
        priority={false}
      />
    </div>
  )
}
