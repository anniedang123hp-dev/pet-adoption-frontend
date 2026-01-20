import type { Dispatch, SetStateAction } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw, faBriefcaseMedical, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faFileLines } from '@fortawesome/free-regular-svg-icons';
import type { PetFormData } from '../../types/petForm';

interface props {
  setStep: Dispatch<SetStateAction<number>>;
  setFormData: Dispatch<SetStateAction<PetFormData>>;
  formData: PetFormData;
}

const LocationInfo = ({ setStep, setFormData, formData }: props) => {
  const handleNextStep = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // stop form submission
    setStep(3);
  };

  const handlePrevStep = () => {
    setStep(1);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
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

      <form onSubmit={(e) => handleNextStep(e)}>
        <div className="create-listing-form-grid">
          <div className="create-listing-form-group">
            <label>
              State <span className="create-listing-required">*</span>
            </label>
            <select
              onChange={(e) => handleChange('state', e.target.value)}
              value={formData.state}
              required
            >
              <option value="">Select state</option>
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
            <input
              type="text"
              value={formData.suburb}
              placeholder="Enter your city/suburb ..."
              onChange={(e) => handleChange('suburb', e.target.value)}
              required
            />
          </div>
        </div>

        <h2 className="section-title">Additional Information</h2>

        <div className="create-listing-form-grid">
          <div className="create-listing-form-group">
            <label>
              Reason for rehoming <span className="create-listing-required">*</span>
            </label>
            <select
              onChange={(e) => handleChange('rehomeReason', e.target.value)}
              value={formData.rehomeReason}
              required
            >
              <option value="">Select</option>
              <option value="owner_passed_away">Owner passed away</option>
              <option value="family_change">Family circumstances changed</option>
              <option value="too_energetic">Pet too energetic for household</option>
              <option value="owner_health">Health issues (owner)</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="create-listing-form-group">
            <label>
              Adoption Types <span className="create-listing-required">*</span>
            </label>
            <select
              onChange={(e) => handleChange('adoptionType', e.target.value)}
              value={formData.adoptionType}
              required
            >
              <option value="">Select</option>
              <option value="local">Local Only</option>
              <option value="insterstate">Interstate Allowed</option>
            </select>
          </div>
        </div>

        <div className="create-listing-btn-container">
          <button className="skip-create-listing-btn" onClick={handlePrevStep}>
            Previous
          </button>
          {/* <button className="submit-create-listing-btn" type="submit" onClick={handleNextStep}> */}
          <button className="submit-create-listing-btn" type="submit">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default LocationInfo;
