import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, { useState } from 'react';

const TextEditor = () => {
  const [text, setText] = useState('');
  const [font, setFont] = useState('Arial');
  const [fontSize, setFontSize] = useState('16px');
  const [fontColor, setFontColor] = useState('#000');
  const [language, setLanguage] = useState('English');

  const handleTextChange = newText => {
    setText(newText);
  };

  const handleFontChange = newFont => {
    setFont(newFont);
  };

  const handleFontSizeChange = newSize => {
    setFontSize(newSize);
  };

  const handleFontColorChange = newColor => {
    setFontColor(newColor);
  };

  const handleLanguageChange = newLanguage => {
    setLanguage(newLanguage);
  };

  const handleSpecialAction = action => {
    switch (action) {
      case 'clear':
        setText('');
        break;
      case 'undo':
        // Implement undo functionality
        break;
      // Add more cases for other special actions
      default:
        break;
    }
  };

  const handleKeyPress = event => {
    setText(text + event.target.value);
  };

  return (
    <div className="text-editor">
      <div className="editor-area" style={{ fontFamily: font, fontSize: fontSize, color: fontColor }}>
        {text}
      </div>
      <div className="keyboard">
        <input type="text" onChange={handleKeyPress} />
      </div>
      <div className="formatting-options">
        <label htmlFor="font">Font:</label>
        <select id="font" onChange={event => handleFontChange(event.target.value)}>
          <option value="Arial">Arial</option>
          <option value="Times New Roman">Times New Roman</option>
          {/* Add more font options as needed */}
        </select>

        <label htmlFor="fontSize">Font Size:</label>
        <input type="number" id="fontSize" onChange={event => handleFontSizeChange(event.target.value)} />

        <label htmlFor="fontColor">Font Color:</label>
        <input type="color" id="fontColor" onChange={event => handleFontColorChange(event.target.value)} />
      </div>
      <div className="special-actions">
        <button onClick={() => handleSpecialAction('clear')}>Clear</button>
        <button onClick={() => handleSpecialAction('undo')}>Undo</button>
        {/* Add more special actions buttons as needed */}
      </div>
      <div className="language-selector">
        <select onChange={event => handleLanguageChange(event.target.value)}>
          <option value="English">English</option>
          <option value="Hebrew">Hebrew</option>
          {/* Add more language options as needed */}
        </select>
      </div>
    </div>
  );
};

export default TextEditor;


export default App
