import { Headings } from 'interfaces/vendor';
import {
  FiChevronDown,
  FiChevronUp,
  FiPlusCircle,
  FiXCircle,
} from 'react-icons/fi';
import styles from './styles.module.scss';

interface props {
  headings: Headings[];
  setHeadings: (headings: Headings[]) => void;
  setLeaf: (leaf: string) => void;
  leaf: string;
}

const CriteriaBox = ({ headings, setHeadings, leaf, setLeaf }: props) => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <FiPlusCircle className={styles.icon} />

        <h3 className={styles.title}>Add New Vendor</h3>
      </div>
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
