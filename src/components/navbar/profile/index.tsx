import React from 'react';
import styles from './profileBadge.module.scss';

interface props {
  image: string;
  name: string;
}

const ProfileBadge = ({ image, name }: props) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt={name} />
      <p className={styles.text}>{name}</p>
    </div>
  );
};

export default ProfileBadge;
