import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-black text-white flex justify-between items-center'>
        <div className='logo font-bold ml-5 '>
            GetMeAChai
            
        </div>
      
      

        <ul className='flex justify-between gap-5 p-5  '>
            <li>Home</li>
            <li>Projects</li>
            <li>About</li>
            
            <li>Contact</li>
            
           
          
      

        </ul>
        
    </nav>
    
 
      
  )
}

export default Navbar


