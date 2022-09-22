import Vendors from 'components/vendor';
import { criteriaData, vendorData } from 'data/vendors';
import React from 'react';
import styles from './scss/app.module.scss';
function App() {
  return (
    <div className={styles.page}>
      <h1 className={styles.heading}>
        Welcome back
        <span className={styles.span}>Amanda</span>
        <div
          className={styles.button}
          onClick={() => {
            window.location.reload();
          }}
        >
          Reset
        </div>
      </h1>
      <Vendors criteria={criteriaData} data={vendorData} />
    </div>
  );
}

export default App;
