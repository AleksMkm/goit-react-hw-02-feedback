import React, { Fragment } from "react";
import styles from "./Controls.module.css";

function Controls({ onClick }) {
  return (
    <Fragment>
      <div className={styles.feedbackBtns}>
        <button className={styles.btn} data-action="good" onClick={onClick}>
          Good
        </button>
        <button className={styles.btn} data-action="neutral" onClick={onClick}>
          Neutral
        </button>
        <button className={styles.btn} data-action="bad" onClick={onClick}>
          Bad
        </button>
      </div>
    </Fragment>
  );
}

export default Controls;
