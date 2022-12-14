import { Headings, Vendor } from 'interfaces/vendor';
import { useState } from 'react';
import VendorBox from './box';
import CriteriaBox from './criteria';
import CriteriaSelection from './selection';
import styles from './styles.module.scss';

interface props {
  data: Vendor[];
  criteria: Headings[];
}

const Vendors = ({ data, criteria }: props) => {
  const [leaf, setLeaf] = useState('');
  const [vendors, setVendors] = useState<Vendor[]>(
    data.filter((vendor, i) => i < 4)
  );
  const [remainingVendors, setRemainingVendors] = useState<Vendor[]>(
    data.filter((vendor, i) => i >= 4)
  );
  const [headings, setHeadings] = useState<Headings[]>(criteria);
  const [remainingHeadings, setRemainingHeadings] = useState<Headings[]>([]);
  return (
    <div className={styles.container}>
      <CriteriaSelection
        headings={headings}
        setHeadings={setHeadings}
        remainingHeadings={remainingHeadings}
        setRemainingHeadings={setRemainingHeadings}
      />
      <div className={styles.content}>
        <CriteriaBox
          setRemainingHeadings={setRemainingHeadings}
          headings={headings}
          setHeadings={setHeadings}
          leaf={leaf}
          setLeaf={setLeaf}
          remainingVendors={remainingVendors}
          setVendors={setVendors}
          vendors={vendors}
          setRemainingVendors={setRemainingVendors}
        />
        {vendors.map((vendor) => (
          <VendorBox
            close={() => {
              setVendors((prev) => prev.filter((val) => val.id !== vendor.id));
              setRemainingVendors((prev) => [...prev, vendor]);
            }}
            criteria={headings}
            vendor={vendor}
            key={vendor.id}
            toggle={leaf}
          />
        ))}
      </div>
    </div>
  );
};

export default Vendors;
