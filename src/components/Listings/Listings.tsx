import './Listings.css';
import { useState, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVenus, faMars, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';

const Listings = () => {
  const [selectedSpecies, setSelectedSpecies] = useState('All');
  const [selectedGender, setSelectedGender] = useState('All');
  const [selectedAge, setSelectedAge] = useState('All');
  const [selectedState, setSelectedState] = useState('All');
  const [goodWithKids, setGoodWithKids] = useState<boolean | null>(null);
  const [goodWithOtherPets, setGoodWithOtherPets] = useState<boolean | null>(null);

  // useEffect(() => {
  //   console.log(`Line 14 the selected species is ${selectedGender}`);
  // }, [selectedGender]);

  type Pet = {
    id: string;
    name: string;
    species: 'Cat' | 'Dog' | 'Other'; // or string if you prefer
    gender: 'Male' | 'Female';
    breed: string;
    dob: string; // ISO date: YYYY-MM-DD
    suburb: string;
    state: 'SA' | 'VIC' | 'NSW' | 'QLD' | 'WA' | 'TAS'; // since you said it's always shortened
    kidsFriendly: boolean;
    otherPetsFriendly: boolean;
    favorite: boolean;
    description: string;
  };

  const pets: Pet[] = useMemo(
    () => [
      {
        id: '123',
        name: 'Max',
        species: 'Cat',
        gender: 'Female',
        breed: 'Golden Retriever',
        dob: '2025-12-01',
        suburb: 'Mawson Lakes',
        state: 'SA',
        kidsFriendly: true,
        otherPetsFriendly: true,
        favorite: true,
        description:
          'Max is a bubbly and friendly cat that loves to jump around and give everyone cuddles. The sun dipped below the horizon, casting a warm orange glow over the quiet town. Birds chirped softly in the distance as a gentle breeze rustled the leaves, carrying the faint scent of blooming flowers. Somewhere down the cobblestone streets, laughter echoed, hinting at stories unfolding behind closed doors. For a moment, everything felt peaceful, like time itself had paused to admire the evening.',
      },
      {
        id: '234',
        name: 'Tom',
        species: 'Dog',
        gender: 'Female',
        breed: 'Golden Retriever',
        dob: '2025-01-01',
        suburb: 'China Town',
        state: 'VIC',
        kidsFriendly: true,
        otherPetsFriendly: true,
        favorite: false,
        description:
          'Max is a bubbly and friendly cat that loves to jump around and give everyone cuddles. The sun dipped below the horizon, casting a warm orange glow over the quiet town. Birds chirped softly in the distance as a gentle breeze rustled the leaves, carrying the faint scent of blooming flowers. Somewhere down the cobblestone streets, laughter echoed, hinting at stories unfolding behind closed doors. For a moment, everything felt peaceful, like time itself had paused to admire the evening.',
      },
      {
        id: '783',
        name: 'Lin',
        species: 'Dog',
        gender: 'Female',
        breed: 'Golden Retriever',
        dob: '2026-08-01',
        suburb: 'Bankstown',
        state: 'QLD',
        kidsFriendly: false,
        otherPetsFriendly: true,
        favorite: false,
        description:
          'Max is a bubbly and friendly cat that loves to jump around and give everyone cuddles. The sun dipped below the horizon, casting a warm orange glow over the quiet town. Birds chirped softly in the distance as a gentle breeze rustled the leaves, carrying the faint scent of blooming flowers. Somewhere down the cobblestone streets, laughter echoed, hinting at stories unfolding behind closed doors. For a moment, everything felt peaceful, like time itself had paused to admire the evening.',
      },
      {
        id: '456',
        name: 'Gab',
        species: 'Other',
        gender: 'Male',
        breed: 'N/A',
        dob: '2026-01-01',
        suburb: 'Circular Quay',
        state: 'NSW',
        kidsFriendly: false,
        otherPetsFriendly: true,
        favorite: false,
        description:
          'Max is a bubbly and friendly rabbit that loves to jump around and give everyone cuddles. The sun dipped below the horizon, casting a warm orange glow over the quiet town. Birds chirped softly in the distance as a gentle breeze rustled the leaves, carrying the faint scent of blooming flowers. Somewhere down the cobblestone streets, laughter echoed, hinting at stories unfolding behind closed doors. For a moment, everything felt peaceful, like time itself had paused to admire the evening.',
      },
      {
        id: '789',
        name: 'Ann',
        species: 'Other',
        gender: 'Female',
        breed: 'N/A',
        dob: '2020-04-01',
        suburb: 'St Clair',
        state: 'SA',
        kidsFriendly: true,
        otherPetsFriendly: false,
        favorite: false,
        description:
          'Max is a bubbly and friendly rabbit that loves to jump around and give everyone cuddles',
      },
      {
        id: '278',
        name: 'Ube',
        species: 'Other',
        gender: 'Male',
        breed: 'N/A',
        dob: '2018-01-01',
        suburb: 'Campsie',
        state: 'TAS',
        kidsFriendly: true,
        otherPetsFriendly: false,
        favorite: false,
        description:
          'Max is a bubbly and friendly rabbit that loves to jump around and give everyone cuddles. The sun dipped below the horizon, casting a warm orange glow over the quiet town. Birds chirped softly in the distance as a gentle breeze rustled the leaves, carrying the faint scent of blooming flowers. Somewhere down the cobblestone streets, laughter echoed, hinting at stories unfolding behind closed doors. For a moment, everything felt peaceful, like time itself had paused to admire the evening.',
      },
    ],
    []
  );

  // Age e.g. 2 years 1 month
  const formatPetAge = (dob: string): string => {
    const birth = new Date(dob);
    const today = new Date();

    if (isNaN(birth.getTime()) || birth > today) {
      return 'Age Unknown';
    }

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();

    if (months < 0) {
      years--;
      months += 12;
    }

    if (years <= 0) {
      return `${months} month${months > 1 ? 's' : ''} old`;
    }

    return `${years} year${years > 1 ? 's' : ''} ${months === 0 ? 'old' : `${months} month${months > 1 ? 's' : ''} old`} `;
  };

  // Check if the formatted age sits within the selected age range
  const isInSelectedAgeRange = (dob: string, ageRange: string): boolean => {
    const today = new Date();
    const birth = new Date(dob);

    let years = today.getFullYear() - birth.getFullYear();
    const months = today.getMonth() - birth.getMonth();

    // For example today (2026-01-01) and birth (2025-12-01) => 1 month (not 1 year)
    if (months < 0) {
      years--;
    }

    // Map of key and value age objects. E.g. Record<Key,Value>
    const AGE_RANGES: Record<string, { min: number; max: number }> = {
      puppy: {
        min: 0,
        max: 1,
      },
      young: {
        min: 1,
        max: 3,
      },
      adult: {
        min: 3,
        max: 7,
      },
      senior: {
        min: 7,
        max: 100,
      },
    };

    const range = AGE_RANGES[ageRange];
    const minAge = range?.min;
    const maxAge = range?.max;

    if (years >= minAge && years <= maxAge) {
      return true;
    }

    return false;
  };

  const filteredPets = useMemo(() => {
    return pets.filter((pet) => {
      // Filter by species
      if (selectedSpecies !== 'All' && pet.species !== selectedSpecies) {
        return false;
      }

      // Filter by gender
      if (selectedGender !== 'All' && pet.gender !== selectedGender) {
        return false;
      }

      // Filter by age
      if (selectedAge !== 'All' && !isInSelectedAgeRange(pet.dob, selectedAge)) {
        return false;
      }

      // Filter by state
      if (selectedState !== 'All' && pet.state !== selectedState) {
        return false;
      }

      // Filter by good with kids
      if (goodWithKids !== null && pet.kidsFriendly !== goodWithKids) {
        return false;
      }

      // Filter by good with other pets
      if (goodWithOtherPets !== null && pet.otherPetsFriendly !== goodWithOtherPets) {
        return false;
      }

      return true;
    });
  }, [
    pets,
    selectedSpecies,
    selectedGender,
    selectedAge,
    selectedState,
    goodWithKids,
    goodWithOtherPets,
  ]);

  // const handleFavoritePetClick = (id: string) => {
  // console.log(`Clicked`);
  // pets.forEach((pet) => {
  //   if (pet.id === id) {
  //     pet.favorite = !pet.favorite;
  //   }
  // });
  // };

  // console.log(`Line 193 the filtered pet is ${JSON.stringify(filteredPets, null, 2)}`);

  return (
    <div className="listings-container">
      {/* Sidebar Filters */}
      <aside className="filters-sidebar">
        <h2 className="filters-title">Filters</h2>

        <div className="filter-section">
          <h3>Species</h3>
          <div className="radio-group">
            <div className="radio-item">
              <input
                type="radio"
                id="dog"
                name="species"
                value="Dog"
                onChange={(e) => setSelectedSpecies(e.target.value)}
              />
              <label htmlFor="dogs">Dogs</label>
            </div>
            <div className="radio-item">
              <input
                type="radio"
                id="cat"
                name="species"
                value="Cat"
                onChange={(e) => setSelectedSpecies(e.target.value)}
              />
              <label htmlFor="cats">Cats</label>
            </div>
            <div className="radio-item">
              <input
                type="radio"
                id="other"
                name="species"
                value="Other"
                onChange={(e) => setSelectedSpecies(e.target.value)}
              />
              <label htmlFor="other">Other</label>
            </div>
            <div className="radio-item">
              <input
                type="radio"
                id="any"
                name="species"
                value="All"
                onChange={(e) => setSelectedSpecies(e.target.value)}
              />
              <label htmlFor="other">Any</label>
            </div>
          </div>
        </div>

        <div className="filter-divider"></div>

        <div className="filter-section">
          <h3>Gender</h3>
          <div className="radio-group">
            <div className="radio-item">
              <input
                type="radio"
                id="female"
                name="gender"
                value="Female"
                onChange={(e) => setSelectedGender(e.target.value)}
              />
              <label htmlFor="female">Female</label>
            </div>
            <div className="radio-item">
              <input
                type="radio"
                id="male"
                name="gender"
                value="Male"
                onChange={(e) => setSelectedGender(e.target.value)}
              />
              <label htmlFor="male">Male</label>
            </div>
          </div>
        </div>

        <div className="filter-divider"></div>

        <div className="filter-section">
          <h3>Age</h3>
          <select className="dropdown-select" onChange={(e) => setSelectedAge(e.target.value)}>
            <option value="All">Select age</option>
            <option value="puppy">Puppy/Kitten (0-1 year)</option>
            <option value="young">Young (1-3 years)</option>
            <option value="adult">Adult (3-7 years)</option>
            <option value="senior">Senior (7+ years)</option>
          </select>
        </div>

        <div className="filter-divider"></div>

        <div className="filter-section">
          <h3>State</h3>
          <select className="dropdown-select" onChange={(e) => setSelectedState(e.target.value)}>
            <option value="All">Select state</option>
            <option value="SA">South Australia</option>
            <option value="NSW">New South Wales</option>
            <option value="VIC">Victoria</option>
            <option value="QLD">Queensland</option>
            <option value="WA">Western Australia</option>
            <option value="TAS">Tasmania</option>
          </select>
        </div>

        <div className="filter-divider"></div>

        <div className="filter-section">
          <h3>Good with kids?</h3>
          <div className="radio-group">
            <div className="radio-item">
              <input
                type="radio"
                id="kids-yes"
                name="kids"
                checked={goodWithKids === true}
                onChange={() => setGoodWithKids(true)}
              />
              <label htmlFor="kids-yes">Yes</label>
            </div>
            <div className="radio-item">
              <input
                type="radio"
                id="kids-no"
                name="kids"
                checked={goodWithKids === false}
                onChange={() => setGoodWithKids(false)}
              />
              <label htmlFor="kids-no">No</label>
            </div>
          </div>
        </div>

        <div className="filter-divider"></div>

        <div className="filter-section">
          <h3>Good with other pets?</h3>
          <div className="radio-group">
            <div className="radio-item">
              <input
                type="radio"
                id="pets-yes"
                name="pets"
                checked={goodWithOtherPets === true}
                onChange={() => setGoodWithOtherPets(true)}
              />
              <label htmlFor="pets-yes">Yes</label>
            </div>
            <div className="radio-item">
              <input
                type="radio"
                id="pets-no"
                name="pets"
                checked={goodWithOtherPets === false}
                onChange={() => setGoodWithOtherPets(false)}
              />
              <label htmlFor="pets-no">No</label>
            </div>
          </div>
        </div>
      </aside>

      {/* Pet Grid */}
      <main className="pet-grid">
        {filteredPets.map((pet, index) => (
          // Pet Card 1
          <div className="pet-card" key={index}>
            <div className="pet-image">
              <button className="favorite-btn">
                <FontAwesomeIcon
                  icon={pet.favorite ? faHeart : farHeart}
                  style={{ color: pet.favorite ? '#C55A9A' : 'black' }}
                />
              </button>
            </div>
            <div className="pet-info">
              <h3 className="pet-name">
                {pet.name}
                <FontAwesomeIcon
                  icon={pet.gender === 'Female' ? faVenus : faMars}
                  style={{ color: pet.gender === 'Female' ? '#E91E63' : '#1E88E5' }}
                />
              </h3>
              <p className="pet-breed">{pet.breed}</p>
              <p className="pet-age">{formatPetAge(pet.dob)}</p>
              <p className="pet-location">
                <span className="location-icon">📍</span> {pet.suburb + ', ' + pet.state}
              </p>
              <p className="pet-description">{pet.description}</p>
              <button className="view-more-btn">View More</button>
            </div>
          </div>
        ))}

        {/* Load More Button */}
        <div className="load-more">
          <button className="load-more-btn">⌄</button>
        </div>
      </main>
    </div>
  );
};

export default Listings;
