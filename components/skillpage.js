import Skill from './skill.js'
function Skillpage() {
    return (
        <div className='bg-green-100 md:px-20 px-10 pb-20 shadow-lg dark:bg-black dark: border-green-700 dark:border-4 dark:rounded-xl  '>
            <div className='flex flex-col items-center '>
                <div className='flex items-center'>
                <div className='hidden md:flex'>
                    <img src='/illus2.png' className='h-40'/>
                </div>
                <div className='flex justify-center  p-5 mt-5'  typing={0.5} delay={1000}>
                <div className='flex flex-col items-center'>
                    <h1 className='text-5xl text-gray-500 md:text-6xl'>SKILLS</h1>
                   
                </div>
                </div>
                <div className='hidden md:flex'>
                  <img src='/illus.png' className=' h-40'/>
               </div>
               </div>
                </div>
                <div className='grid grid-flow-row-dense md:grid-cols-2  gap-10  '>
                <Skill name='C/C++' percentage='80'/>
                <Skill name='Python' percentage='75'/>
                <Skill name='Html/CSS' percentage='100'/>
                <Skill name='Javascript' percentage='80'/>
                <Skill name='React.js' percentage='85'/>
                <Skill name='Next.js' percentage='80'/>
                </div>
                <div className='flex md:hidden items-center'>
                  <img src='/illus.png' className=' h-50'/>
               </div>
        </div>
    )
}

export default Skillpage
