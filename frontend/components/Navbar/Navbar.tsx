import logo from '../../images/logo.webp';
import hamburger from '../../images/hamburger.svg';
import Image from 'next/image';
import { useState } from 'react';
import home from '../../images/home.webp';
import about from '../../images/about.webp';
import man from '../../images/man.webp'

const Navbar = () => {
    const [Hide, setHide] = useState(false);

    interface nav_detail {
      text: string,
      image: StaticImageData
    }

    const data3:nav_detail[] = [
      {
        text: 'Home',
        image: home
      },
      {
        text: 'About',
        image: about
      },
      {
        text: 'Projects & Events',
        image: home
      },
      {
        text: 'Programs',
        image: home
      },
      {
        text: 'Core Members',
        image: home
      },
      {
        text: 'Website Team',
        image: home
      },
      {
        text: 'Blogs / Podcast',
        image: home
      },
      {
        text: 'IIIT Alumni Network',
        image: home
      },
      {
        text: 'Project Ideas',
        image: home
      },
      {
        text: 'Sponsors',
        image: home
      },
      {
        text: 'Contact Us',
        image: home
      }
    ]

    function Nav_Out () {
      return (
          <div className="z-30 top-0 flex fixed w-full h-full animate-navbar">
            <div className="z-20 bg-cover bg-gray-800 opacity-50 w-full h-full transparent" onClick={() => {setHide(false)}}></div>
            <div className="top-0 right-0 w-auto bg-gray-800 fixed h-full overflow-auto z-30 shadow-nav_custom">
              <div className="py-6 px-20">
                <button className = "bg-gray-200 hover:bg-gray-100 rounded py-2 px-6 font-roboto text-xl font-bold"><h1>Login</h1></button>
                </div>
                <hr className="mb-6" />
                <div>
                {data3.map((item, index) => (<div key={index}><h1 className="text-white text-xl px-20 py-2 font-roboto"><Image src={item.image} width="16" height="16"></Image><a href="#"> {item.text}</a></h1></div>))}
                </div>
                <hr className="mt-6" />
                <div className="px-12 py-2 flex items-center">
                <div className="rounded-full overflow-hidden"><Image src={man} width="72" height="72"></Image></div>
                <h1 className="text-gray-300 text-xl py-2 px-12 font-roboto"><a href="#">Profile</a></h1>
                </div>
            </div> 
          </div>
      )
    }
    

  return (
      <>
      <div className="sticky top-0 bg-gray-1000 pt-4 h-20 z-10 overflow-hidden">
          <div className="mx-32 flex justify-between">
          <div className="w-20 h-20">
            <Image src={logo} />
          </div>
          <div className="w-12 h-12">
            <Image src={hamburger} onClick = {() => {setHide(true)}}/>
          </div>
          </div>
      </div>
      {Hide ? <Nav_Out /> : null}
      </>
  )
};

export default Navbar;
