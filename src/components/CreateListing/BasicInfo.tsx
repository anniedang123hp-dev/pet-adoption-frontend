import type { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw, faBriefcaseMedical, faLocationDot } from '@fortawesome/free-solid-svg-icons';

import { faFileLines } from '@fortawesome/free-regular-svg-icons';
import type { PetFormData } from '../../types/petForm';

interface props {
  setStep: Dispatch<SetStateAction<number>>;
  formData: PetFormData;
  setFormData: Dispatch<SetStateAction<PetFormData>>;
}

const BasicInfo = ({ setStep, setFormData, formData }: props) => {
  const handleStep = () => {
    setStep(1);
    console.log(`Go to 2nd step`);
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
        <h2 className="create-listing-form-header">Tell us about your pet</h2>
        <p className="create-listing-form-subheader">Let's start with the basics</p>
      </div>

      {/* Photo Upload Section */}
      <div className="photo-upload">
        <h3>
          Pet Photos <span className="create-listing-required">*</span>
        </h3>
        <p className="photo-description">
          Add 1-5 photos. Great photos help pets get adopted faster!
        </p>

        <div className="upload-box">
          <input
            type="file"
            accept="image/png, image/jpeg"
            multiple
            onChange={(e) => {
              const files = Array.from(e.target.files || []);
              console.log(files);
            }}
          />
        </div>

        <div className="error-message">
          <div className="error-icon">!</div>
          <span>At least 1 photo is create-listing-required *</span>
        </div>
      </div>

      {/* Basic Information Section  */}
      <h2 className="section-title">Basic Information</h2>

      <div className="create-listing-form-grid">
        <div className="create-listing-form-group">
          <label>
            Pet Name <span className="create-listing-required">*</span>
          </label>
          <input
            type="text"
            value={formData.name}
            placeholder="Enter your pet name ..."
            onChange={(e) => handleChange('name', e.target.value)}
            required
          />
        </div>

        <div className="create-listing-form-group">
          <label>
            Species <span className="create-listing-required">*</span>
          </label>
          <select
            onChange={(e) => handleChange('species', e.target.value)}
            value={formData.species}
            required
          >
            <option value="">Select</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="create-listing-form-group">
          <label>
            Gender <span className="create-listing-required">*</span>
          </label>
          <select
            onChange={(e) => handleChange('gender', e.target.value)}
            value={formData.gender}
            required
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="create-listing-form-group">
          <label>
            Age <span className="create-listing-required">*</span>
          </label>
          <select
            onChange={(e) => handleChange('age', e.target.value)}
            value={formData.age}
            required
          >
            <option value="">Select</option>
            <option value="puppy">Puppy/Kitten</option>
            <option value="young">Young</option>
            <option value="adult">Adult</option>
            <option value="senior">Senior</option>
          </select>
        </div>

        <div className="create-listing-form-group full-width">
          <label>
            Breed <span className="create-listing-required">*</span>
          </label>
          <input
            type="text"
            value={formData.breed}
            placeholder="Enter your pet breed ..."
            onChange={(e) => handleChange('breed', e.target.value)}
            required
          />
        </div>

        <div className="create-listing-form-group full-width">
          <label>
            Pet Story <span className="create-listing-required">*</span>
          </label>
          <textarea
            placeholder="Tell us about your pet's personality, background, and what makes them special..."
            onChange={(e) => handleChange('description', e.target.value)}
            defaultValue={formData.description}
            required
          ></textarea>
          <div className="character-counter">
            <span className="counter-number">1</span>/
            <span className="counter-text">500 characters</span>
          </div>
        </div>
      </div>
      <div className="create-listing-btn-container">
        <button className="skip-create-listing-btn">Previous</button>
        <button className="submit-create-listing-btn" type="submit" onClick={handleStep}>
          Next
        </button>
      </div>
    </div>
  );
};

export default BasicInfo;
