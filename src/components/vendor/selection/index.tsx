import { Headings } from 'interfaces/vendor';
import { useState } from 'react';
import { FiChevronDown, FiChevronUp, FiPlusSquare } from 'react-icons/fi';
import styles from './styles.module.scss';

interface props {
  headings: Headings[];
  setHeadings: (headings: Headings[]) => void;
  remainingHeadings: Headings[];
  setRemainingHeadings: (headings: Headings[]) => void;
}

const CriteriaSelection = ({
  headings,
  setHeadings,
  remainingHeadings,
  setRemainingHeadings,
}: props) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className={styles.container}>
      <h5
        onClick={() => {
          setToggle(!toggle);
        }}
        className={styles.heading}
      >
        Add Criteria
        {toggle ? (
          <FiChevronUp className={styles.icon} />
        ) : (
          <FiChevronDown className={styles.icon} />
        )}
      </h5>
      <div
        className={`${styles.overlay} ${toggle && styles.active} ${
          remainingHeadings.length === 0 && styles.small
        }`}
      >
        {remainingHeadings.length === 0 ? (
          <p className={styles.errorText}>No more criteria to add</p>
        ) : (
          remainingHeadings.map((heading) => (
            <div
              key={heading.name}
              className={styles.button}
              onClick={() => {
                setHeadings([...headings, heading]);
                setRemainingHeadings(
                  remainingHeadings.filter((val) => val.name !== heading.name)
                );
                setToggle(false);
              }}
            >
              <p className={styles.text}>{heading.name}</p>
              <FiPlusSquare className={styles.icon} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CriteriaSelection;
