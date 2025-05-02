import React from 'react';
import { register } from '../utils/api';
import RegisterInput from '../components/RegisterInput';
import { Link, useNavigate } from 'react-router-dom';

function RegisterPage() {
  const navigate = useNavigate();

  async function onRegisterHandler(user) {
    const { error } = await register(user);
    if (!error) {
      navigate('/');
    }
  }


  return (
    <section className='register-page'>
      <h2>Gak usah Serius isinya hanya testing</h2>
      <RegisterInput register={onRegisterHandler} />
      <p className=''>
        {' '}
        Kembali ke <Link to='/'>Masuk</Link>
      </p>
    </section>
  );
}

export default RegisterPage;
