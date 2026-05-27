'use client'
import { useState } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import FadeUp from '@/components/FadeUp'

type SubTopic = {
  title: string
  body: string[]
  images?: { src: string; alt: string; caption?: string }[]
  papers?: { label: string; href: string }[]
}

type Topic = {
  num: string
  title: string
  intro?: string[]
  subTopics?: SubTopic[]
  body?: string[]
  formula?: string
  images?: { src: string; alt: string; caption?: string }[]
  papers?: { label: string; href: string }[]
}

type Era = {
  label: string
  inst: string
  title: string
  images?: { src: string; alt: string; caption?: string }[]
  topics: Topic[]
}

const eras: Era[] = [
  {
    label: '2023 — Present',
    inst: 'University of Nevada Las Vegas',
    title: 'Postdoctoral Research',
    topics: [
      {
        num: '01',
        title: 'Quantum Controlled Ultracold Inelastic Scattering',
        intro: [
          'Quantum control of chemical reactions and inelastic scattering of molecules remain at the forefront of modern theoretical and computational chemistry. Quantum control can be achieved through quantum interference effects or quantum state preparations of molecular states, e.g., controlling alignment or orientations of the reactant molecules, generally referred to as stereodynamics. These effects are amplified at low temperatures where quantum effects dominate. Recent advances in molecular cooling and trapping technologies have also led to renewed interest in inelastic and reactive collisions of atom-molecule and molecule-molecule systems. Indeed, collisions of cold and ultracold diatomic molecules are an active area of experimental and theoretical research due to their applications to quantum sensing, ultracold chemistry, quantum computing, and quantum information processing. Although, diatomic species such as CaF, SrF, RbCs, KRb, NaK, etc. are preferred molecules for such applications, their small rotational constants lead to high densities of states making rigorous quantum calculations of diatom-diatom collisions involving these molecules computationally intractable. Therefore, lighter diatomic molecules, such as H₂ and its isotopologues, are generally preferred to benchmark theoretical studies against experiments. These systems are characterized by large rotational constants and low densities of states, thus requiring only a small number of orbital angular momentum partial waves to yield converged cross sections in the micro-kelvin (ultracold) range of collision energies.',
          'Prof. Richard N. Zare and his research group at the Stanford University have recently developed a coherent optical technique, called Stark-induced adiabatic Raman passage (SARP), to study quantum controlled cold collisions of light molecular systems, such as H₂, and its isotopologues. They conducted experiments on lighter molecular systems, starting from HD+H₂, HD+He and HD+D₂, D₂+He, D₂+Ne and D₂+D₂ using the new technique SARP. Their objective was to explore quantum control of molecular collisions in cold collision energy regime, particularly near 1 K. The quantum control is achieved by preparing the alignment of the molecular bond-axis relative to the initial velocity vector. The experiments can prepare parallel alignment, which is called H-SARP or perpendicular alignment, which is called V-SARP. The choice of light molecules such as H₂, HD, and D₂ restricts the number of partial waves to a few, typically below 𝓁=5, mostly, 𝓁 =0, 1 & 2. The experiments essentially created a new sub-field of quantum control of molecular collisions and chemical reactions through quantum state preparation & molecular alignment.',
          'We conducted theoretical simulations of stereodynamic controlled cold collisions of HD+D₂, HD+He & D₂+He, and D₂(𝑣 = 4)+Ne to correctly interpreting experimental results and also to gain insights on molecular interactions and thus chemical reactions as well at a fundamental quantum level. The experiments involve an average over a broad range of collision energies, from nearly zero kelvin to a few kelvin; and thus the experimental results are not energy resolved. Analysis of experimental results relied on numerical fitting of the experimental data to a differential rate constructed from possible outgoing partial waves. This often led to incorrect interpretation of experimental results in terms of specific partial-waves that control the angular distribution. We conducted theoretical investigations to correctly identify specific partial-waves that control the angular distribution and explains the experimental outcome.',
        ],
            images: [
              { src: '/Machine-Learning-in-Quantum-Dynamics/assets/Fig_HD_D2_HSARP_VSARP_dj1_page-0001.jpg', alt: 'HD+D2 SARP', caption: 'Comparison of SARP experimental measurements against theoretical simulation of HD+D₂ cold collisions.' },
              { src: '/Machine-Learning-in-Quantum-Dynamics/assets/Fig_HD_He_exp_v2_page-0001.jpg', alt: 'HD + He', caption: 'Comparison of SARP experimental measurements against theoretical simulation of HD+He cold collisions.' },
              { src: '/Machine-Learning-in-Quantum-Dynamics/assets/Fig_D2_Ne_HSARP_XSARP_page-0001.jpg', alt: 'D₂ + Ne', caption: 'Comparison of SARP experimental measurements against theoretical simulation of D₂+Ne cold collisions.' },
            ],
        subTopics: [
          {
            title: 'Collision of HD + D₂',
            body: [
              'Please refer to the research article for more details.',
            ],
            papers: [{ label: 'HD+D₂: Physical Chemistry Chemical Physics, 26, 18368 (2024)', href: 'https://doi.org/10.1039/D4CP01737D' }],
          },
          {
            title: 'HD and D₂ Collisions with He',
            body: [
              'Please refer to the research article for more details.',
            ],
            papers: [{ label: 'HD+He & D₂+He: Journal of Chemical Physics, 162, 104201 (2025)', href: 'https://doi.org/10.1063/5.0250522' }],
          },
          {
            title: 'Cold Collisions of D₂(𝑣=4) with Ne',
            body: [
              'Please refer to the research article for more details.',
            ],
            papers: [{ label: 'D₂(𝑣=4)+Ne: Journal of Chemical Physics, 162, 164307 (2025)', href: 'https://doi.org/10.1063/5.0266360' }],
          },
        ],
      },
      {
        num: '02',
        title: 'Neural Network–Assisted Quantum Scattering',
        intro: [
          'One of the major interests of astronomers is to observe different bodies in our solar system. Several state-of-the-art observatories, like Atacama Large Millimeter Array (ALMA) radio telescope, and other space-exploration telescopes, such as the Spitzer space telescope and, most recently, the James Webb space telescope (JWST), have been deployed to obtain data.',
          'The data collected from the Herschel Space Observatory, ALMA and other ground telescope, JWST and Spitzer space mission on comets and icy moon indicate that ices containing H₂O and HDO are present on coma of several comets. With better HDO and H₂O collision rate-coefficients, astronomical models can achieve more accurate measurement of cometary D/H from those data, which will help test theories regarding the origins of Earth’s water. Measuring cometary D/H accurately in a large sample of comets is one of the key drivers for such a far-IR telescope. Another utility of the proposed rate-coefficients is correctly analysing data collected from this mission.',
          'Modelling water molecule collisions is especially demanding due to the quantum mechanical complexity of the H₂O+H₂O system. Being an asymmetric top rotor, each water molecule has vast number of quantum states and transitions that must be considered. Moreover, the coupling between vibrational and rotational states further complicates the dynamic description, necessitating advanced theoretical and computational methods. We studied rotational transitions in H₂O+H₂O collisions involving machine learning (ML) as a tool using an ensemble of neural networks (NNs) to predict cross sections to construct a database of rate-coeﬃcients for rotationally inelastic transitions in collisions of complex molecules such as water. The proposed methodology utilized data computed with a MQCT by Mandal et al. from few years ago. The study illustrated that eﬃcient ML models using NNs can be built to accurately interpolate in the space of 12 quantum numbers for rotational transitions in two asymmetric top molecules, spanning both initial and final states. Using only about 10% of the computed data for training, the NNs predicted cross sections of state-to-state rotational transitions in H₂O+H₂O collisions with an average relative root mean squared error of 0.409. The rate-coefficients computed using the predicted state-to-state cross sections were compared against those obtained entirely from MQCT calculations. The agreement was excellent with an average percent deviation of about 13.5% while achieving an estimated computational efficiency by a factor of 50.',
        ],
            images: [
              { src: '/Machine-Learning-in-Quantum-Dynamics/assets/Fig_H2O_H2O_MLP_fig_page-0001.jpg', alt: 'MLP neural network architecture', caption: 'Multi-layer perceptron architecture for rate coefficient prediction' },
              { src: '/Machine-Learning-in-Quantum-Dynamics/assets/Fig_H2O_H2O_TACS_Trot300_page-0001.jpg', alt: 'TACS comparison Trot=300K', caption: 'MQCT vs MLP thermally-averaged cross sections at T = 300 K' },
            ],
            papers: [{ label: '"Structure and dynamics of chemical systems: Honouring N. Sathyamurthy’s 75th birthday", Physical Chemistry Chemical Physics, 27, 23000 (2025)', href: 'https://doi.org/10.1039/D5CP02812D' }],
      },
      {
        num: '03',
        title: 'Non-Adiabatic Effects in Ultracold Reactions',
        body: [
          'Chemical reactions are at the core of chemistry and scientists are fascinated to study chemical reactions since ancient times. However, the details of a chemical reaction at the quantum level are a relatively recent topic that has intricate researchers. A proper quantum mechanical description of a chemical reaction was almost impossible until very recently. Today, the exponential advancement in the architecture of computers have made it possible by exploiting unprecedented computational resources; however, the simulation of chemical reaction still remains a huge challenge even for the simplest type of reaction of atom-diatom, including H+H₂ or H+D₂.',
          'There have been several attempts to find solution to this problem using classical trajectory simulation method since last few decades. However, the common issue with classical mechanics in studying chemical reactions is that it displays a rather similar pattern of dwell times between entering and leaving the deep interacting regime of the higher dimensional potential surface. Another recent approach is statistical methods using quantum mechanics. This approach recently has attracted several researchers to study chemical reactions, however, the reliability of the methodology to obtain accurate measurements of the state-to-state transitions are questionable.',
          'The adiabatically adjusting principal axis hyperspherical (APH) quantum reactive scattering package (APH3D) is the only suite of codes available to the community for studying a chemical reaction with exact quantum mechanical treatment. In this numerical simulation, the radial part of the time-independent Schrödinger equation (TISE) is solved until the interaction between the atom-diatom dissipates to negligible values or zero which is unusually very large. This formulation of solving the TISE is accurate treatment of the problem, but computationally rather challenging to converge.',
        ],
      },
    ],
  },
  {
    label: 'May 2021 — Dec 2022',
    inst: 'Marquette University',
    title: 'Postdoctoral Research',
    topics: [
      {
        num: '04',
        title: 'Database of Rate Coefficients for H₂O + H₂O & Astronomical Modeling',
        body: [
          'Astronomers need rate-coefficients of inelastic collisions of molecules to interpret the spectroscopic data obtained by various state-of-the-art observatories, like ALMA, Spitzer, and JWST. However, computing these rate-coefficients accurately using quantum mechanics for collisions of polyatomic molecules, such as H₂O + H₂O, is impossible.',
          'We performed new calculations of collision cross sections for state-to-state transitions between the rotational states in an H₂O + H₂O system. Calculations were carried out using a mixed quantum-classical theory (MQCT) approach. The large basis set permits us to predict thermally averaged cross sections for 441 transitions in para- and ortho-H₂O.',
          'A two-temperature model was employed that assumed translational and rotational degrees of freedom achieve their own equilibria independently. We find a change of up to 20% in the H₂O rotational level populations. This research was done in collaboration with Prof. François Lique at CNRS-Université de Rennes and Prof. Martin A. Cordiner at NASA GSFC.',
        ],
      },
      {
        num: '05',
        title: 'Collisional Energy Transfer of PAHs in the Interstellar Medium',
        body: [
          'A computationally affordable methodology is developed to predict cross sections and rate coefficients for collisional quenching and excitation of large molecules in space, such as PAHs using mixed quantum/classical theory (MQCT).',
          'The method is applied to compute cross sections for rotational excitation and quenching of a benzene molecule (C₆H₆) by collisions with He atoms in a broad range of energies, using a very large basis set of rotational eigenstates up to j = 60, and close to one million nonzero matrix elements for state-to-state transitions.',
        ],
        images: [
          { src: '/Machine-Learning-in-Quantum-Dynamics/assets/AstroPAH.png', alt: 'Polycyclic aromatic hydrocarbon structure', caption: 'PAH molecular structure relevant to ISM collisional studies' },
        ],
      },
    ],
  },
  {
    label: 'Aug 2016 — May 2021',
    inst: 'Marquette University',
    title: 'PhD Research',
    topics: [
      {
        num: '06',
        title: 'Development of Mixed Quantum/Classical Theory (MQCT)',
        body: [
          'Inelastic molecular collisions represent a fundamental chemical and physical process, in which the energetically excited molecule in a bath gas exchanges its internal energy with quenchers and finally gets stabilized.',
          'We developed an alternative method to describe the molecular energy transfer process — mixed quantum/classical theory (MQCT). It treats internal degrees of freedom quantum mechanically, while the scattering is treated classically. A significant speed up is achieved by classical-trajectory treatment of the scattering process.',
          'A user-ready code named "MQCT" has been developed and made available to the community. To our best knowledge, no other code can do the inelastic scattering calculations of two general asymmetric top rotors.',
        ],
      },
      {
        num: '07',
        title: 'Adiabatic Trajectory Approximation (AT-MQCT)',
        body: [
          'Although MQCT is more affordable than full quantum treatment, there are still molecular systems and collision conditions where even MQCT calculations become computationally demanding.',
          'The adiabatic trajectory approximation conducts MQCT calculations in two consecutive steps. During the first step, the molecular basis size is restricted to degenerate states of the initial rotational channel only. This information is then used to propagate the quantum equations of motion along this pre-computed adiabatic path.',
          'This method was applied to H₂O + H₂ and a very significant acceleration of two orders of magnitude is obtained at high collision energies, with results still in excellent agreement with full quantum calculations.',
        ],
      },
      {
        num: '08',
        title: 'Differential Cross Sections for Inelastic Transitions Using MQCT',
        body: [
          'In this project, we expand on calculations of differential cross sections using MQCT. It is found that MQCT is considerably improved by using integer values of orbital angular momentum l, just like in quantum theory, instead of treating it as a continuous classical variable.',
          'Differential cross sections for inelastic scattering were reported for the first time. Phase appears to be a dominant factor in the elastic scattering cross section, and interference between different values of l produces the characteristic quantum oscillatory patterns.',
        ],
        images: [
          { src: '/Machine-Learning-in-Quantum-Dynamics/assets/PhD_acknowledgement.png', alt: 'PhD thesis acknowledgement', caption: 'From the PhD thesis — Marquette University, 2021' },
        ],
      },
    ],
  },
  {
    label: 'Aug 2015 — Apr 2016 & 2014 — 2015',
    inst: 'IIT Guwahati & Visva-Bharati University',
    title: 'Early Research',
    topics: [
      {
        num: '09',
        title: 'Molecular Dynamics of λ-Protein with a Surfactant (IIT Guwahati)',
        body: [
          'Proteins are one of the major building blocks of our body. Their folded structure and spatial orientation plays a crucial role in doing their jobs. Experimental observation that low millimolar concentrations of the surfactant-like denaturant dodine can induce cooperative unfolding of small proteins and by the need to understand, at molecular resolution, how such potent denaturants act and how protective osmolytes (here, trehalose) counteract them',
          'We performed all-atom molecular-dynamics simulations of a mutated λ-repressor in water in a long time scale of 1000 ns, in the presence of 10 mM dodine, and in ternary mixtures with 0.1–1.0 M trehalose. We found that dodine denatures the protein primarily by its hydrophobic tail and charged guanidinium head binding near the terminal helices (H1, H5), disrupting intra-protein hydrogen bonds and increasing RMSD and helical loss. In this circumstance, trehalose at moderate/high concentrations (0.5–1.0 M) restores stability by replacing dodine and some hydration water in the protein’s first solvation shell, forming favorable protein–trehalose hydrogen bonds, preferentially solvating dodine (reducing protein–dodine electrostatic and vdW interactions), and thereby re-establishing native contacts.',
        ],
        papers: [{ label: 'Physical Chemistry Chemical Physics, 19, 13160 (2017)', href: 'https://doi.org/10.1039/C6CP08289K' }],
      },
      {
        num: '10',
        title: 'Vibration Energy Harvesting — MS Thesis (Visva-Bharati)',
        body: [
          'Modern human life is surrounded by tiny electronic devices powered by batteries. There is a growing need for an alternative technology to power small, distributed devices—such as wireless sensors, medical implants, and embedded monitoring systems—where conventional battery replacement is impractical. This motivated research in vibration-based energy harvesting.',
          'We built numerical simulations modelling devices called vibration energy harvesters using piezoelectric materials. A main property of piezoelectric materials is that they generate voltage when bent or stretched. Our primary focus was on understanding the effect of different initial conditions on the efficiency of energy capture. We address limitations in previous studies that mostly assumed idealized excitations (e.g., sinusoidal or white noise) by analyzing a more realistic scenario in which the mechanical oscillator is driven by colored Gaussian noise representing ambient vibrations. Our investigation is focused on how the interplay between oscillator dynamics (linear vs. nonlinear potentials), environmental noise characteristics, and piezoelectric circuit parameters affects energy harvesting performance. We found that that efficient energy conversion occurs when the output voltage closely follows the oscillator motion and the role of voltage–position correlation. We demonstrated that nonlinear oscillators can yield higher voltage variance and efficiency—especially near autonomous stochastic resonance. The optimal conditions for power transfer through the interaction of resistance, capacitance, and noise properties if reported as well.',
        ],
        papers: [{ label: 'The European Physical Journal B, 89, 224 (2016)', href: 'https://doi.org/10.1140/epjb/e2016-70271-7' }],
      },
    ],
  },
]

