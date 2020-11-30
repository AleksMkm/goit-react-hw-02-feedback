import React, { Component, Fragment } from "react";
import styles from "./Feedback.module.css";

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <Fragment>
        <p className={styles.title}>Please leave feedback</p>
        <div className={styles.feedbackBtns}>
          <button className={styles.btn}>Good</button>
          <button className={styles.btn}>Neutral</button>
          <button className={styles.btn}>Bad</button>
        </div>
        <p className={styles.title}>Statistics</p>
        <ul className={styles.list}>
          <li className={styles.item}>Good:</li>
          <li className={styles.item}>Neutral:</li>
          <li className={styles.item}>Bad:</li>
          <li className={styles.item}>Total:</li>
          <li className={styles.item}>Positive feedback:</li>
        </ul>
      </Fragment>
    );
  }
}

export default Feedback;
