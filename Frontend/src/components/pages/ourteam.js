import React from 'react';
import styles from '../css/ourteam.module.css';
import image1 from '../images/Diana Peterson.jpeg';
import image2 from '../images/Praveen Anand.jpeg';
import image3 from '../images/Larry Parker.jpeg';

const imageData = [
  { id: 1, src: image1, alt: 'Image 1', name: 'DIANA PETERSON', role: 'FOUNDER' },
  { id: 2, src: image2, alt: 'Image 2', name: 'PRAVEEN ANAND', role: 'MANAGER' },
  { id: 3, src: image3, alt: 'Image 3', name: 'LARRY PARKER', role: 'TEAM LEADER' }
];

const OurTeam = () => {
  return (
    <div className={styles.body}>
      <h1 className={styles.heading}>OUR TEAM</h1>
      <div className={styles.teamContainer}>
      {imageData.map((member) => (
        <div key={member.id} className={styles.teamMember}>
          <img src={member.src} alt={member.alt} className={styles.images} />
          <h4>{member.name}</h4>
          <h6>{member.role}</h6>
        </div>
      ))}
    </div>
    </div>
  );
};

export default OurTeam;
