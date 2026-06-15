import React from 'react'
import Button from './Button'

const ImageClipBox = ({src,clipClass}) => (
  <div className={clipClass}>
    <img src={src} alt="conatct"/>
  </div>
)
const Contact = () => {
  return (
    <div id='contact' className='my-20 min-h-96 w-screen px-10'>
      <div className='relative rounded-lg bg-black py-24 text-blue-50
      sm:overflow-hidden'>
        <div className='absolute -left-20 top-0 hidden h-full w-72 overflow-hidden
        sm:block lg:left-20 lg:w-96 '>
          <ImageClipBox src={`${import.meta.env.BASE_URL}img/contact-1.webp`}
          clipClass="contact-clip-path-1" />
          <ImageClipBox src={`${import.meta.env.BASE_URL}img/contact-2.webp`}
          clipClass="contact-clip-path-2 translate-y-60 lg:translate-y-40" />
        </div>

        <div className='absolute -top-40 left-20 w-60 md:top-60 
        md:left-auto md:right-10 lg:w-80 md:mix-blend-difference'>
          <ImageClipBox src={`${import.meta.env.BASE_URL}img/swordman-partial.webp`}
          clipClass="absolute md:scale-125 " />
          <ImageClipBox src={`${import.meta.env.BASE_URL}img/swordman.webp`}
          clipClass="sword-man-clip-path md:scale-125 " />
        </div>

        <div className='flex flex-col items-center text-center'>
          <p className='font-general text-[10px] uppercase'>Join zentery</p>
          <p className='special-font mt-10 w-full  font-zentry text-5xl leading-[0.9] md:text-[6rem]'>
            lets b<b>u</b>lid the <br /> new era of <br /> g<b>a</b>ming t<b>o</b>geather</p>
          <Button title='contact us' containerClass='mt-10 text-black cursor-pointer'></Button> 
        </div>
      </div>
    </div>
  )
}

export default Contact