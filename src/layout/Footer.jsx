import React from 'react'

export default function Footer() {
  return (
  <div className='flex flex-col justify-center items-center'>
    <div className='bg-white text-base-content p-10 w-full border-b-2 flex flex-col justify-center items-center gap-2'>
        <h1 className='text-2xl'> Gadget Haven </h1>
        <p>Leading the way in cutting-edge technology and innovation.</p>
    </div>
      <footer className="footer bg-white text-base-content p-10 flex justify-around items-center">
 
 <nav>
   <h6 className="footer-title">Services</h6>
   <a className="link link-hover">Branding</a>
   <a className="link link-hover">Design</a>
   <a className="link link-hover">Marketing</a>
   <a className="link link-hover">Advertisement</a>
 </nav>
 <nav>
   <h6 className="footer-title">Company</h6>
   <a className="link link-hover">About us</a>
   <a className="link link-hover">Contact</a>
   <a className="link link-hover">Jobs</a>
   <a className="link link-hover">Press kit</a>
 </nav>
 <nav>
   <h6 className="footer-title">Legal</h6>
   <a className="link link-hover">Terms of use</a>
   <a className="link link-hover">Privacy policy</a>
   <a className="link link-hover">Cookie policy</a>
 </nav>
</footer>
  </div>
  )
}
