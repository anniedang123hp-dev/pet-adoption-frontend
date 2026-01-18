import type { Dispatch, SetStateAction } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPaw,
  faBriefcaseMedical,
  faLocationDot,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';

import { faFileLines } from '@fortawesome/free-regular-svg-icons';
import DOG_IMG from '../../assets/dog.jpg';

interface props {
  setStep: Dispatch<SetStateAction<number>>;
}

const Review = ({ setStep }: props) => {
  const handlePrevStep = () => {
    setStep(2);
  };

  const handleSubmitForm = () => {};
  return (
    <div className="create-listing-container">
      {/* Progress Steps */}
      <div className="create-listing-progress-steps">
        <div className="create-listing-step">
          <div className="create-listing-step-icon">
            <FontAwesomeIcon icon={faPaw} />
          </div>
          <span className="create-listing-step-label">Pet Basics</span>
        </div>
        <div className="create-listing-step">
          <div className="create-listing-step-icon inactive">
            <FontAwesomeIcon icon={faBriefcaseMedical} />
          </div>
          <span className="create-listing-step-label">Health & Care</span>
        </div>
        <div className="create-listing-step">
          <div className="create-listing-step-icon inactive">
            <FontAwesomeIcon icon={faLocationDot} />
          </div>
          <span className="create-listing-step-label">Location</span>
        </div>
        <div className="create-listing-step">
          <div className="create-listing-step-icon inactive">
            <FontAwesomeIcon icon={faFileLines} />
          </div>
          <span className="create-listing-step-label">Review</span>
        </div>
      </div>

      {/* Form Header */}
      <div className="create-listing-form-header-container">
        <h2 className="create-listing-form-header">Review & Publish</h2>
        <p className="create-listing-form-subheader">Check your listing before publishing</p>
      </div>

      {/* Basic Information Section  */}
      <h2 className="section-title">Preview</h2>

      <div className="create-listing-preview-container">
        <div className="preview-img-summary-container">
          <div className="preview-img-container">
            <img src={DOG_IMG} alt="FurBridge Logo" className="preview-img" />
          </div>
          <div className="preview-summary-container">
            <p>No brief summary provided!</p>
          </div>
        </div>

        <div className="preview-basic-info-container">
          <h4>Max</h4>
          <p>Golden Retriever</p>
          <p>2 years 3 months</p>
          <p>Female</p>
          <p>Insterstate Only</p>
          <p>Reason for rehoming</p>
          <p> 📍 Adelaide SA</p>
        </div>

        <div className="preview-remain-info-container">
          <h4>Medical Status</h4>
          <p>
            <FontAwesomeIcon icon={faCheck} style={{ color: '#6BA70C' }} /> Desexed
          </p>
          <p>
            <FontAwesomeIcon icon={faCheck} style={{ color: '#6BA70C' }} /> Vaccinated
          </p>
          <p>
            <FontAwesomeIcon icon={faCheck} style={{ color: '#6BA70C' }} /> Microchipped
          </p>
          <p>
            <FontAwesomeIcon icon={faCheck} style={{ color: '#6BA70C' }} /> Flea & Worm Treated
          </p>
          <p>
            <FontAwesomeIcon icon={faCheck} style={{ color: '#6BA70C' }} /> Good with kids
          </p>
          <p>
            <FontAwesomeIcon icon={faCheck} style={{ color: '#6BA70C' }} />
            Good with other pets
          </p>
        </div>
      </div>

      <div className="create-listing-btn-container">
        <button className="skip-create-listing-btn" onClick={handlePrevStep}>
          Previous
        </button>
        <button className="submit-create-listing-btn" type="submit" onClick={handleSubmitForm}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Review;
