import React, { Fragment } from "react";
import styles from "./Controls.module.css";

function Controls() {
  return (
    <Fragment>
      <div className={styles.feedbackBtns}>
        <button className={styles.btn}>Good</button>
        <button className={styles.btn}>Neutral</button>
        <button className={styles.btn}>Bad</button>
      </div>
    </Fragment>
  );
}

export default Controls;
