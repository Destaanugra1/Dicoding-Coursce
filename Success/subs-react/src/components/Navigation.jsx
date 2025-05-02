import React from 'react';
import { FiHome, FiPlusCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className='flex border-white justify-between p-4 bg-gray-800 text-white'>
      <div className='flex items-center'>
        <Link to='/' className='mr-4 hover:text-gray-300'>
          <FiHome className='font-bold size-3' />
        </Link>
      </div>
      <div className='flex items-center'>
        <Link to='/add' className='hover:text-gray-300'>
          <FiPlusCircle />
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
