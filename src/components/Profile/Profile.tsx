import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft, faHeart } from '@fortawesome/free-solid-svg-icons';
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
    description:
      'Max is a bubbly and friendly cat that loves to jump around and give everyone cuddles. The sun dipped below the horizon, casting a warm orange glow over the quiet town. Birds chirped softly in the distance as a gentle breeze rustled the leaves, carrying the faint scent of blooming flowers. Somewhere down the cobblestone streets, laughter echoed, hinting at stories unfolding behind closed doors. For a moment, everything felt peaceful, like time itself had paused to admire the evening.',
  };

  const [selectedThumb, setSelectedThumb] = useState(pet.images[0]);
  const [imageCount, setImageCount] = useState(1);

  // Handle Thumb Image Click
  const handleThumbClick = (img_src: string) => {
    setSelectedThumb(img_src);
    // Find index of given image
    const img_idx = pet.images.findIndex((img) => img === img_src);
    setImageCount(img_idx + 1);
    console.log(`Line 36 the img src is ${img_idx}`);
  };

  // Handle Next Image Click
  const handleNextImageClick = () => {
    setImageCount((prev) => Math.min(prev + 1, 4));
  };

  // Handle Next Image Click
  const handlePrevImageClick = () => {
    setImageCount((prev) => Math.max(prev - 1, 1));
  };

  return (
    <div className="pet-profile-container">
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

          <p className="post-meta">
            Posted by {pet.postedBy} · {pet.postedAt}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
