import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import CardRow from "@material-tailwind/react/CardRow";
import Icon from "@material-tailwind/react/Icon";
import CardFooter from "@material-tailwind/react/CardFooter";
import InputIcon from "@material-tailwind/react/InputIcon";
import Button from "@material-tailwind/react/Button";
import H5 from "@material-tailwind/react/Heading5";
import {LocationMarkerIcon} from '@heroicons/react/solid'

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import {motion,useAnimation} from 'framer-motion';
import {useEffect} from 'react';
import {useInView} from 'react-intersection-observer';
function Contact() {
  const {ref, inView} = useInView();
  const animation =useAnimation();
  const variants={
    hidden: {opacity:0},
    visible: {
      opacity:1,
      transition:{type:'spring' ,duration:3,bounce:0.3}
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
        <div ref={ref} className='py-20 flex  flex-col space-y-20 items-center md:px-10 lg:px-20 '>
         <div  className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-4 gap-10  '>
         <div className='hover:scale-110'>
         <Card>
            <CardRow>
                <motion.div initial='hidden' animate={animation} variants={variants}>
                <CardHeader color="lightGreen" size="md"  iconOnly>
                    <LocationMarkerIcon className='h-14 w-10 '/>
                </CardHeader>
                </motion.div>
                <p className='text-black-700 text-lg px-3'>My Address</p>
                <p className='text-gray-700 text-md px-3'>94, Serve Ritu Vilas ,Udaipur,Rajasthan</p>
            </CardRow>
        </Card>
        </div>
        <div className='hover:scale-110'>
        <Card >
            <CardRow>
            <motion.div initial='hidden' animate={animation} variants={variants}>
                <CardHeader color="yellow" size="md" iconOnly >
                    <Icon name="share" size="5xl" color="white"  />
                </CardHeader></motion.div>
                <p className='text-black-700 text-lg px-3'>Social Media</p>
                <div className='flex space-x-4 text-gray-600 pt-5'>
                    <a href='https://www.linkedin.com/in/ritika-jain19/' target = "_blank" 
rel = "noopener noreferrer" className=' hover:text-blue-700 hover:scale-110'><LinkedInIcon /></a>
                    <a href='https://github.com/jainritika9' target = "_blank" 
rel = "noopener noreferrer" className=' hover:text-black hover:scale-110'><GitHubIcon/></a>
                    <a href='https://www.instagram.com/jain_ritika9/' target = "_blank" 
rel = "noopener noreferrer" className=' hover:text-pink-500 hover:scale-110'><InstagramIcon /></a>
                    <a href='https://www.facebook.com/profile.php?id=100068321311873' target = "_blank" 
rel = "noopener noreferrer" className=' hover:text-blue-500 hover:scale-110'><FacebookIcon /></a>
                </div>
                
            </CardRow>
        </Card>
        </div>
        <div className='hover:scale-110'>
        <Card >
            <CardRow>
            <motion.div initial='hidden' animate={animation} variants={variants}>
                <CardHeader color="red" size="md" iconOnly>
                    <Icon name="email" size="5xl" color="white" />
                </CardHeader></motion.div>

                <p className='text-black-700 text-lg px-3'>Gmail</p>
                <p className='text-gray-700 text-md px-3 pt-5'>jain.ritika919@gmail.com</p>
            </CardRow>
        </Card>
        </div>
        <div className='hover:scale-110'>
        <Card >
            <CardRow>
            <motion.div initial='hidden' animate={animation} variants={variants}>
                <CardHeader color="lightBlue" size="md" iconOnly>
                    <Icon name="phone" size="5xl" color="white" />
                </CardHeader></motion.div>

                <p className='text-black-700 text-lg px-3'>Phone</p>
                <p className='text-gray-700 text-md px-3 pt-5'>+91 7073537411</p>
            </CardRow>
        </Card>
        </div>
         </div>
         
         <Card className='flex-grow' >
         <motion.div initial='hidden' animate={animation} variants={variants}>
            <CardHeader color="teal" size="sm">
                <H5 color="white">Drop a Message..</H5>
            </CardHeader>
            </motion.div>
            <CardBody>
                <div className="mt-4 mb-8 px-4">
                    <InputIcon
                        type="text"
                        color="lightBlue"
                        placeholder="First Name"
                        iconName="account_circle"
                    />
                </div>
                <div className="mb-8 px-4">
                    <InputIcon
                        type="email"
                        color="lightBlue"
                        placeholder="Email Address"
                        iconName="email"
                    />
                </div>
                <div className="mb-4 px-4">
                    <InputIcon
                        type="text"
                        color="lightBlue"
                        placeholder="Message"
                        iconName="chat"
                    />
                </div>
            </CardBody>
            <CardFooter>
                <div className="flex justify-center">
                    <Button
                        color="lightBlue"
                        buttonType="link"
                        size="lg"
                        ripple="dark"
                    >
                        Send Message
                    </Button>
                </div>
            </CardFooter>
        </Card>
        
        </div>
    )
}

export default Contact
