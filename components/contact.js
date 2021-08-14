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
  const variants2={
    hidden2: {x:'-100vw'},
    visible2: {
      x:0,
      transition:{type:'spring' ,duration:2,bounce:0.3}
    }
  }
  useEffect(()=>{
    if(inView){
      animation.start('visible');
      animation.start('visible2');
    }
    if(!inView){
      animation.start('hidden');
      animation.start('hidden2');
    }
  },[inView])
    return (
        <div ref={ref} className='py-20 flex  flex-col space-y-20 items-center md:px-10 lg:px-20 '>
         <div className='grid grid-flow-row-dense md:grid-cols-2 items-center gap-8'>
         <motion.div className='-mt-20 md:-mt-0' initial='hidden2' animate={animation} variants={variants2}>
             <img src='/251.png'/>
         </motion.div>
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
                        placeholder=" Name"
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
        </div>
    )
}

export default Contact
