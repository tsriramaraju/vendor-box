import { Headings, Vendor } from 'interfaces/vendor';
import { FiX } from 'react-icons/fi';
import styles from './styles.module.scss';
import Score from './score';

interface props {
  vendor: Vendor;
  criteria: Headings[];
  toggle?: string;
  close: () => void;
}

const VendorBox = ({ criteria, vendor, toggle, close }: props) => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <FiX className={styles.icon} onClick={close} />
        <img className={styles.image} src={vendor.logo} alt={vendor.name} />
        <h3 className={styles.title}>{vendor.name}</h3>
      </div>
      <Score score={vendor.score} />
      {criteria.map(({ name, leaf }) => {
        const exists = vendor.data.find((val) => val.name === name);
        const value = exists ? exists.value : 'N/A';

        return (
          <div
            className={`${styles.value} ${toggle === name && styles.expand}`}
            key={name}
          >
            <p className={styles.text}>{value}</p>

            {toggle === name && leaf && (
              <div className={styles.leaf}>
                {leaf.map((leafVal) => {
                  let value = 'N/A';

                  if (exists && exists.leaf) {
                    const index = exists.leaf.findIndex(
                      (val) => val.name === leafVal
                    );

                    value = index !== -1 ? exists.leaf[index].value : 'N/A';
                  }

                  return (
                    <div className={`${styles.value}`} key={leafVal}>
                      <p className={styles.text}>{value}</p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default VendorBox;
