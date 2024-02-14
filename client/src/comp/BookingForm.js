import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createfromAction } from '../redux/slices/bookingSlices';

const BookingForm = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    customerName: '',
    customerEmail: '',
    bookingDate: '',
    bookingType: 'Full Day',
    bookingSlot: '',
    bookingTime: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    dispatch(createfromAction(formData))
    .unwrap()
    .then(() => {
      // navigate('/');
      console.log("FFFF")
    })
    .catch((error) => {
      console.error('Signup failed:', error);
    });
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
          <label htmlFor="bookingDate">Booking Date:</label>
          <input
            type="date"
            id="bookingDate"
            name="bookingDate"
            value={formData.bookingDate}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="bookingType">Booking Type:</label>
          <select
            id="bookingType"
            name="bookingType"
            value={formData.bookingType}
            onChange={handleChange}
            required
          >
            <option value="Full Day">Full Day</option>
            <option value="Half Day">Half Day</option>
            <option value="Custom">Custom</option>
          </select>
        </div>
        {formData.bookingType === 'Half Day' && (
          <div>
            <label htmlFor="bookingSlot">Booking Slot:</label>
            <select
              id="bookingSlot"
              name="bookingSlot"
              value={formData.bookingSlot}
              onChange={handleChange}
              required
            >
              <option value="First Half">First Half</option>
              <option value="Second Half">Second Half</option>
            </select>
          </div>
        )}
        {formData.bookingType === 'Custom' && (
          <div>
            <label htmlFor="bookingTime">Booking Time:</label>
            <input
              type="time"
              id="bookingTime"
              name="bookingTime"
              value={formData.bookingTime}
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
