
// Define types of variables
export interface PetFormData {
  name: string;
  species: string;
  gender: string;
  age: string;
  breed: string;
  description: string;

  desexed: boolean;
  vaccinated: boolean;
  microchipped: boolean;
  fleaWormTreated: boolean;
  kidsFriendly: boolean;
  otherPetsFriendly: boolean;

  state: string;
  suburb: string;
  rehomeReason: string;
  adoptionType: string;
}
