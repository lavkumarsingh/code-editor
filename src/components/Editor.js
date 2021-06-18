import React, { useState, useEffet } from 'react';
//import './Editor.css';

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";

function Editor(props) {
    const {value, onchange} = props;

    function handleChange(value) {
        onchange(value)
    }
    return (
      <div className="Editor">
        
      </div>
    );
  }
  
  export default Editor;