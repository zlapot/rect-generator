import React, { Component } from 'react';
import { h2r, r2h, interpolateColor } from './colorInterpolation';
import Rect from './Rect';
import './Config.css';

class Config extends Component {
  constructor(props) {
    super(props);
    this.state = {
      store: []
    };
  }

  generateRect() {
    const items = this.countInput.value,
      scol = h2r(this.startInput.value),
      ecol = h2r(this.endInput.value),
      minW = this.minWidthInput.value,
      maxW = this.maxWidthInput.value,
      minH = this.minHeightInput.value,
      maxH = this.maxHeightInput.value,
      div = document.getElementById('rect-box'),
      offsetW = div.offsetWidth,
      offsetH = div.offsetHeight;

    let store = [];
    const factorStep = 1 / (items - 1);
    for (let i = 0; i < items; i++) {
      let icol = interpolateColor(scol, ecol, factorStep * i);

      store.push({
        color: r2h(icol),
        width: this.getRandomInt(minW, maxW),
        height: this.getRandomInt(minH, maxH),
        top: this.getRandomInt(0, offsetH),
        left: this.getRandomInt(0, offsetW),
      });
    };

    this.setState({
      store: store
    });
  }

  getRandomInt(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
  }

  changeHandle(e) {
    const target = e.target,
      label = target.nextElementSibling;

    label.textContent = target.value;
  }

  render() {

    return (
      <div className="config">
        <div className="clearfix">
          <div className="config-ranges"
            onChange={this.changeHandle.bind(this)}>
            <div className="config-range">
              <label htmlFor="count">Amount:</label>
            	<input type="range" min="1" max="20" id="count"
                ref={(input) => { this.countInput = input }}/>
              <span>0</span>
            </div>
            <div className="config-range">
              <label htmlFor="minWidth">Min width:</label>
              <input type="range" min="1" max="200" id="minWidth"
                ref={(input) => { this.minWidthInput = input }}/>
              <span>0</span>
            </div>
            <div className="config-range">
              <label htmlFor="maxWidth">Max width:</label>
              <input type="range" min="1" max="200" id="maxWidth"
                ref={(input) => { this.maxWidthInput = input }}/>
              <span>0</span>
            </div>
            <div className="config-range">
              <label htmlFor="minHeight">Min height:</label>
              <input type="range" min="1" max="200" id="minHeight"
                ref={(input) => { this.minHeightInput = input }}/>
              <span>0</span>
            </div>
            <div className="config-range">
              <label htmlFor="maxHeight">Max height:</label>
              <input type="range" min="1" max="200" id="maxHeight"
                ref={(input) => { this.maxHeightInput = input }}/>
              <span>0</span>
            </div>

            <div className="config-color">
              <label htmlFor="startColor">Start color:</label>
              <input type="color" id="startColor"
                ref={(input) => { this.startInput = input }}/>
              <span>0</span>
            </div>
            <div className="config-color">
              <label htmlFor="endColor">End color:</label>
              <input type="color" id="endColor"
                ref={(input) => { this.endInput = input }}/>
              <span>0</span>
            </div>

            <button id="generateBtn"
              onClick={this.generateRect.bind(this)}> Start </button>
          </div>
        </div>

        <div id="rect-box">
          {this.state.store.map((rect, index) =>
            <Rect key={index}
              color={rect.color}
              width={rect.width}
              height={rect.height}
              top={rect.top}
              left={rect.left}/>
          )}
        </div>

      </div>
    );
  }
}

export default Config;
