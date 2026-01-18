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
    desexed: false,
    vaccinated: false,
    microchipped: false,
    fleaWormTreated: false,
    kidsFriendly: false,
    otherPetsFriendly: false,
    state: '',
    suburb: '',
    rehomeReason: '',
    adoptionType: '',
  });

  const [step, setStep] = useState(0);

  useEffect(() => {
    console.log(`Line 28 the name is ${formData.gender}`);
  }, [formData.gender]);

  return (
    <>
      {step === 0 && <BasicInfo setStep={setStep} setFormData={setFormData} formData={formData} />}
      {step === 1 && <HealthInfo setStep={setStep} setFormData={setFormData} />}
      {step === 2 && <LocationInfo setStep={setStep} setFormData={setFormData} />}
      {step === 3 && <Review setStep={setStep} />}
    </>
  );
};

export default CreateListing;
