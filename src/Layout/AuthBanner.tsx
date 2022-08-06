import React, { Fragment, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import Input from '../Components/Input'


const AuthBanner = ({children}:{children:ReactNode}) => {
  return (
    <Fragment>
    <div className=" md:w-1/2 flex items-center">
        <p className='absolute top-0 text-xs p-4'>
      <span className="opacity-80"> Have an account ?</span> <Link to='/signin' className='text-primary transition-all underline hover:decoration-double'>Sign in</Link>
        </p>
        {/*  */}


    <div className="p-12">
    <div className="py-1">
        <h1 className='text-5xl'>Create new account.</h1>
        <p className='text-sm my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>

   {
     children
   }

    </div>


    </div>
       <div className="bg-primary hidden md:block w-1/2 min-h-full">
         <div className=''>
           <h2>Make a Short Link.</h2>
         </div>
       </div>
    </Fragment>
  )
}

export default AuthBanner