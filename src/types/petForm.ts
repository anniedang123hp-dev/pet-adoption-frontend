
// Define types of variables
export interface PetFormData {
  name: string;
  species: string;
  gender: string;
  age: string;
  breed: string;
  description: string;

  desexed: boolean | null;
  vaccinated: boolean | null;
  microchipped: boolean | null;
  fleaWormTreated: boolean | null;
  kidsFriendly: boolean | null;
  otherPetsFriendly: boolean | null;

  state: string;
  suburb: string;
  rehomeReason: string;
  adoptionType: string;
}
