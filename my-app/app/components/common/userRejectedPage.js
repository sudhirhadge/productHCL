"use client"

import {useState, useEffect} from 'react';
import './common.css';

const UserRejectedPage = () => {
    const [data, setData] = useState(null);

  useEffect(() => {
    // This code only runs in the browser
    const storedData = localStorage.getItem('your-key');
    setData(storedData);
  }, []);

  return (
   <div className="status-container">
      <h1 className="status-title">
        You have already applied for this request on 23rd March 2026 {data}
      </h1>
      <p className="status-support">
        Please contact our support centre for further assistance.
      </p>
    </div>
  );
};

export default UserRejectedPage;