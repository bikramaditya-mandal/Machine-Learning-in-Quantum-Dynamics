'use client'
import { useState } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import FadeUp from '@/components/FadeUp'

type TeachingBlock = {
  title: string
  intro?: string
  items: string[]
}

type Topic = {
  num: string
  title: string
  blocks: TeachingBlock[]
}

type Era = {
  label: string
  inst: string
  title: string
  topics: Topic[]
}

const eras: Era[] = [
  {
    label: ' ',
    inst: ' ',
    title: 'Interactive Quantum Mechanics',
    topics: [
      {
        num: '01',
        title: 'Understand Light Intensity and Frequency',
        blocks: [
          {
            title: 'Explore light waves by changing intensity and frequency. Compare red, green, and blue light, investigate amplitude and wavelength, and discover how photon energy depends on frequency.',
            items: [
              <a href="intensity_frequency.html">Click Here!</a>
            ],
          },
        ],
      },
    ],
  },
]

export default function Teaching() {
  const [openTopics, setOpenTopics] = useState<Record<string, boolean>>({})

  function toggleTopic(key: string) {
    setOpenTopics(prev => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <>
      <Nav />

      {/* Hero */}
      <div className="bg-[#fcfcfc] border-b border-[#1a1a1a]/[0.07]">
        <div className="pt-36 pb-16 max-w-[1200px] mx-auto px-16 max-md:px-6">
          <FadeUp>
            <span className="font-mono text-[0.68rem] tracking-[0.18em] uppercase text-[#3d8bfd] mb-3 block">Quantum Lab</span>
            <h1 className="font-sans text-[clamp(2.5rem,5vw,4rem)] font-extrabold text-[#1a1a1a] leading-[1.05] tracking-[-0.03em] mb-3">
              <span className="text-[#3d8bfd]">Learning Quantum Mechanics Interactively</span>
            </h1>
            <p className="font-serif text-[#1a1a1a]/70 text-[1rem] max-w-[600px] leading-relaxed">
              Discover Quantum Mechanics Through Experimental Simulations. Adjust experimental parameters, visualize physical phenomena, investigate mathematical relationships, and develop an intuitive understanding of how the quantum world works.
            </p>
          </FadeUp>
        </div>
      </div>

      <div className="bg-[#fcfcfc]">
        {eras.map(era => (
          <div key={era.label}>

            {/* Era header */}
            <FadeUp>
              <div className="border-y border-[#1a1a1a]/[0.07] bg-[#f5f5f5] py-7 px-16 max-md:px-6">
                <div className="max-w-[1200px] mx-auto flex items-center gap-12 max-md:flex-col max-md:gap-4 max-md:items-start">
                  <div className="min-w-[260px]">
                    <span className="block font-sans text-[0.7rem] font-semibold text-[#3d8bfd] tracking-[0.15em] uppercase mb-1">{era.label}</span>
                    <span className="font-mono text-[0.75rem] text-[#1a1a1a]/50">{era.inst}</span>
                  </div>
                  <h2 className="font-sans text-2xl font-bold text-[#1a1a1a] tracking-[-0.02em] border-l border-[#1a1a1a]/[0.08] pl-12 max-md:border-l-0 max-md:pl-0 max-md:border-t max-md:pt-4">
                    {era.title}
                  </h2>
                </div>
              </div>
            </FadeUp>

            {era.topics.map(topic => {
              const key = topic.num
              const isOpen = !!openTopics[key]
              return (
                <FadeUp key={key}>
                  <div className="border-b border-[#1a1a1a]/[0.07]">
                    <button
                      onClick={() => toggleTopic(key)}
                      className="w-full flex items-center gap-6 px-16 py-5 text-left transition-colors hover:bg-[#3d8bfd]/[0.03] max-md:px-6"
                    >
                      <span className="font-mono text-[0.65rem] text-[#3d8bfd] tracking-[0.1em] opacity-70 min-w-[24px]">{topic.num}</span>
                      <span className={`flex-1 font-sans text-[0.92rem] font-medium tracking-[0.01em] transition-colors ${isOpen ? 'text-[#1a1a1a]' : 'text-[#1a1a1a]/60'}`}>
                        {topic.title}
                      </span>
                      <span className={`font-sans text-2xl text-[#3d8bfd] font-light leading-none transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>+</span>
                    </button>

                    <div className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-[4000px]' : 'max-h-0'}`}>
                      <div className="px-16 pb-10 space-y-8 max-md:px-6">
                        {topic.blocks.map((block, bi) => (
                          <div key={bi}>
                            <h4 className="font-sans text-[1rem] font-bold text-[#1a1a1a] mb-3 tracking-[-0.01em]">{block.title}</h4>
                            {block.intro && (
                              <p className="font-serif text-[#1a1a1a]/70 text-[0.95rem] leading-[1.8] mb-2">{block.intro}</p>
                            )}
                            <ul className="space-y-2">
                              {block.items.map((item, ii) => (
                                <li key={ii} className="relative pl-5 font-serif text-[#1a1a1a]/75 text-[0.95rem] leading-[1.8]">
                                  <span className="absolute left-0 top-[0.15rem] text-[#3d8bfd] text-[0.75rem]">—</span>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </FadeUp>
              )
            })}
          </div>
        ))}
      </div>

      <Footer />
    </>
  )
}
