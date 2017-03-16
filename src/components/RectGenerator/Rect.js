import React, { Component } from 'react';
import './Rect.css';

class Rect extends Component {
  render() {

    const styles = {
      backgroundColor: this.props.color,
      width: this.props.width + 'px',
      height: this.props.height + 'px',
      top: this.props.top + 'px',
      left: this.props.left + 'px',
    };

    return (
      <div className="rect"
        style={styles}>
      </div>
    );
  }
}

export default Rect;
