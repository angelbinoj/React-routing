import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className='bg-teal-100 w-full h-screen flex justify-center'>
    <div className='mt-10 bg-teal-800 border-4 rounded-sm h-30 sm:w-3/4 lg:w-2/4 h-fit border-slate-50 px-2 shadow-2xl'>
      <div>
        <h2 className='uppercase italic text-white text-xl font-semibold p-5'>Welcome to the React Routing App !</h2>
      </div>
      <div className='my-10 px-5 text-slate-50'>
        <p>This app demonstrates multi-page navigation using React Router.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint laborum repellendus totam amet a esse consectetur aliquam pariatur, sed, blanditiis corrupti optio nisi non maxime quis placeat asperiores sapiente ad Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa adipisci porro quaerat tempora, maxime laborum veniam hic blanditiis fugit nemo ab minus animi dolorum sapiente, esse nostrum aut in. Corrupti <br />
          Nemo distinctio consequatur amet facilis earum aut laborum eveniet nisi aspernatur. Nulla, esse itaque! Veritatis iusto, soluta exercitationem veniam beatae sequi quam, tenetur necessitatibus omnis quo repellat? Neque, magnam ipsam?
        </p>
      </div>
      <div className='my-1 pl-3 flex gap-3'>
        <Link to="/about"><button className='bg-teal-500 text-white p-1 border rounded-lg shadow-md hover:text-teal-700 hover:bg-white hover:border-teal-300'> Go To About </button> </Link><br />
        <Link to="/users"><button className='bg-teal-500 text-white p-1 border rounded-lg shadow-md hover:text-teal-700 hover:bg-white hover:border-teal-300'> View Users </button> </Link>

      </div>
    </div>
  </div>
);

export default Home;