import React from 'react';
import { Link } from 'react-router-dom';

const About = () => (

  <div className='bg-teal-100 w-full h-screen flex justify-center'>
    <div className='mt-10 bg-teal-300 border-4 rounded-sm h-30 sm:w-3/4 lg:w-2/4 h-fit border-white px-2 shadow-2xl'>
      <div className='bg-slate-50 text-teal-800 text-center border border-slate-300 rounded-xl py-1 my-2'>
        <h2 className='uppercase text-lg  tracking-wider'>About This App</h2>
      </div>
      <div className='my-10 text-teal-950'>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima amet ipsa quo nisi eius reprehenderit placeat rerum, eveniet vero quidem illo a dolore temporibus velit fugit? Corrupti mollitia dolor reiciendis?
          Maiores a in vel suscipit, beatae iusto accusantium nulla vero, doloremque accusamus quisquam? Officiis dolore blanditiis, culpa, iure laborum itaque expedita nemo exercitationem ducimus incidunt cumque harum provident quibusdam eos?
          This app is created to learn routing in React.</p><br /> <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima amet ipsa quo nisi eius reprehenderit placeat rerum, eveniet vero quidem illo a dolore temporibus velit fugit? Corrupti mollitia dolor reiciendis?
            Maiores a in vel suscipit, beatae iusto accusantium nulla vero, doloremque accusamus quisquam? Officiis dolore blanditiis, culpa, iure laborum itaque expedita nemo exercitationem ducimus incidunt cumque harum provident quibusdam eos?
            This app is created to learn routing in React.</p>
      </div>
      <div className='my-1'>
        <Link to="/"> <button className='bg-teal-600 text-white p-1 border rounded-lg shadow-md hover:text-teal-700 hover:bg-white hover:border-teal-300'> Back to Home </button> </Link>
      </div>

    </div>
  </div>

);

export default About;