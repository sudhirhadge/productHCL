import React from 'react';
import './common.css';

function Login() {
  return (
    <div className="login-card">
      <h1>Welcome</h1>
      
      <form>
        <div className="form-group">
          <label>User ID</label>
          <input type="text" placeholder="Enter your ID" />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="Enter password" />
        </div>

        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;