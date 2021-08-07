import Button from "@material-tailwind/react/Button";
import {motion,useAnimation} from 'framer-motion';
import {useEffect} from 'react';
import {useInView} from 'react-intersection-observer';
function Skill() {
  const {ref, inView} = useInView();
  const animation =useAnimation();
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
        <div ref={ref} className='flex flex-col items-center'>
            <h1 className='text-4xl md:text-6xl lg:text-7xl items-center font-serif text-teal-500 dark:text-gray-200'>I Can Work With...</h1>
            <div className='grid grid-flow-row-dense md:grid-cols-2 items-center justify-center '>
                <div className='items-center'>
                    
                    <div className='flex flex-col m-5 md:m-10 lg:m-20 space-y-5'>
                    <motion.div initial='hidden'  whileHover={{ scale: 1.1 }} animate={animation} variants={variants}
                    className='bg-green-300 p-6 text-lg md:text-xl shadow-lg hover:scale-110  dark:text-white 
                    dark:bg-gradient-to-b dark:from-green-400 dark:to-blue-400
                    rounded-xl dark:border-2 dark:border-golden' >
                        <h1>Programming Languages</h1>
                        <p className='text-gray-700 text-lg dark:text-black'>C, C++, Python, Javascript</p>
                    </motion.div>
                    <motion.div initial='hidden'  whileHover={{ scale: 1.1 }} animate={animation} variants={variants}
                     className='bg-yellow-300 p-6 text-lg md:text-xl shadow-lg hover:scale-110 
                     dark:bg-gradient-to-b dark:from-red-400 dark:to-yellow-400
                    dark:text-white rounded-xl dark:border-2 dark:border-golden' >
                        <h1>Technologies</h1>
                        <p className='text-gray-700 text-lg dark:text-black'>HTML, CSS, Bootstrap, React.js, Next.js, TailwindCss, Firebase</p>
                    </motion.div>
                    <motion.div initial='hidden'  whileHover={{ scale: 1.1 }} animate={animation} variants={variants}
                    className='bg-blue-300 p-6 text-lg md:text-xl shadow-lg hover:scale-110 
                    dark:bg-gradient-to-b dark:from-pink-300 dark:to-green-700 
                    dark:text-white rounded-xl dark:border-2 dark:border-golden' >
                        <h1>Other</h1>
                        <p className='text-gray-700 text-lg dark:text-black'>Solid Works, Autocad</p>
                    </motion.div>
                    
                    <motion.div initial='hidden' animate={animation} variants={variants} className='flex space-x-3 justify-center'>
                       <Button
                         color="green"
                         buttonType="outline"
                         size="regular"
                         rounded={false}
                         block={false}
                         iconOnly={false}
                         ripple="light"
                       >
                        
                        <img src='/hackr.png' className='h-7 w-7'/>
                        <a href='https://www.hackerrank.com/jainritika919'>Visit Hackerrank Profile</a>
                       </Button>
                       <Button
                         color="yellow"
                         buttonType="outline"
                         size="regular"
                         rounded={false}
                         block={false}
                         iconOnly={false}
                         ripple="light"
                       >
                        
                        <img src='/leet.png' className='h-7 w-7'/>
                        <a href='https://leetcode.com/jain_ritika9/'> Visit Leetcode Profile</a>
                     </Button>
                     </motion.div>
                       </div>
                </div>
                <motion.div initial='hidden' animate={animation} variants={variants}><img src='/illus.png'/></motion.div>
            </div>
        </div>
    )
}

export default Skill
