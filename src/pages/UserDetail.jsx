import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import UserData from '../components/data/UserData';

const UserDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = UserData.find(u => u.id === parseInt(id));

  if (!user) return <p>User not found</p>;

  return (
    <div className='bg-teal-100 w-full h-screen flex justify-center'>
      <div className='mt-10 border-4 h-30 h-fit border-white px-5 shadow-2xl'>

        <h2 className='uppercase my-3 text-teal-800 text-lg text-center font-semibold tracking-wider'>User Detail</h2>

        <p className='mb-1'><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <button className='mt-5 mb-1 bg-teal-600 text-white p-1 px-1 border rounded-lg shadow-md hover:text-teal-700 hover:bg-white hover:border-teal-300' onClick={() => navigate('/users')}>Go Back</button>
      </div>
    </div>
  );
};

export default UserDetail;