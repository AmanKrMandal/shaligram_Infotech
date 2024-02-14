import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createfromAction } from '../redux/slices/loginSlices';

const LogInForm = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState(null); // State to store login error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setError(null); // Clear any previous errors when input changes
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createfromAction(formData))
    .unwrap()
    .then(() => {
      navigate('/');
    })
    .catch((error) => {
      if (error.message === "Your email is not varified, Check your email") {
        setError(error.message); // Set error state if email is not verified
      } else {
        console.error('Login failed:', error);
      }
    });
  };

  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LogInForm;
