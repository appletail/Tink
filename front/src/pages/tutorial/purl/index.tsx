import React, { useEffect, useRef, useLayoutEffect, Suspense } from 'react'

import { Html } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Stepone from '@/pages/tutorial/knit/components/stepone'

import tuto from '@/styles/tutorial.module.css'

gsap.registerPlugin(ScrollTrigger)

const rows = 1
const columns = 8
const missingImages = 0 // The number of missing images in the last column
const frame_count = rows * columns - missingImages - 1

const imageWidth = 15360 // This is an approximate value
const imageHeight = 1080 // This is an approximate value
const horizDiff = imageWidth / columns
const vertDiff = imageHeight / rows

function PurlTutorial() {
  const imageViewer = useRef(null)
  const imageScene = useRef(null)
  const comp = useRef()

  useLayoutEffect(() => {
    gsap.set(imageViewer.current, { width: horizDiff, height: vertDiff })
    const setPos = gsap.quickSetter(imageViewer.current, 'background-position')

    const obj = { num: 0 }
    const ctx = gsap.context(() => {
      gsap.to(obj, {
        num: frame_count,
        ease: 'steps(' + frame_count + ')',
        scrollTrigger: {
          trigger: imageScene.current,
          start: 'top top',
          end: '+=' + imageHeight,
          pin: true,
          anticipatePin: 1,
          scrub: true,
          markers: true,
        },
        onUpdate: () =>
          setPos(`
        ${-Math.round(Math.floor(obj.num / rows) * horizDiff)}px
        ${-Math.round((obj.num % rows) * vertDiff)}px
      `),
      })
    }, comp)
    return () => ctx.revert()
  }, [])

  return (
    <div>
      {/* 이미지 영역 */}

      <section ref={imageScene} className="w-full h-full bg-pink relative">
        <div ref={imageViewer} className={tuto.imageBox}></div>
        {/* <div ref={imageViewer}></div> */}
      </section>

      {/* 3d model 영역 */}
      <section className="w-full h-screen bg-red relative">
        <Canvas shadows className="h-screen">
          <Suspense fallback={null}>
            <Stepone />
          </Suspense>
        </Canvas>
      </section>

      {/* <section ref={imageScene} className="w-full h-screen bg-mint">
        <div ref={imageViewer} className={tuto.secondImage}>
          {' '}
        </div>
      </section> */}
    </div>
  )
}

export default PurlTutorial
