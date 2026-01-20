import './CreateListing.css';
import { useState, useEffect } from 'react';
import BasicInfo from './BasicInfo';
import HealthInfo from './HealthInfo';
import LocationInfo from './LocationInfo';
import Review from './Review';
import type { PetFormData } from '../../types/petForm';

const CreateListing = () => {
  const [formData, setFormData] = useState<PetFormData>({
    name: '',
    species: '',
    gender: '',
    age: '',
    breed: '',
    description: '',
    desexed: null,
    vaccinated: null,
    microchipped: null,
    fleaWormTreated: null,
    kidsFriendly: null,
    otherPetsFriendly: null,
    state: '',
    suburb: '',
    rehomeReason: '',
    adoptionType: '',
  });

  const [step, setStep] = useState(0);

  useEffect(() => {
    console.log(`Line 28 the name is ${JSON.stringify(formData, null, 2)}`);
  }, [formData]);

  return (
    <>
      {step === 0 && <BasicInfo setStep={setStep} setFormData={setFormData} formData={formData} />}
      {step === 1 && <HealthInfo setStep={setStep} setFormData={setFormData} formData={formData} />}
      {step === 2 && (
        <LocationInfo setStep={setStep} setFormData={setFormData} formData={formData} />
      )}
      {step === 3 && <Review setStep={setStep} formData={formData} />}
    </>
  );
};

export default CreateListing;
