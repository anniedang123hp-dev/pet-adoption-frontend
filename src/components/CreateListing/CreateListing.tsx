import './CreateListing.css';
import { useState } from 'react';
import BasicInfo from './BasicInfo';
import HealthInfo from './HealthInfo';
import LocationInfo from './LocationInfo';
import Review from './Review';

const CreateListing = () => {
  const [step, setStep] = useState(0);

  return (
    <>
      {step === 0 && <BasicInfo setStep={setStep} />}
      {step === 1 && <HealthInfo setStep={setStep} />}
      {step === 2 && <LocationInfo setStep={setStep} />}
      {step === 3 && <Review setStep={setStep} />}
    </>
  );
};

export default CreateListing;
