import { Headings, Vendor } from 'interfaces/vendor';
import styles from './styles.module.scss';

interface props {
  data: Vendor[];
  criteria: Headings[];
}

const Vendors = ({ data }: props) => {
  return <div className={styles.container}></div>;
};

export default Vendors;
