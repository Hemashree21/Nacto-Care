import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import patient from '../../public/assets/patient.webp';
import nurse from '../../public/assets/nurse-services.webp';

const Services = () => {
  const [city, setCity] = useState('Delhi'); // Default city
  const navigate = useNavigate();

  useEffect(() => {
    const storedCity = localStorage.getItem('selectedCity');
    if (storedCity) {
      setCity(storedCity);
    }
  }, []);

  const handleCityChange = (e) => {
    const selectedCity = e.target.value;
    setCity(selectedCity);
    localStorage.setItem('selectedCity', selectedCity);
  };

  const handleNavigation = (path) => {
    navigate(path, { state: { city } });
  };

  return (
    <div>
      <div className='bg-green-400 block m-auto w-3/4 rounded-md p-10 my-10'>
        <h1 className='md:text-5xl text-3xl text-center text-white font-bold mb-10'>Find the Best Nurses</h1>
        <label
          className="block uppercase tracking-wide text-black-700 dark:text-white text text-xs font-bold mb-2"
          htmlFor="city-select"
        >
          Select your city
        </label>
        <select
          className="appearance-none block w-full bg-gray-200 dark:text-white dark:bg-gray-700 text-gray-700 border dark:border-[#333333] rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="city-select"
          value={city}
          onChange={handleCityChange}
        >
          <option>Delhi</option>
          <option>Bangalore</option>
          <option>Mumbai</option>
          <option>Chennai</option>
          <option>Kolkata</option>
        </select>
      </div>
      <div className='block w-3/4 m-auto'>
        <div className='w-full flex md:flex-row flex-col md:gap-0 gap-10 items-center justify-between mb-20'>
          <div onClick={() => handleNavigation('/findpatients')} className="img-container relative w-full md:w-2/5 cursor-pointer">
            <img src={patient} alt="Patient" className='rounded-lg' />
            <button className='absolute inset-0 opacity-0 hover:opacity-100 transition duration-300 ease-in-out bg-black/50 text-white text-3xl py-2 px-4 rounded-lg focus:outline-none'>
              Find Patient
            </button>
          </div>
          <div onClick={() => handleNavigation('/findnurses')} className="img-container relative w-full md:w-2/5 cursor-pointer">
            <img src={nurse} alt="Nurse" className='rounded-lg' />
            <button className='absolute inset-0 opacity-0 hover:opacity-100 transition duration-300 ease-in-out bg-black/50 text-white text-3xl py-2 px-4 rounded-lg focus:outline-none'>
              Find Nurse
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
