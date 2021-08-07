import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import {Link } from 'react-scroll';
import useDarkMode from '../components/useDarkMode.js';
import {SunIcon,MoonIcon} from '@heroicons/react/outline'
import Menu from '../components/menu.js';
function Header() {
    const [colorTheme, setTheme] = useDarkMode();
    
    return (
        <div className='sticky top-0 z-50 flex items-center justify-between px-4 py-2 border-gray-100 border-b-2  dark:bg-gray-700 dark:text-white bg-white text-black dark:border-b-0'>
            <div className='flex space-x-2'>
                <div className='hidden md:flex'><Menu/></div>
            
            
            {colorTheme === "dark" ? (
            <Button
            color="blueGray"
            buttonType="filled"
            size="sm"
            rounded={false}
            block={false}
            iconOnly={false}
            onClick={()=>setTheme("dark")}
            ripple="light"
            className=' hover:scale-110 hover:shadow-xl hover:bg-gray-black'
            >
            <Icon name='dark_mode' className='text-blue h-10 w-6'/><p className='hidden lg:flex'>DarkMode</p></Button>
            

            ):(
                <Button
            color="blueGray"
            buttonType="filled"
            size="sm"
            rounded={false}
            block={false}
            iconOnly={false}
            onClick={()=>setTheme("light")}
            ripple="light"
            className=' hover:scale-110 hover:shadow-xl hover:bg-gray-black'
            ><SunIcon className='text-blue h-6 w-6 '/><p className='hidden lg:flex'>LightMode</p></Button>
            )}

            
            </div>

            <div className=' hidden md:flex flex  text-md md:text-lg '>
                
            <Link activeClass="active" to="Home" spy={true} smooth={true} offset={-50} duration={500}><p className='option'>Home</p></Link>
            <Link activeClass="active" to="About" spy={true} smooth={true} offset={-70} duration={500}><p className='option'>About</p></Link>
            <Link activeClass="active" to="Skills" spy={true} smooth={true} offset={-50} duration={500}><p className='option'>Skills</p></Link>
            <Link activeClass="active" to="Work" spy={true} smooth={true} offset={-50} duration={500}><p className='option'>Work</p></Link>
            <Link activeClass="active" to="Contact" spy={true} smooth={true} offset={-50} duration={500}><p className='option'>Contact</p></Link>
            </div>

            <div className='flex md:hidden'><Menu/></div>
        </div>
    )
}

export default Header
