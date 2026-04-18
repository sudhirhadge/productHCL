
import React from 'react';
import './common.css';

const UserSuccessPage = () => {
  return (
<div class="summary-card">
  <h1>Application Submitted!</h1>
  
  <ul class="data-list">
    <li><span class="label">Name:</span> <span id="name">Parul Sharma</span></li>
    <li><span class="label">DOB:</span> <span id="dob">08/09/2011</span></li>
    <li><span class="label">Email:</span> <span id="email">parulsharma90@hotmail.com</span></li>
    <li><span class="label">PAN Card:</span> <span id="pan">wdqwdiuqwgduw</span></li>
  </ul>

  <div class="app-number-box">
    Application ID: <span id="appNum">#12345</span>
  </div>

  <p class="footer-text">
    In case of any query, please contact our support centre.
  </p>
</div>
  );
};

export default UserSuccessPage;