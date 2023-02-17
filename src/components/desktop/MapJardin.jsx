import React, { useState } from 'react';
import { FaSpinner } from 'react-icons/fa';

const MapJardin = () => {
  const [loading, setLoading] = useState(true);

  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <div style={{ position: 'relative' }}>
      {loading && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: '1'
          }}
        >
          <FaSpinner size={50} color="grey" className='animate-spin'/>
        </div>
      )}
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1378.9005137621268!2d-58.37667614735447!3d-34.71535327983714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccd4a738b1dd7%3A0x67b42499c3e3283!2sJardin%20de%20Infantes%20Virgen%20Ni%C3%B1a!5e0!3m2!1ses-419!2sar!4v1676601915046!5m2!1ses-419!2sar" width="650" height="700" style={{border: "0"}} allowFullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" onLoad={handleLoad}></iframe>
    </div>
  );
};

export default MapJardin;



