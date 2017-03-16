import React from 'react';
import styles from './App.css';
import RectGenerator from './RectGenerator';

const App = () => (
  <div className={styles.app}>
    <h2>Rect generator</h2>
    <RectGenerator />
  </div>
);

export default App;
