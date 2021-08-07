import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";

function Resume() {
    return (
        <div className='bg-brown-100  md:px-20 px-10 pb-20 shadow-lg dark:bg-black dark:text-white dark:border-red-700 dark:border-4 dark:rounded-xl '>
            <div className='items-center'>
            <div className='flex flex-col items-center p-5'>
                    <h1 className='text-5xl text-gray-500 md:text-6xl'>RESUME</h1>
                    
            </div>
            </div>
            <div className='grid grid-flow-row-dense md:grid-cols-2 items-center'>
            <div className='hidden md:flex bottom-0'>
                    <img src='/illus3.png' className='h-45'/>
            </div>
            <div className='items-center'>
                <h1 className='text-3xl text-gray-700 '>Education</h1>
                <div>
                    <p>Currently Pursuing B-tech</p>
                    <p>St. Mary's Convent Sr. Sec. School</p>
                </div>
                <a href='/Resume.pdf' download>
                <Button color="blue"
                  buttonType="filled"
                  size="regular"
                  rounded={false}
                  block={false}
                  iconOnly={false}
                  ripple="light">
                <Icon name='download' />Download Resume</Button></a>
            </div>
            </div>
            <div className='md:hidden bottom-0 items-center'>
                    <img src='/illus3.png' className='h-50'/>
            </div>
        </div>
    )
}

export default Resume
