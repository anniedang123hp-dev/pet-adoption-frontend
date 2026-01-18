import type { Dispatch, SetStateAction } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw, faBriefcaseMedical, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faFileLines } from '@fortawesome/free-regular-svg-icons';
import type { PetFormData } from '../../types/petForm';

interface props {
  setStep: Dispatch<SetStateAction<number>>;
  setFormData: Dispatch<SetStateAction<PetFormData>>;
}

const LocationInfo = ({ setStep }: props) => {
  const handleNextStep = () => {
    setStep(3);
  };

  const handlePrevStep = () => {
    setStep(1);
  };
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
        <h2 className="create-listing-form-header">Location & Adoption Details</h2>
        <p className="create-listing-form-subheader">Final details about the adoption process</p>
      </div>

      {/* Basic Information Section  */}
      <h2 className="section-title">Location</h2>

      <div className="create-listing-form-grid">
        <div className="create-listing-form-group">
          <label>
            State <span className="create-listing-required">*</span>
          </label>
          <select>
            <option value="All">Select state</option>
            <option value="SA">South Australia</option>
            <option value="NSW">New South Wales</option>
            <option value="VIC">Victoria</option>
            <option value="QLD">Queensland</option>
            <option value="WA">Western Australia</option>
            <option value="TAS">Tasmania</option>
          </select>
        </div>

        <div className="create-listing-form-group">
          <label>
            City/Suburb <span className="create-listing-required">*</span>
          </label>
          <input type="text" placeholder="Enter your city/suburb ..." />
        </div>
      </div>

      <h2 className="section-title">Additional Information</h2>

      <div className="create-listing-form-grid">
        <div className="create-listing-form-group">
          <label>
            Reason for rehoming <span className="create-listing-required">*</span>
          </label>
          <select>
            <option value="">Select</option>
            <option value="mixed">Owner passed away</option>
            <option value="labrador">Family circumstances changed</option>
            <option value="german-shepherd">Pet too energetic for household</option>
            <option value="golden-retriever">Health issues (owner)</option>
            <option value="golden-retriever">Other</option>
          </select>
        </div>

        <div className="create-listing-form-group">
          <label>
            Adoption Types <span className="create-listing-required">*</span>
          </label>
          <select>
            <option value="">Select</option>
            <option value="mixed">Local Only</option>
            <option value="labrador">Interstate Allowed</option>
          </select>
        </div>
      </div>

      <div className="create-listing-btn-container">
        <button className="skip-create-listing-btn" onClick={handlePrevStep}>
          Previous
        </button>
        <button className="submit-create-listing-btn" type="submit" onClick={handleNextStep}>
          Next
        </button>
      </div>
    </div>
  );
};

export default LocationInfo;
