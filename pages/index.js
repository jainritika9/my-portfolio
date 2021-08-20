import Head from 'next/head'
import Hightext from '../components/hightext.js'
import Contact from '../components/contact.js'
import Skillpage from '../components/skillpage.js'
import Footer from '../components/footer.js'
import Header from '../components/header.js'
import Resume from '../components/resume.js'
import Work from '../components/work.js'
import About from '../components/about.js'
import Homepage from '../components/home.js'
import useDarkMode from '../components/useDarkMode.js'

import Skill from '../components/skill.js'

export default function Home() {
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <div className='dark:bg-black '>
      <Head>
        <title>My Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      
      <Header/>
      <section  className='p-6 md:p-8 ' id='Home'>
        <Homepage/>
      </section>
      <section className='p-8  min-h-screen dark:bg-black' id='About'>
        <div >
          <About/>
        </div>
      </section>
      
      <section  className='p-8 bg-white-700 min-h-screen ' id='Skills'>
        <div>
        <Skill/>
        </div>
      </section>
      <section className=' p-8   dark:bg-black'id='Work'>
        <div className='min-h-screen'>
          <Hightext text=' MY WORK'/>
          <Work/>
        </div>
      </section>
      <section  className='p-8 bg-gray-100 dark:bg-gray-600' id='Contact'>
        <div>
          <Hightext  text='CONTACT'/>
          <Contact/>
        </div>
      </section>
      <Footer/>
      </div>
    
  )
}
