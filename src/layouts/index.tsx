import { ReactElement, useEffect, useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import Logo from '../assets/svg/logo';
import Navbar from '../components/navbar';
import styles from './layout.module.scss';

type props = {
  children?: ReactElement;
};

export const Layout = ({ children }: props) => {
  const [isCompatible, setCompatible] = useState(false);

  useEffect(() => {
    if (window.innerWidth / window.innerHeight < 1) {
      setCompatible(true);
    } else setCompatible(false);

    window.addEventListener('resize', () => {
      if (window.innerWidth / window.innerHeight < 1) {
        setCompatible(true);
      } else setCompatible(false);
    });
  }, []);
  // removed lottie and added a simple mobile layout
  return isCompatible ? (
    <div className={styles.tab}>
      <div className={styles.mobileNav}>
        <Logo className={styles.logo} />
        <FiMenu className={styles.menu} />
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  ) : (
    <div className={styles.layout}>
      <div className={`${styles.navArea} `}>
        <Navbar />
      </div>
      <div className={`${styles.mainArea} `}>
        <div className={styles.contentArea}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
