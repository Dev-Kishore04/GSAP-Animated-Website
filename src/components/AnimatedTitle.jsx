import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import clsx from "clsx";

gsap.registerPlugin(ScrollTrigger)

const AnimatedTitle = ({title,containerClass}) => {

    const AnimatedRef = useRef(null)

    useEffect(()=>{
        const ctx=  gsap.context(()=>{

            

            const titleAnimation = gsap.timeline({
                scrollTrigger:{
                    trigger: AnimatedRef.current,
                    start: '100px bottom',
                    end:'center bottom',
                    toggleActions: 'play none none reverse'
                }
            })
            titleAnimation.fromTo('.animated-word', 
                {
                    opacity: 0,
                    x: 10,
                    y: 51,
                    z: -60,
                    rotationY: 60,
                    rotationX: -40
                },
                {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    z: 0,
                    rotationY: 0,
                    rotationX: 0,
                    ease: 'power2.inOut',
                    stagger: 0.02,
                }
            );
        
        },AnimatedRef)

        return ()=>ctx.revert();
    },[])

  return (
    <div ref={AnimatedRef} className={clsx("animated-title", containerClass)}>
        {title.split('<br />').map((line ,index)=>(
            <div key={index} className='fllex-center max-w-full flex-wrap gap-2 px-10 md:gap-3 '>
                {line.split(' ').map((word,i)=>(
                    <React.Fragment key={i}>
                    <span className='animated-word' dangerouslySetInnerHTML={{__html: word}} />
                    {i < line.split(' ').length - 1 && ' '}  {/* Add space after each word except the last */}
                    </React.Fragment>
                ))}
            </div>
        ))}
    </div>
  )
}

export default AnimatedTitle