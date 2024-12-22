import React from 'react';
import './App.css';
import './Calculator.css';
import Facebookemoji from './Facebookemoji.js';

function App() {
  return (
    <div className="App">
      <h1>React Facebook Emoji Counter</h1>
      <div className="emoji-counters">
        {/* Example usage of the FacebookEmojiCounter component */}
        <Facebookemoji type="Like" />
        <Facebookemoji type="Love" />
        <Facebookemoji type="happy" />
      </div>
    </div>
  );
}

export default App;
