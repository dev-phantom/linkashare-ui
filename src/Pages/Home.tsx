import React, { useState } from 'react'
import { Fragment } from 'react'
import {Helmet} from 'react-helmet';
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer";
import {linklogo, rocket, world, globe} from "../Assets/index"
import { FaCoffee } from 'react-icons/fa';
import { Navigate, useNavigate } from 'react-router-dom';


const Home = () => {
  const [newUrl, setNewUrl] = useState('');
  const [showText, setShowText] = useState(false)
  let navigate = useNavigate();
  const [state, setState] = useState({
    url:'',
  })

  const handleRegister = () =>{
    navigate('/register')
  }

  const handleSubmit = () => {
    setShowText(true)
    fetch("https://linkashapii.herokuapp.com/shortenlink.php", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(state)
    })
    .then(res=>res.json())
    .then((data)=>{setNewUrl(data[0])})
    .catch((err)=>{console.log(err)});
  }
  return (
    <Fragment>
      <Helmet>
        <title>Link-A-share | Home</title>
      </Helmet>
        <main id="home" className=''>
          <header>
            <Navbar />
          </header>
          <div className="flex bg-dark text-textColor h-screen w-full flex-col">
            <div className='hidden lg:flex absolute w-[400px] h-[400px] left-[249px] top-[-200px] bg-[#4246FF] blur-[400px] bg-blend-darken'></div>
            <div className='relative'>
              <img src={rocket} alt="" className='w-[10rem] h-[10rem] lg:w-[10rem] lg:h-[10rem] absolute top-10 right-10 opacity-5 sm:w-[8rem] sm:h-[8rem] sm:top-14 sm:right-0'/>
            </div>
            <div className="flex lg:flex-row flex-col w-full pt-[8rem] justify-center items-center">
              <div className='w-1/2 pl-[3rem] hidden lg:flex'>
                <img src={linklogo} alt="" className='w-[550px] pl-[5rem] '/>
              </div>
              <div className='lg:w-1/2 w-full justify-center items-center lg:px-[0] px-4'>
                <div className='lg:text-[70px] text-[50px] font-gotham lg:text-left text-center pt-[20px] lg:pt-0'>Linkashare</div>
                <div className='lg:text-[25px] capitalize text-[1.5rem] py-[10px] lg:px-0 px-2 font-bold lg:text-left text-center'>Edit links . <span className='text-[#35F068]'>keep links in sync</span> . save links</div>
                <div className='w-full flex lg:flex-row md:flex-row pt-4 sm:flex-col lg:justify-start justify-center items-center'>
                <input type="text"
                      className='lg:w-[50%] h-[3rem] rounded-lg outline-none text-dark pl-4 w-[80%]'
                      required 
                      placeholder="Enter a url"
                      onChange={(e:any)=> setState({...state,url:e.target.value})}

                />
                <button className='bg-primary md:mt-0 lg:mt-0 ml-3 px-4 py-3 font-bold rounded-full sm:mt-3 sm:px-8' onClick={handleSubmit}>submit</button>
                </div>
                {showText && (<div className='pt-3'>Your Shortened Link is: <span><a href={newUrl} target="_blank" className='cursor-pointer'>{newUrl}</a></span></div>)}
                  </div>
            </div>

            <div className='hidden lg:flex absolute w-[300px] rounded-2xl h-[300px] left-[1000px] top-[299px] bg-[#42A4FF] blur-[804px] bg-blend-darken'></div>
          </div>
          <div className='bg-[#000] w-full px-4 py-6 flex flex-col justify-center items-center text-textColor'>
            <div className='text-[30px] py-1 font-bold text-primary flex justify-center items-center'>Buy Us A Coffee <span className='pl-2 text-textColor'><FaCoffee /></span></div>
            <p className='text-sm'>please Support the bright minds behind this</p>
            <div>
              <button className='py-3 px-8 bg-primary mt-2 rounded-lg text-[#000]'>Support</button>
            </div>
          </div>

        </main>
    </Fragment>
  )
}

export default Home