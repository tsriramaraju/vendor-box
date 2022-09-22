import { Headings, Vendor } from 'interfaces/vendor';
import { useState } from 'react';
import VendorBox from './box';
import CriteriaBox from './criteria';
import styles from './styles.module.scss';

interface props {
  data: Vendor[];
  criteria: Headings[];
}

const Vendors = ({ data, criteria }: props) => {
  const [leaf, setLeaf] = useState('');
  const [vendors, setVendors] = useState<Vendor[]>(data);
  const [headings, setHeadings] = useState<Headings[]>(criteria);
  return (
    <div className={styles.container}>
      <CriteriaBox
        headings={headings}
        setHeadings={setHeadings}
        leaf={leaf}
        setLeaf={setLeaf}
      />
      {vendors.map((vendor) => (
        <VendorBox
          close={() => {
            setVendors((prev) => prev.filter((val) => val.id !== vendor.id));
          }}
          criteria={headings}
          vendor={vendor}
          key={vendor.id}
          toggle={leaf}
        />
      ))}
    </div>
  );
};

export default Vendors;
