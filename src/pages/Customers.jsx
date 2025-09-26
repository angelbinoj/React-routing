import React from 'react';
import { Link } from 'react-router-dom';

const Customers = () => (
  <div className='bg-teal-100 w-full h-screen flex justify-center'>
    <div className='mt-10 bg-teal-50 border-4 rounded-sm h-30 sm:w-2/3 lg:w-1/3 h-fit border-slate-50 px-2 pb-1 shadow-2xl'>
      <h2 className='uppercase text-center text-gray-700 text-2xl font-bold p-5'>User List</h2>
      <ul class="w-full text-sm font-medium  rounded-lg bg-gray-700 border-gray-600 text-white">

        {UserData.map(user => (
          <li className="w-full flex justify-between p-2 border-gray-400 border-b-2 rounded-t-lg " key={user.id}><div>{user.name}</div>
            <Link to={`/users/${user.id}`}>
              <div className='text-end'><button className=' bg-white text-gray-900 p-1 px-2 rounded-sm'>View Details</button></div>
            </Link>
          </li>
        ))}
      </ul>

    </div>
  </div>
);

export default Customers;