// Reusable component: grid layout for text and images
function ContentSection({
  body,
  images,
  formula,
  papers,
  intro,
}: {
  body?: string[]
  images?: { src: string; alt: string; caption?: string }[]
  formula?: string
  papers?: { label: string; href: string }[]
  intro?: string[]
}) {
  return (
    <div className="block overflow-hidden">
      {/* Image column (Floating) */}
      {images && images.length > 0 && (
        <div className="float-right ml-10 mb-6 w-[320px] max-lg:float-none max-lg:w-full max-lg:ml-0 max-lg:mb-8 flex flex-col gap-6">
          {images.map((img, i) => (
            <div key={i} className="group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto rounded-lg border border-[#1a1a1a]/[0.08] block transition-transform duration-300 group-hover:scale-[1.02]"
              />
              {img.caption && (
                <p className="mt-2.5 font-mono text-[0.64rem] text-[#1a1a1a]/40 tracking-[0.04em] leading-snug">{img.caption}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Text content */}
      <div className="text-content">
        {/* Intro paragraphs */}
        {intro?.map((p, i) => (
          <p key={i} className="font-serif text-[#1a1a1a]/85 text-[0.95rem] leading-[1.9] mb-4">{p}</p>
        ))}

        {/* Body paragraphs */}
        {body?.map((p, i) => (
          <p
            key={i}
            className="font-serif text-[#1a1a1a]/85 text-[0.95rem] leading-[1.9] mb-4"
            dangerouslySetInnerHTML={{ __html: p.replace(/\*\*(.+?)\*\*/g, '<strong class="text-[#1a1a1a] font-semibold">$1</strong>') }}
          />
        ))}

        {/* Formula */}
        {formula && (
          <div className="font-mono text-[0.95rem] text-[#3d8bfd] bg-[#3d8bfd]/[0.06] border border-[#3d8bfd]/20 border-l-[3px] border-l-[#3d8bfd] px-6 py-4 rounded my-4 tracking-[0.04em] clear-both">
            {formula}
          </div>
        )}

        {/* Paper links */}
        {papers && papers.length > 0 && (
          <div className="mt-6 flex flex-col gap-3 clear-both">
            {papers.map((paper, i) => (
              <div key={i}>
                <a
                  href={paper.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-[0.75rem] text-[#3d8bfd] border border-[#3d8bfd]/30 rounded px-4 py-2 transition-all hover:bg-[#3d8bfd]/10 hover:border-[#3d8bfd]"
                >
                  ↗ Read Paper — {paper.label}
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default function Research() {
  const [openTopics, setOpenTopics] = useState<Record<string, boolean>>({})
  const [openSubs, setOpenSubs] = useState<Record<string, boolean>>({})

  function toggleTopic(key: string) {
    setOpenTopics(prev => ({ ...prev, [key]: !prev[key] }))
  }
  function toggleSub(key: string) {
    setOpenSubs(prev => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <>
      <Nav />

      {/* Hero */}
      <div className="bg-[#fcfcfc] border-b border-[#1a1a1a]/[0.07]">
        <div className="pt-36 pb-16 max-w-[1200px] mx-auto px-16 max-md:px-6">
          <FadeUp>
            <span className="font-mono text-[0.68rem] tracking-[0.18em] uppercase text-[#3d8bfd] mb-3 block">Research</span>
            <h1 className="font-sans text-[clamp(2.5rem,5vw,4rem)] font-extrabold text-[#1a1a1a] leading-[1.05] tracking-[-0.03em] mb-3">
              Exploring the <span className="text-[#3d8bfd]">Quantum Frontier</span>
            </h1>
            <p className="font-sans text-[#1a1a1a]/70 text-[0.9rem] max-w-[600px] leading-relaxed">
              A detailed account of my research across ultracold molecular collisions, neural network–assisted scattering, and astrophysical energy transfer — from PhD through current postdoctoral work.
            </p>
          </FadeUp>
        </div>
      </div>

      <div className="bg-[#fcfcfc]">
        {eras.map(era => (
          <div key={era.label}>

            {/* Era header — fixed-width left column so all titles align perfectly */}
            <FadeUp>
              <div className="border-y border-[#1a1a1a]/[0.07] bg-[#f5f5f5] py-6 px-16 max-md:px-6">
                <div className="max-w-[1200px] mx-auto flex items-center gap-0 max-md:flex-col max-md:gap-1 max-md:items-start">
                  {/* Fixed-width meta column — same width on every era row */}
                  <div className="w-[260px] flex-shrink-0 pr-6 max-md:w-auto max-md:pr-0 max-md:mb-2">
                    <span className="block font-sans text-[0.68rem] font-semibold text-[#3d8bfd] tracking-[0.15em] uppercase leading-tight mb-0.5">
                      {era.label}
                    </span>
                    <span className="font-mono text-[0.7rem] text-[#1a1a1a]/45 leading-tight">
                      {era.inst}
                    </span>
                  </div>
                  {/* Vertical divider */}
                  <div className="w-px h-9 bg-[#1a1a1a]/10 flex-shrink-0 mr-6 max-md:hidden" />
                  {/* Era title — always starts at same x-position */}
                  <h2 className="font-sans text-[1.35rem] font-bold text-[#1a1a1a] tracking-[-0.02em] leading-snug">
                    {era.title}
                  </h2>
                </div>
              </div>
            </FadeUp>

            {/* Topics */}
            {era.topics.map(topic => {
              const topicKey = topic.num
              const isOpen = !!openTopics[topicKey]

              return (
                <FadeUp key={topicKey}>
                  <div
                    className="border-b border-[#1a1a1a]/[0.07]"
                    id={topic.num === '01' ? 'ultracold' : topic.num === '02' ? 'nn-scattering' : undefined}
                  >
                    {/* Accordion trigger */}
                    <button
                      onClick={() => toggleTopic(topicKey)}
                      className="w-full flex items-center gap-6 px-16 py-5 text-left transition-colors hover:bg-[#3d8bfd]/[0.03] max-md:px-6"
                    >
                      <span className="font-mono text-[0.65rem] text-[#3d8bfd] tracking-[0.1em] opacity-70 min-w-[24px]">{topic.num}</span>
                      <span className={`flex-1 font-sans text-[0.92rem] font-medium tracking-[0.01em] transition-colors ${isOpen ? 'text-[#1a1a1a]' : 'text-[#1a1a1a]/60'}`}>
                        {topic.title}
                      </span>
                      <span className={`font-sans text-2xl text-[#3d8bfd] font-light leading-none transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>+</span>
                    </button>

                    {/* Expanded content */}
                    <div className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-[9000px]' : 'max-h-0'}`}>
                      <div className="px-16 pb-10 max-md:px-6">

                        {/* Content + grid layout */}
                        {(topic.intro || topic.body || topic.images || topic.formula || topic.papers) && (
                          <ContentSection
                            intro={topic.intro}
                            body={topic.body}
                            images={topic.images}
                            formula={topic.formula}
                            papers={topic.papers}
                          />
                        )}

                        {/* Sub-topics */}
                        {topic.subTopics?.map((sub, si) => {
                          const subKey = `${topicKey}-${si}`
                          const subOpen = !!openSubs[subKey]
                          return (
                            <div key={si} className="mt-4 border border-[#1a1a1a]/[0.08] rounded-lg overflow-hidden">
                              <button
                                onClick={() => toggleSub(subKey)}
                                className="w-full flex items-center justify-between px-6 py-4 bg-[#f5f5f5] text-left transition-colors hover:bg-[#3d8bfd]/[0.05]"
                              >
                                <span className="font-sans text-[1rem] font-semibold text-[#1a1a1a]">{sub.title}</span>
                                <span className={`font-sans text-xl text-[#3d8bfd] font-light ml-4 flex-shrink-0 transition-transform duration-300 ${subOpen ? 'rotate-45' : ''}`}>+</span>
                              </button>
                              <div className={`overflow-hidden transition-all duration-500 ${subOpen ? 'max-h-[6000px]' : 'max-h-0'}`}>
                                <div className="px-6 py-5 bg-white border-t border-[#1a1a1a]/[0.06]">
                                  <ContentSection
                                    body={sub.body}
                                    images={sub.images}
                                    papers={sub.papers}
                                  />
                                </div>
                              </div>
                            </div>
                          )
                        })}
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
