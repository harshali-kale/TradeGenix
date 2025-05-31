import React, { useState } from 'react';
import './Signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: '', email: '', phone: '', password: '', agree: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add signup logic here
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <input type="text" name="fullName" placeholder="Full Name" required onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
        <input type="tel" name="phone" placeholder="Phone Number" required onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" required onChange={handleChange} />
        
      <p><label className="checkbox-container">
          <input type="checkbox" name="agree" onChange={handleChange} required />
          I agree to the <a href="//www.term.com">terms and conditions</a>
        </label></p>

        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default Signup;
