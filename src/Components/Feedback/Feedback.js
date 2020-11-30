import React, { Component, Fragment } from "react";
import styles from "./Feedback.module.css";
import Statistics from "./Statistics";
import Controls from "./Controls";

class Feedback extends Component {
  state = {
    good: 10,
    neutral: 2,
    bad: 3,
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return +((this.state.good / this.countTotalFeedback()) * 100).toFixed(0);
  };

  handleFeedback = (e) => {
    const feedbackType = e.target.dataset.action;
    this.setState((prevState) => ({
      [feedbackType]: prevState[feedbackType] + 1,
    }));
    e.target.blur();
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <Fragment>
        <p className={styles.title}>Please leave feedback</p>
        <Controls onClick={this.handleFeedback} />
        <p className={styles.title}>Statistics</p>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          percent={this.countPositiveFeedbackPercentage()}
        />
      </Fragment>
    );
  }
}

export default Feedback;
