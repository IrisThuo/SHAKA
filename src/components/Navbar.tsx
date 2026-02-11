


const Navbar = () => {
  return (
    <div className='absolute top-0 left-0 w-full z-0'>
        <div className="mx-auto flex justify-between items-center py-4 px-6 md:px-20  lg:px-32 bg-blue-950">
          <img src="/logo.svg" alt="Logo" className="size-32 rounded-full object-cover"/>

           <ul className="hidden md:flex gap-7 ">
            <a href='' className='ml-4 cursor-pointer font-bold text-purple-400 hover:text-purple-900'>HOME</a>

             <a href='' className='ml-4 cursor-pointer font-bold text-purple-400 hover:text-purple-900'>ABOUT US</a>

              <a href='' className='ml-4 cursor-pointer font-bold text-purple-400 hover:text-purple-900'>OUR SERVICES</a>

               <a href='' className='ml-4 cursor-pointer font-bold text-purple-400 hover:text-purple-900'>LOCATIONS</a>

                 <a href='' className='ml-4 cursor-pointer font-bold text-purple-400 hover:text-purple-900'>PROJECTS</a>

                 <button className='ml-15 font-bold bg-purple-700 text-white px-10 py-2 border-2 border-white hover:bg-purple-900'> CONTACT US</button>

           </ul>
        </div>

    </div>
  )
}

export default Navbar