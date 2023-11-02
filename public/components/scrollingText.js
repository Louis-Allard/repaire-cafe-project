import React from "react";
import "./ScrollingText.css";

class ScrollingText extends React.Component {
  render() {
    return (
      <div className="scrolling-text-container">
        <div className="scrolling-text-content">{this.props.text}</div>
      </div>
    );
  }
}

export default ScrollingText;
