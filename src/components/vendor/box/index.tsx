import { Headings, Vendor } from 'interfaces/vendor';
import { FiX } from 'react-icons/fi';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styles from './styles.module.scss';

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
      <div className={styles.score}>
        <CircularProgressbar
          className={styles.progress}
          text={vendor.score.toString()}
          background
          minValue={0}
          value={vendor.score}
          maxValue={10}
        />
      </div>
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
