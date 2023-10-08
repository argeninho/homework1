import React from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { secnods: 0 };
  }

  tick() {
    this.setState((state) => ({
      secnods: state.secnods + 1,
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <div>Seconds: {this.state.secnods}</div>;
  }
}

export default Timer;
