import type { Dispatch, SetStateAction } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw, faBriefcaseMedical, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faFileLines } from '@fortawesome/free-regular-svg-icons';
import type { PetFormData } from '../../types/petForm';

interface props {
  setStep: Dispatch<SetStateAction<number>>;
  setFormData: Dispatch<SetStateAction<PetFormData>>;
}

const BasicInfo = ({ setStep }: props) => {
  const handleNextStep = () => {
    setStep(2);
  };

  const handlePrevStep = () => {
    setStep(0);
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
        <h2 className="create-listing-form-header">Health & Care Information</h2>
        <p className="create-listing-form-subheader">
          This helps adopters understand your pet's medical needs
        </p>
      </div>

      {/* Basic Information Section  */}
      <h2 className="section-title">Medical Status</h2>

      <div className="create-listing-form-grid">
        <div className="create-listing-form-group">
          <label>
            Desexed <span className="create-listing-required">*</span>
          </label>
          <select>
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        <div className="create-listing-form-group">
          <label>
            Vaccinated <span className="create-listing-required">*</span>
          </label>
          <select>
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        <div className="create-listing-form-group">
          <label>
            Microchipped <span className="create-listing-required">*</span>
          </label>
          <select>
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        <div className="create-listing-form-group">
          <label>
            Flea & Worm Treated <span className="create-listing-required">*</span>
          </label>
          <select>
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        <div className="create-listing-form-group">
          <label>
            Good with kids <span className="create-listing-required">*</span>
          </label>
          <select>
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        <div className="create-listing-form-group">
          <label>
            Good with other pets <span className="create-listing-required">*</span>
          </label>
          <select>
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
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

export default BasicInfo;
