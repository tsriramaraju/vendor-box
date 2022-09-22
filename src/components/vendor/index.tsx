import { Headings, Vendor } from 'interfaces/vendor';
import { useState } from 'react';
import VendorBox from './box';
import styles from './styles.module.scss';

interface props {
  data: Vendor[];
  criteria: Headings[];
}

const Vendors = ({ data, criteria }: props) => {
  const [vendors, setVendors] = useState<Vendor[]>(data);
  return (
    <div className={styles.container}>
      {vendors.map((vendor) => (
        <VendorBox
          close={() => {}}
          criteria={criteria}
          vendor={vendor}
          key={vendor.id}
          toggle={'Funding History'}
        />
      ))}
    </div>
  );
};

export default Vendors;
