import { Vendor } from 'interfaces/vendor';
import { useState } from 'react';
import { FiPlusCircle, FiPlusSquare } from 'react-icons/fi';
import styles from './styles.module.scss';

interface props {
  remainingVendors: Vendor[];
  setVendors: (vendors: Vendor[]) => void;
  vendors: Vendor[];
  setRemainingVendors: (vendors: Vendor[]) => void;
}

const NewVendor = ({
  remainingVendors,
  setVendors,
  vendors,
  setRemainingVendors,
}: props) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={styles.container}>
      {vendors.length === 4 ? (
        <p className={styles.text}>
          Note: To add more vendors to compare you need to first remove one or
          more vendors. At a time maximum 4 vendors are allowed to compare.
        </p>
      ) : toggle ? (
        <div className={styles.addContainer}>
          {remainingVendors.map((vendor) => (
            <div
              className={styles.button}
              key={vendor.id}
              onClick={() => {
                setVendors([...vendors, vendor]);
                setRemainingVendors(
                  remainingVendors.filter((val) => val.id !== vendor.id)
                );
                setToggle(false);
              }}
            >
              <p className={styles.vendor}>{vendor.name}</p>
              <FiPlusSquare className={styles.add} />
            </div>
          ))}
        </div>
      ) : (
        <>
          <FiPlusCircle
            onClick={() => {
              setToggle(true);
            }}
            className={styles.icon}
          />
          <h3 className={styles.title}>Add New Vendor</h3>
        </>
      )}
    </div>
  );
};

export default NewVendor;
