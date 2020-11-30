import React, { Component } from "react";
import Container from "./Components/Container";
import Section from "./Components/Section";
import Controls from "./Components/Controls";
import Statistics from "./Components/Statistics";
import Notification from "./Components/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
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
      <Container>
        <Section title="Please leave feedback">
          <Controls onClick={this.handleFeedback} />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              percent={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </Container>
    );
  }
}

export default App;
