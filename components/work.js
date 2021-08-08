import Card from "@material-tailwind/react/Card";
import CardImage from "@material-tailwind/react/CardImage";
import {ExternalLinkIcon} from '@heroicons/react/solid';
import {motion} from 'framer-motion';
import {useInView} from 'react-intersection-observer'
import {useEffect,useState} from 'react'
import {useAnimation} from 'framer-motion'
import Button from "@material-tailwind/react/Button";
import GitHubIcon from '@material-ui/icons/GitHub';
import ReactCardFlip from 'react-card-flip';
function Work() {
    const {ref,inView} = useInView({
        threshold:0.2
      });
      const animation = useAnimation();
      const variants={
        hidden: {opacity:0},
        visible: {
          opacity:1,
          transition:{type:'spring' ,duration:5,bounce:0.3}
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

      const [flip,setFlip]= useState(false);
      const [flip2,setFlip2]= useState(false);
      const [flip3,setFlip3]= useState(false);
      const [flip4,setFlip4]= useState(false);
    return (
        <div ref={ref} className='grid grid-flow-row-dense md:grid-cols-4  gap-20 md:gap-10 p-10 mt-20'>
            <motion.div initial='hidden' animate={animation} variants={variants}  >
            <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
                <div onMouseEnter={()=>setFlip(true)} onMouseLeave={()=>setFlip(false)}>
            <Card className='shadow-xl bg-brown-100 hover:scale-110 dark:bg-black dark:border-2 dark:border-golden'>
            <CardImage
                src="/snapchat.png"
                alt="Card Image"
            />

            <div  >
                <a href='https://snapchat-clone-4a1e7.web.app/' target = "_blank" 
rel = "noopener noreferrer" >
                    <div className='link'>
                    <h1>Snapchat-clone</h1>
                    <ExternalLinkIcon className='h-5'/>
                    </div>
                </a>
                <p className='text-sm text-gray-600 pl-3 -mt-2 pb-16 '>Note: Open on deskstop
                <br/> </p>
                <a href='https://github.com/jainritika9/snapchat-clone' target = "_blank" 
rel = "noopener noreferrer">
                <Button  size='sm' className=' mt-5 w-full dark:bg-gradient-to-r dark:from-red-400 dark:to-yellow-400'><GitHubIcon className='h-6 w-6 mx-2'/>View github repo</Button>
                </a>
            </div>
            </Card>
            </div>
            <div >
            <Card className='hover:scale-110 bg-brown-100 dark:bg-black dark:border-2 dark:border-golden '>
            <CardImage
                src="/snapchat.png"
                alt="Card Image"
            />
            <p className='text-md text-gray-600 pl-3 pt-5 pb-16'>This clone is built using React.js,Redux and firebase.In this I have included webcamcapture as well as google authentication.
                </p>
                </Card>
            </div>
            
            </ReactCardFlip>
            </motion.div>
            <motion.div initial='hidden' animate={animation} variants={variants} >
            <ReactCardFlip isFlipped={flip2} flipDirection="horizontal">
                <div onMouseEnter={()=>setFlip2(true)} onMouseLeave={()=>setFlip2(false)}>
            <Card className=' shadow-xl bg-green-100 hover:scale-110 dark:bg-black dark:border-2 dark:border-golden'>
            <CardImage
                src="/gmail.png"
                alt="Card Image"
            />

            <a href='https://clone-23.web.app/' target = "_blank" 
rel = "noopener noreferrer">
                <div className='link'>
                    <h1>Gmail-clone</h1>
                    <ExternalLinkIcon className='h-5'/>
                </div>
            </a>
            <p className='text-sm text-gray-600 pl-3 -mt-2 pb-16'>Note: Open on deskstop</p>
            <a href='https://github.com/jainritika9/gmail-clone-23' target = "_blank" 
rel = "noopener noreferrer">
            <Button  size='sm' className=' mt-5 w-full dark:bg-gradient-to-r dark:from-blue-400 dark:to-green-400'><GitHubIcon className='h-6 w-6 mx-2'/>View github repo</Button>
            </a>
            </Card>
            </div>
            <div >
            <Card className='bg-green-100 shadow-xl hover:scale-110 dark:bg-black dark:border-2 dark:border-golden '>
            <CardImage
                src="/gmail.png"
                alt="Card Image"
            />
            <p className='text-md text-gray-600 pl-5 pt-5 pb-11'>This clone is build using React.js ,Redux and firebase.In this mail can be composed and added to the list.Also Google authentication is also provided.
                </p>
                </Card>
            </div>
            
            </ReactCardFlip>
            </motion.div>
            <motion.div initial='hidden' animate={animation} variants={variants} >
            <ReactCardFlip isFlipped={flip3} flipDirection="horizontal">
                <div onMouseEnter={()=>setFlip3(true)} onMouseLeave={()=>setFlip3(false)}>
            <Card className='shadow-xl bg-blue-100 hover:scale-110 dark:bg-black dark:border-2 dark:border-golden'>
            <CardImage
                src='/google-doc.png'
                alt="Card Image"
            />

                     <a href='' target = "_blank" 
rel = "noopener noreferrer">
                    <div className='link'>
                    <h1>Google-Docs-clone</h1>
                    <ExternalLinkIcon className='h-5'/>
                    </div>
                    </a>
                    <p className='text-sm text-gray-600 pl-3 pb-16 -mt-2'>Fully responsive
                     </p>
                     <a href='https://github.com/jainritika9/google-docs' target = "_blank" 
rel = "noopener noreferrer">
                    <Button  size='sm' className='mt-5 w-full dark:bg-gradient-to-r dark:from-red-400 dark:to-blue-400'><GitHubIcon className='h-6 w-6 mx-2'/>View github repo</Button>
            </a>
            </Card>
            </div>
            <div >
            <Card className='hover:scale-110 bg-blue-100 shadow-xl dark:bg-black dark:border-2 dark:border-golden '>
            <CardImage
                src='/google-doc.png'
                alt="Card Image"
            />
            <p className='text-md text-gray-600 pl-3 pt-5 pb-5'>This clone is built using Next.js, TailwindCss and Firebase.In this we can add document and can use the editor to modify the text and as well as import images.In this Next auth is used for Google authentication.
                </p>
                </Card>
            </div>
            
            </ReactCardFlip>
            </motion.div>
            <motion.div initial='hidden' animate={animation} variants={variants} >
            <ReactCardFlip isFlipped={flip4} flipDirection="horizontal">
                <div onMouseEnter={()=>setFlip4(true)} onMouseLeave={()=>setFlip4(false)}>
            <Card className=' shadow-xl bg-indigo-100  dark:bg-black dark:border-2 dark:border-golden '>
            <CardImage
                src="/amazon.png"
                alt="Card Image"
            />

            <a href='https://amazon-starter-template-nextjs-cyan.vercel.app/' target = "_blank" 
rel = "noopener noreferrer">
            <div className='link'>
                    <h1>Amazon-clone</h1>
                    <ExternalLinkIcon className='h-5'/>
                    </div>
            </a>
            <p className='text-sm text-gray-600 pl-3 -mt-2 pb-16'>Fully responsive
            </p>
            <a href='https://github.com/jainritika9/Amazon-starter-template-nextjs' target = "_blank" 
rel = "noopener noreferrer">
            <Button  size='sm' className=' mt-5 w-full dark:bg-gradient-to-r dark:from-blue-400 dark:to-yellow-400 '><GitHubIcon className='h-6 w-6 mx-2'/>View github repo</Button>
            </a></Card>
            </div>
            <div >
            <Card className='hover:scale-110 bg-indigo-100 shadow-xl dark:bg-black dark:border-2 dark:border-golden '>
            <CardImage
                src="/amazon.png"
                alt="Card Image"
            />
            <p className='text-md text-gray-600 pl-3 pt-5 pb-11'>This clone is built using Nextjs,React.js,TailwindCss.It includes stripe checkout that will access all the items in the basket seleted by the user.
                </p>
                </Card>
            </div>
            
            </ReactCardFlip>
            </motion.div>
        </div>
    )
}

export default Work
