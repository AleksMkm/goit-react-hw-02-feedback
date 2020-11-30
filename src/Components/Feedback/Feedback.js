import React, { Component, Fragment } from "react";
import styles from "./Feedback.module.css";
import Statistics from "./Statistics";
import Controls from "./Controls";

class Feedback extends Component {
  state = {
    good: 7,
    neutral: 2,
    bad: 3,
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const percent = ((good / total) * 100).toFixed(0);

    return (
      <Fragment>
        <p className={styles.title}>Please leave feedback</p>
        <Controls />
        <p className={styles.title}>Statistics</p>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          percent={percent}
        />
      </Fragment>
    );
  }
}

export default Feedback;
