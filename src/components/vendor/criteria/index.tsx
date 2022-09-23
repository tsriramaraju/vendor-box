import { Headings, Vendor } from 'interfaces/vendor';
import { FiChevronDown, FiChevronUp, FiXCircle } from 'react-icons/fi';
import NewVendor from './newVendor';
import styles from './styles.module.scss';

interface props {
  headings: Headings[];
  setHeadings: (headings: Headings[]) => void;
  setLeaf: (leaf: string) => void;
  leaf: string;
  remainingVendors: Vendor[];
  setVendors: (vendors: Vendor[]) => void;
  vendors: Vendor[];
  setRemainingVendors: (vendors: Vendor[]) => void;
  setRemainingHeadings: (prev: any) => void;
}

const CriteriaBox = ({
  headings,
  setHeadings,
  leaf,
  setLeaf,
  remainingVendors,
  setVendors,
  vendors,
  setRemainingVendors,
  setRemainingHeadings,
}: props) => {
  return (
    <div className={styles.container}>
      <NewVendor
        remainingVendors={remainingVendors}
        setVendors={setVendors}
        vendors={vendors}
        setRemainingVendors={setRemainingVendors}
      />
      <p className={styles.score}>Overall Score</p>
      {headings.map((heading) => (
        <div key={heading.name} className={styles.criteria}>
          <div className={styles.value}>
            {heading.leaf ? (
              leaf === heading.name ? (
                <FiChevronUp
                  className={styles.icon}
                  onClick={() => setLeaf('')}
                />
              ) : (
                <FiChevronDown
                  className={styles.icon}
                  onClick={() => setLeaf(heading.name)}
                />
              )
            ) : null}
            <p className={styles.text}>{heading.name}</p>
            <FiXCircle
              onClick={() => {
                setHeadings(
                  headings.filter((val) => val.name !== heading.name)
                );
                setRemainingHeadings((prev: any) => [...prev, heading]);
              }}
              className={styles.close}
            />
          </div>

          {heading.leaf && leaf === heading.name && (
            <div className={styles.leaf}>
              {heading.leaf.map((leaf) => (
                <p className={styles.text}>{leaf}</p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CriteriaBox;
