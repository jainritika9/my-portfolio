import {HeartIcon,ChevronUpIcon} from '@heroicons/react/solid'
import Button from "@material-tailwind/react/Button";
import {animateScroll} from 'react-scroll';
import { scrollToTop } from 'react-scroll/modules/mixins/animate-scroll';
import CopyrightIcon from '@material-ui/icons/Copyright';
const Scroll = require('react-scroll');
const scroll = Scroll.animateScroll;
function Footer() {
    return (
        <div className='flex flex-col bg-black dark:bg-gray-700 items-center p-10 '>
            <div className='flex items-center -mt-14 animate-bounce ' onClick={()=>{
                scroll.scrollToTop()
            }}>
            <Button 
            color="gray"
            buttonType="filled"
            size="regular"
            rounded={true}
            block={false}
            iconOnly={true}
            ripple="light"><ChevronUpIcon className='h-10'/></Button>
            </div>

            <div className='flex items-center justify-center text-gray-500 text-sm md:text-lg pt-10'>
                <p className='px-2'>Made with </p><HeartIcon className='h-5' color='red'/><p className='px-2'> by Ritika</p>
            </div>
            <div className='flex items-center justify-center text-gray-500 text-sm md:text-md '>
                <p className='px-2'>All rights reserved</p>< p className='text-sm'><CopyrightIcon className='text-gray-500'/></p><p className='px-0.5'>2021 Ritika Jain</p>
            </div>
            <div className='flex items-center justify-center text-gray-500 text-sm md:text-md '>
                <p>Illustration by themeisle.com</p>
            </div>
        </div>
    )
}

export default Footer
