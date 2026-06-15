import React, { useRef } from 'react'
import AnimatedTitle from './AnimatedTitle'
import gsap from 'gsap'
import RoundedCorners from './RoundedCorners'
import Button from './Button'

const Story = () => {

    const frameRef =useRef(null)

    const handleMouseLeave=()=>{
 
        const element = frameRef.current;

        gsap.to(element,{
            duration: 0.3,
            rotateX: 0, rotateY: 0,
            ease: 'power1.inOut',
            transformPerspective:500,
        })
    }
    const handleMouseMove=(e)=>{
        const { clientX, clientY }= e;
        const element = frameRef.current;

        if(!element) return;

        const rect = element.getBoundingClientRect();
        const x= clientX - rect.left 
        const y= clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y-centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        gsap.to(element,{
            duration: 0.3,
            rotateX, rotateY,
            transformPerspective: 500,
            ease: 'power1.inOut',
            
        })
    }
  return (
    <section id='prolouge' className='min-h-dvh w-screen bg-black text-blue-50'>
        <div className='flex size-full flex-col items-center py-10 pb-24'>
            <p className='font-general text-sm uppercase md:text-[10px]'>The Multiversal ip world</p>
            <div className='relative  size-full'>
                <AnimatedTitle title="The St<b>o<b/>ry of <br />a Hidden Realm" sectionId='#story'
                containerClass="mt-5 pointer-events-none text-center mix-blend-difference relative z-10"></AnimatedTitle>

                <div className='story-img-container'>
                    <div className='story-img-mask'>
                        <div className='story-img-content'>
                            <img ref={frameRef} src={`${import.meta.env.BASE_URL}/img/entrance.webp`} alt="entrance" 
                            className='object-contain' onMouseLeave={handleMouseLeave}
                            onMouseUp={handleMouseLeave}
                            onMouseEnter={handleMouseLeave}
                            onMouseMove={handleMouseMove} />
                        </div>
                    </div>
                    <RoundedCorners></RoundedCorners>
                </div>
            </div>

            <div className='-mt-8 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end'>
                <div className='flex h-full w-fit flex-col items-center md:items-start'>
                    <p className='mt-3 max-w-sm text-center font-circular-web text-violet-50 
                    md:text-start'>Lorem ipsum dolor sit amet consectetur adipisitaque aliquid rem amet necessitatibus repellendus.</p>

                    <Button id="story-btn" title='discover prolouge' containerClass='mt-3 text-black'></Button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Story