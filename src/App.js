import React, { Component } from "react";
import "./App.css";
import FeedbackButton from "./components/feedbackButton/FeedbackButton";
import Statistics from "./components/statistic/Statistics";
import Section from "./components/section/Section";
import Notification from "./components/notification/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  getTotal = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  getPercentage = () => {
    return Math.round((this.state.good / this.getTotal()) * 100);
  };
  onHandleClick = e => {
    const name = e.target.name;
    this.setState({
      [name]: this.state[name] + 1
    });
  };
  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackButton onHandleClick={this.onHandleClick} />
        </Section>
        <Section title="STATISTIC">
          {this.getTotal() === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              getTotal={this.getTotal}
              getPercentage={this.getPercentage}
            />
          )}
        </Section>
      </>
    );
  }
}
export default App;
