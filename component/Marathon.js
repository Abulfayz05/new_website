import React from "react";
import styles from "../styles/Marathon.module.css";

export default function Marathon() {
  return (
    <div className={styles.goal__box}>
      <h2 className={styles.box__title}>
        Ovoz yig'ish <br />
        2-bosqichi marafoni
      </h2>
      <div className={styles.deadline}>
        <p className={styles.deadline__date}>
          Start <br />
          21 Okt
        </p>
        <p className={styles.deadline__date}>
          Finish <br />
          1 Dek
        </p>
      </div>
      <h3 className={styles.aimtext}>MAQSAD</h3>
      <div className={styles.archeryAssets}>
        <img className={styles.archerImage} src="/archer1.png" alt="archer master" />
        <span className={styles.archerTarget}>
          <img className={styles.archerImage} src="/archer2.png" alt="archer target" />
          <p className={styles.timeInfo}>2000 soat</p>
        </span>
      </div>
    </div>
  );
}
