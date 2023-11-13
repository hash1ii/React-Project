
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Axs = () => { 
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000/sample')
      .then(response => {
        setMessage(response.data.message);
        console.log(response.data.message);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Message: {message}</h1>
    </div>
  );
};

export default Axs;
