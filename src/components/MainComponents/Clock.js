import React, { useState, useEffect } from "react";

/*
class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: new Date()
      });
    }
  
    render() {
      return (
        <div className="text-center text-secondary pt-1">
          <h5>{this.state.date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</h5>
        </div>
      );
    }
  }
*/

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
  });
  return (
    <div className="text-center text-secondary pt-1">
      <h6>{currentTime}</h6>
    </div>
  );
};

export default Clock;
