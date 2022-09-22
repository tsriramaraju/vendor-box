import React from 'react';
import { IconContext } from 'react-icons';

import styles from './navItems.module.scss';

interface props {
  icon: any;
  text: string;
  active?: boolean;
}
const NavItem = ({ icon, active, text }: props) => {
  return (
    <div className={`${styles.container} ${active && styles.active}`}>
      <IconContext.Provider
        value={{
          className: `${styles.icon} ${active && styles.active}`,
        }}
      >
        {icon()}
      </IconContext.Provider>
      <p className={`${styles.text} ${active && styles.active}`}>{text}</p>
    </div>
  );
};

export default NavItem;
