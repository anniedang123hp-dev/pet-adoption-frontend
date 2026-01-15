import './Enquiry.css';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

const Enquiry = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [state, setState] = useState('');
  const [suburb, setSuburb] = useState('');
  const [message, setMessage] = useState('');

  const { id } = useParams<{ id: string }>();

  console.log(`Line 15 the pet id is ${JSON.stringify(id)}`);

  const navigate = useNavigate();
  const handleSubmit = () => {};

  // Go back to previous page
  const handleGoBackToPrevPage = () => {
    navigate(`/profile/${id}`);
  };

  return (
    <div className="enquiry-container">
      <div className="enquiry-form">
        <div className="enquiry-form-header-container">
          <h2 className="enquiry-form-header">
            Let's Connect! <FontAwesomeIcon icon={faPaw} style={{ color: '#C55A9A' }} />
          </h2>
          <p className="enquiry-form-subheader">
            Tell us why you'd love to meet our pet - change to pet's name
          </p>
        </div>

        <div className="enquiry-input-form-container">
          <form onSubmit={handleSubmit} className="enquiry-input-form">
            <label htmlFor="name">Your Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
              className="enquiry-input-field"
            />

            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="enquiry-input-field"
            />

            <label htmlFor="phone">Contact Number:</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              pattern="^(\+?61|0)4\d{8}$"
              placeholder="Enter your number"
              title="Enter a valid Australian mobile number starting with 04"
              required
              className="enquiry-input-field"
            />
            <label htmlFor="state">Which state are you currently living in?</label>
            <select className="enquiry-dropdown-select" onChange={(e) => setState(e.target.value)}>
              <option value="All">Select state</option>
              <option value="SA">South Australia</option>
              <option value="NSW">New South Wales</option>
              <option value="VIC">Victoria</option>
              <option value="QLD">Queensland</option>
              <option value="WA">Western Australia</option>
              <option value="TAS">Tasmania</option>
            </select>

            <label htmlFor="suburb">Your Suburb</label>
            <input
              type="text"
              id="suburb"
              value={suburb}
              onChange={(e) => setSuburb(e.target.value)}
              placeholder="Enter suburb"
              required
              className="enquiry-input-field"
            />

            <label htmlFor="message">Your Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message here..."
              rows={6}
              required
              className="enquiry-input-message"
            />
            <div className="enquiry-btn-container">
              <button className="skip-enquiry-btn" onClick={handleGoBackToPrevPage}>
                Maybe Later
              </button>
              <button className="submit-enquiry-btn" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Enquiry;
