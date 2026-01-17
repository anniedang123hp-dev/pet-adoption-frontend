import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft, faHeart, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';

import DOG_IMG from '../../assets/dog.jpg';
import EG from '../../assets/eg1.jpg';
import CAT from '../../assets/cat.jpg';
import CAT_1 from '../../assets/cat_2.jpg';

import './Profile.css';

const Profile = () => {
  const pet = {
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
    images: [DOG_IMG, EG, CAT, CAT_1],
    postedBy: 'Jane Miller',
    postedAt: '2026-01-01',
    favorite: false,
    desexed: true,
    microchipped: true,
    fleaWormTreated: true,
    description:
      "Hi there! I'm Max, and I'm absolutely thrilled to meet you! 🎾\n\nI'm a super friendly 2-year-old Golden Retriever who believes every day is an adventure waiting to happen! \n\n I LOVE playing fetch (seriously, I could do it all day!), splashing in the lake, and going on long walks where I can sniff all the exciting smells. Kids? Other dogs? I think they're all awesome! \nI'm basically a professional cuddler and tail-wagger. \n\n🐕 I'm looking for a family who loves fun, outdoor activities, and lots of belly rubs. If you have a backyard where I can play and explore, that would be pawsome! I promise to be your most loyal friend and bring endless joy to your home! ❤️",
  };

  const [selectedThumb, setSelectedThumb] = useState(pet.images[0]);
  const [imageCount, setImageCount] = useState(1);

  const navigate = useNavigate();

  // Handle Thumb Image Click
  const handleThumbClick = (img_src: string) => {
    setSelectedThumb(img_src);
    // Find index of given image
    const img_idx = pet.images.findIndex((img) => img === img_src);
    setImageCount(img_idx + 1);
  };

  // Handle Next Image Click
  const handleNextImageClick = () => {
    setImageCount((prev) => {
      const next = Math.min(prev + 1, 4);
      setSelectedThumb(pet.images[next - 1]);
      return next;
    });
  };

  // Handle Next Image Click
  const handlePrevImageClick = () => {
    setImageCount((prev) => {
      const previous = Math.max(prev - 1, 1);
      setSelectedThumb(pet.images[previous - 1]);
      return previous;
    });
  };

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

  // Click to go to enquiry page
  const handleAdoptClick = () => {
    navigate(`/enquiry/${pet.id}`);
  };

  return (
    <div className="pet-profile-container">
      <div className="pet-image-stats-container">
        <div className="pet-image-container">
          <div className="pet-profile-image">
            <img src={selectedThumb} alt="dog_img" className="pet-img"></img>

            <button className="profile-favorite-btn">
              <FontAwesomeIcon
                icon={pet.favorite ? faHeart : farHeart}
                style={{ color: pet.favorite ? '#C55A9A' : 'black' }}
              />
            </button>

            <button className="previous-image" onClick={handlePrevImageClick}>
              <FontAwesomeIcon icon={faAngleLeft} style={{ color: 'C55A9A' }} />
            </button>
            <button className="next-image" onClick={handleNextImageClick}>
              <FontAwesomeIcon icon={faAngleRight} style={{ color: 'C55A9A' }} />
            </button>

            <div className="image-number">
              <span>{imageCount}</span>/<span>4</span>
            </div>
          </div>

          <div className="post-preview">
            <div className="image-row">
              {pet.images.map((img_src, index) => (
                <img
                  key={index}
                  src={img_src}
                  alt="eg_img"
                  className="thumb-img"
                  style={{
                    border: selectedThumb === img_src ? '3px solid black' : 'none',
                  }}
                  onClick={() => handleThumbClick(img_src)}
                ></img>
              ))}
            </div>
          </div>

          <p className="post-meta">
            Posted by {pet.postedBy} · {pet.postedAt}
          </p>
        </div>

        <div className="pet-stats-container">
          <div className="pet-stats">
            <h3 className="pet-header-message">Max's Stats</h3>

            <p>{pet.breed}</p>
            <p>{formatPetAge(pet.dob)}</p>
            {pet.desexed && (
              <p>
                {' '}
                <FontAwesomeIcon icon={faCheck} style={{ color: '#6BA70C' }} />
                Desexed
              </p>
            )}
            {pet.microchipped && (
              <p>
                {' '}
                <FontAwesomeIcon icon={faCheck} style={{ color: '#6BA70C' }} />
                Microchripped
              </p>
            )}
            {pet.fleaWormTreated && (
              <p>
                <FontAwesomeIcon icon={faCheck} style={{ color: '#6BA70C' }} />
                Flea & Worm Treated
              </p>
            )}
            {pet.kidsFriendly && (
              <p>
                <FontAwesomeIcon icon={faCheck} style={{ color: '#6BA70C' }} />
                Good with kids
              </p>
            )}
            {pet.otherPetsFriendly && (
              <p>
                <FontAwesomeIcon icon={faCheck} style={{ color: '#6BA70C' }} />
                Good with other pets
              </p>
            )}
            <p>
              📍
              {pet.suburb}, {pet.state}
            </p>
          </div>
        </div>
      </div>

      <div className="pet-message-container">
        <h2 className="pet-header-message">Meet {pet.name}!</h2>
        <p className="pet-profile-message" style={{ whiteSpace: 'pre-wrap' }}>
          {pet.description}
        </p>
        <div className="adopt-btn-container">
          <button className="adopt-btn" onClick={handleAdoptClick}>
            Apply to adopt {pet.name}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
