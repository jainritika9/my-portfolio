import { Typewriter } from 'react-simple-typewriter'
import {Link } from 'react-scroll';
import {ChevronDownIcon} from '@heroicons/react/solid'
import Button from "@material-tailwind/react/Button";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import useDarkMode from '../components/useDarkMode.js'
import {motion} from 'framer-motion';
function Homepage() {
    const [colorTheme, setTheme] = useDarkMode('light');
    return (
        <div className=' flex flex-col items-center justify-center dark:bg-black dark:text-gray-300 '>
         <div className='grid grid-flow-row-dense md:grid-cols-2 px-5 items-center justify-center'>
          <div className='flex flex-col items-center justify-center'>
            <div className='flex items-center justify-center'>
                <h1 className='text-2xl md:text-5xl lg:text-6xl text-gray-700 py-5 dark:text-white'>HELLO!!</h1>  
                <div className='text-2xl  md:text-5xl lg:text-6xl text-red-700 font-mono'>
                   I'm Ritika..
                </div>
            </div>
            <div className=' items-center justify-center font-mono'>
            < h1 className='text-xl md:text-4xl'> I'm a {' '}
            <span className='text-blue-700 dark:text-indigo-400'>
            <Typewriter
            words={["Web-developer", 'Programmer', 'Hustler!']}
            loop={4}
            cursor
            cursorStyle='_'
            typeSpeed={65}
            deleteSpeed={50}
            delaySpeed={1000}
            
          /></span></h1>
          </div>
                <div className='flex space-x-4 text-gray-600 pt-5 items-center  md:flex  '>
                    <a href='https://www.linkedin.com/in/ritika-jain19/' target = "_blank" 
rel = "noopener noreferrer" className=' hover:text-blue-700 hover:scale-110'><LinkedInIcon /></a>
                    <a href='https://github.com/jainritika9' target = "_blank" 
rel = "noopener noreferrer" className=' hover:text-black dark:hover:text-gray-400  hover:scale-110'><GitHubIcon/></a>
                    <a href='https://www.instagram.com/jain_ritika9/'target = "_blank" 
rel = "noopener noreferrer"className=' hover:text-pink-500 hover:scale-110'><InstagramIcon /></a>
                    <a href='https://www.facebook.com/profile.php?id=100068321311873' target = "_blank" 
rel = "noopener noreferrer"className=' hover:text-blue-500 hover:scale-110'><FacebookIcon /></a>
                </div>
         </div>
         <motion.div initial={{x:'100vw'}} animate={{x: 0}} transition={{type:'spring' ,duration:3,bounce:0.3}} className='pt-20 md:pt-5' >
            <img src='/image3.png'/>
         </motion.div>
         </div>
         <div className='items-center justify-center mt-5 md:mt-0 animate-bounce '>
         <Link activeClass="active" to="About" spy={true} smooth={true} offset={-50} duration={500}><Button 
            color="gray"
            buttonType="filled"
            size="regular"
            rounded={true}
            block={false}
            iconOnly={true}
            ripple="light"><ChevronDownIcon className='h-10'/></Button></Link>
         </div>
        </div>
    )
}

export default Homepage
