import React, { useState } from 'react';
import { FaSpinner } from 'react-icons/fa';

const MapColegio = () => {
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
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.6232575512745!2d-58.377938384234135!3d-34.71468117088586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccd358d88a7ff%3A0x1f2577152bb9f777!2sColegio%20Santo%20Cristo!5e0!3m2!1ses-419!2sar!4v1676472070216!5m2!1ses-419!2sar"
        width="650"
        height="700"
        style={{ border: '0' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        onLoad={handleLoad}
      ></iframe>
    </div>
  );
};

export default MapColegio;