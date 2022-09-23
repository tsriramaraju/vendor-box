import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styles from './styles.module.scss';

interface props {
  score: number;
}

const Score = ({ score }: props) => {
  const color = score < 5 ? 'red' : score < 8 ? 'orange' : 'green';

  return (
    <div className={styles.score}>
      <CircularProgressbar
        className={styles.progress}
        text={score.toString()}
        background
        minValue={0}
        value={score}
        maxValue={10}
        styles={buildStyles({
          textSize: '2.2rem',
          textColor: color,
          backgroundColor: 'white',
          trailColor: 'white',
          pathColor: color,
        })}
      />
    </div>
  );
};

export default Score;
