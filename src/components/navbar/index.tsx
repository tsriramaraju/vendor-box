import React from 'react';
import { FiLink, FiSettings } from 'react-icons/fi';
import { RiHistoryFill, RiHomeLine } from 'react-icons/ri';
import Logo from '../../assets/svg/logo';
import styles from './navBar.module.scss';
import NavItem from './navItems';
import ProfileBadge from './profile';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <ProfileBadge
          image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          name="Amanda"
        />
      </div>
      <div className={styles.navLinks}>
        <NavItem icon={RiHomeLine} active text="Home" />
        <NavItem icon={FiLink} text="Users" />
        <NavItem icon={RiHistoryFill} text="Payments" />
        <NavItem icon={FiLink} text="Transactions" />
        <NavItem icon={FiSettings} text="Settings" />
      </div>
      <div className={styles.footer}>
        <Logo className={styles.logo} />
        <p className={styles.text}>Powered</p>
      </div>
    </div>
  );
};

export default Navbar;
