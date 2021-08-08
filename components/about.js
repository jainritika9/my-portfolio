import Image from 'next/image';
import Button from "@material-tailwind/react/Button";
import Hightext from '../components/hightext.js';
import {motion,useAnimation} from 'framer-motion';
import {useEffect, useState} from 'react';
import {useInView} from 'react-intersection-observer';

function About() {
  const {ref, inView} = useInView();
  const animation =useAnimation();
  const [flip,setFlip]= useState(false);
  const variants={
    hidden: {x:'-100vw'},
    visible: {
      x:0,
      transition:{type:'spring' ,duration:2,bounce:0.3}
    }
  }
  useEffect(()=>{
    if(inView){
      animation.start('visible');
    }
    if(!inView){
      animation.start('hidden');
    }
  },[inView])
    return (
        <div  className=''>
        <Hightext text='About Me' color='red'/>
        <div ref={ref} className='grid grid-flow-row-dense md:grid-cols-2 items-center justify-center '>
          <div className='flex items-center  justify-center my-10 md:my-20'>
            
          <motion.div initial='hidden' animate={animation} variants={variants} className="relative py-3   ">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-500 shadow-lg transform 
          -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl dark:bg-gradient-to-r dark:from-red-400 dark:to-yellow-500 "></div>
             
                <div className='p-10 items-center transform bg-gradient-to-r from-red-400 to-purple-400   shadow-lg sm:rounded-3xl
                dark:from-green-500 dark:to-blue-400 '>
                  <Image src='/profile.png' width='350' height='350' className='rounded-full'/>
                  
                </div>
               
                
             
            </motion.div>
          </div>
          <div className=' flex flex-col items-center  justify-center space-y-5  '>
            <div className='flex flex-col text-center justify-center pb-20'>
              <p className='text-red-400 text-2xl  md:text-3xl font-serif'>Hello, My name is Ritika Jain</p>
              <p className='text-xl text-black dark:text-white font-serif'>I'm a web developer and active learner. Passionate about building world-class web applications. My expertise is in the area of responsive design. With every line of code, I strive to make the web a beautiful place. I have a good knowledge of front-end techniques and love to fix small details and explore new things. </p>
            </div>
            <div className='flex space-x-3'>
        <Button
            color="lightBlue"
            buttonType="filled"
            size="regular"
            rounded={true}
            block={false}
            iconOnly={false}
            ripple="light"
        >
            <a href='./Resume2.pdf' download>Download Resume</a>
        </Button>
        
        </div>
          </div>
        </div>
        </div>
    )
}

export default About
