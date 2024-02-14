import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createfromAction } from '../redux/slices/bookingSlices';
// import { useNavigate } from "react-router-dom";

const BookingForm = () => {
  // let navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    customerName: '',
    customerEmail: '',
    BookingDate: '',
    BookingType: 'Full Day',
    BookingTime: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit =  (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    try {
       dispatch(createfromAction(formData));
      // setFormData({
      //   customerName: '',
      //   customerEmail: '',
      //   BookingDate: '',
      //   BookingType: 'Full Day',
      //   BookingTime: '',
      // });
    } catch (error) {
      console.error('Form submission failed:', error);
    }
  };

  return (
    <div>
      <h2>Booking Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="customerName">Customer Name:</label>
          <input
            type="text"
            id="customerName"
            name="customerName"
            value={formData.customerName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="customerEmail">Customer Email:</label>
          <input
            type="email"
            id="customerEmail"
            name="customerEmail"
            value={formData.customerEmail}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="BookingDate">Booking Date:</label>
          <input
            type="date"
            id="BookingDate"
            name="BookingDate"
            value={formData.BookingDate}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="BookingType">Booking Type:</label>
          <select
            id="BookingType"
            name="BookingType"
            value={formData.BookingType}
            onChange={handleChange}
            required
          >
            <option value="Full Day">Full Day</option>
            <option value="Half Day">Half Day</option>
            <option value="Custom">Custom</option>
          </select>
        </div>
        {formData.BookingType === 'Custom' && (
          <div>
            <label htmlFor="BookingTime">Booking Time:</label>
            <input
              type="time"
              id="BookingTime"
              name="BookingTime"
              value={formData.BookingTime}
              onChange={handleChange}
              required
            />
          </div>
        )}
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default BookingForm;
