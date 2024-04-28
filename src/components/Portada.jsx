import React from 'react';

function Portada() {
  return (
    <div className="mt-0 mx-auto relative w-full min-w-96 sm:w-96 h-80">
      <div className="w-full md:w-500px absolute m-0 top-0 left-0">
        <img className='w-full h-1/2 sm:h-50' src="/techs.png" alt="Techs" />
      </div>
      <div className="absolute top-32 left-1/2 transform -translate-x-1/2">
        <img className="w-20 h-30 mt-10 sm:mt-0" src="/user.png" alt="Other" />
      </div>
    </div>
  );
}

export default Portada;
